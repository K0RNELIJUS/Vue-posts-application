<template>
  <form class="form" @submit="onSubmit">
    <div class="field">
      <label class="label">Author</label>
      <div class="control">
        <div class="select">
          <select v-model="authorName" required>
            <option
              v-for="author in allAuthors"
              :key="author.id"
              :value="author.id"
              >{{ author.name }}</option
            >
          </select>
        </div>
      </div>
    </div>

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
      <button class="button is-primary" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import currentDateTime from '../services/currenDateTime';
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      authorName: '',
      title: '',
      body: ''
    };
  },
  methods: {
    ...mapActions(['addPost', 'openMessage', 'messageContent']),

    onSubmit(e) {
      e.preventDefault();
      const newArticle = {
        title: this.title,
        body: this.body,
        author: this.authorName,
        created_at: currentDateTime,
        updated_at: ''
      };

      //  Post
      this.addPost(newArticle);

      //  Reset form
      this.authorName = '';
      this.title = '';
      this.body = '';

      //  Open message
      this.messageContent({
        title: 'Success',
        body: 'Article created successfully'
      });

      this.openMessage();
    }
  },
  computed: {
    ...mapGetters(['allAuthors'])
  }
};
</script>

<style></style>
