<template>
  <form class="form" @submit="onSubmit">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="title"
          placeholder="Title"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Article</label>
      <div class="control">
        <textarea
          class="textarea"
          v-model="body"
          placeholder="Text"
          required
        ></textarea>
      </div>
    </div>

    <div class="control">
      <button class="button is-primary" type="submit">
        Save
      </button>
    </div>
  </form>
</template>

<script>
import currentDateTime from '../services/currenDateTime';
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      title: '',
      body: ''
    };
  },
  methods: {
    ...mapActions(['openMessage', 'messageContent', 'fetchPost', 'updatePost']),

    onSubmit(e) {
      e.preventDefault();

      const updatedArticle = {
        title: this.title,
        body: this.body,
        author: this.singlePost.author,
        created_at: this.singlePost.created_at,
        updated_at: currentDateTime
      };

      //  Update post
      this.updatePost(this.currentActivePostId, updatedArticle);

      //  Reset form
      this.authorName = '';
      this.title = '';
      this.body = '';

      //  Open message
      this.messageContent({
        title: 'Success',
        body: 'Article updated successfully',
        isSuccess: true
      });

      this.openMessage();
    }
  },
  computed: {
    ...mapGetters(['allAuthors', 'currentActivePostId', 'singlePost'])
  },
  created() {
    this.title = this.singlePost.title;
    this.body = this.singlePost.body;
    console.log(this.singlePost);
  }
};
</script>

<style></style>
