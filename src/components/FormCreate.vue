<template>
  <form class="form" @submit="onSubmit">
    <div v-if="!isEditMode" class="field">
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
      <button class="button is-primary" type="submit">
        {{ isEditMode ? 'Save' : 'Submit' }}
      </button>
    </div>
  </form>
</template>

<script>
import currentDateTime from '../services/currenDateTime';
import { mapGetters, mapActions } from 'vuex';
export default {
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

      //  Add new post
      this.addPost(newArticle);

      // Set message
      this.messageContent({
        title: 'Success',
        body: 'Article created successfully',
        isSuccess: true
      });

      this.openMessage();
    }
  },
  computed: {
    ...mapGetters(['allAuthors', 'isEditMode'])
  }
};
</script>

<style></style>
