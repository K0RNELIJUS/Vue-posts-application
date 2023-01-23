<template>
  <form class="form" @submit="onSubmit">
    <div class="field">
      <label class="label">Author</label>
      <div class="control">
        <div class="select" :class="authorSelectStyle">
          <select v-model="authorName">
            <option
              v-for="author in allAuthors"
              :key="author.id"
              :value="author.id"
              >{{ author.name }}</option
            >
          </select>
        </div>
        <div
          v-if="validationMessages.authorName && !initialSubmit"
          class="has-text-danger"
        >
          {{ validationMessages.authorName }}
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input"
          :class="titleInputStyle"
          type="text"
          v-model="title"
          placeholder="Title"
        />
      </div>
      <div
        v-if="validationMessages.title && !initialSubmit"
        class="has-text-danger"
      >
        {{ validationMessages.title }}
      </div>
    </div>

    <div class="field">
      <label class="label">Article</label>
      <div class="control">
        <textarea
          :class="bodyInputStyle"
          class="textarea"
          v-model="body"
          placeholder="Text"
        ></textarea>
      </div>
      <div
        v-if="validationMessages.body && !initialSubmit"
        class="has-text-danger"
      >
        {{ validationMessages.body }}
      </div>
    </div>

    <div class="control">
      <button class="button is-primary" type="submit">
        Submit
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
      body: '',
      authorName: '',
      authorSelectStyle: '',
      titleInputStyle: '',
      bodyInputStyle: '',
      validationMessages: {
        authorName: 'Author is required',
        title: 'Title is required',
        body: 'Article text is required'
      },
      initialSubmit: true,
      isFormValid: false
    };
  },
  computed: {
    ...mapGetters(['allAuthors', 'postsError'])
  },
  methods: {
    ...mapActions(['addPost', 'openMessage', 'messageContent', 'clearMessage']),

    validateInputs() {
      if (this.initialSubmit) {
        return;
      }
      let isAuthorNameValid;
      let isTitleValid;
      let isBodyValid;

      if (this.authorName === '') {
        this.authorSelectStyle = 'is-danger';
        isAuthorNameValid = false;
      } else {
        this.authorSelectStyle = 'is-primary';
        isAuthorNameValid = true;
      }
      if (this.title.length === 0) {
        this.titleInputStyle = 'is-danger';
        isTitleValid = false;
      } else {
        this.titleInputStyle = 'is-primary';
        isTitleValid = true;
      }

      if (this.body.length === 0) {
        this.bodyInputStyle = 'is-danger';
        isBodyValid = false;
      } else {
        this.bodyInputStyle = 'is-primary';
        isBodyValid = true;
      }

      this.validationMessages = {
        authorName: isAuthorNameValid ? '' : 'Author is required',
        title: isTitleValid ? '' : 'Title is required',
        body: isBodyValid ? '' : 'Article text is required'
      };

      return isAuthorNameValid && isTitleValid && isBodyValid;
    },

    async onSubmit(e) {
      e.preventDefault();
      this.initialSubmit = false;
      this.validateInputs();

      if (!this.validateInputs()) {
        return;
      }

      const newArticle = {
        title: this.title,
        body: this.body,
        author: this.authorName,
        created_at: currentDateTime,
        updated_at: ''
      };

      //  Add new post
      await this.addPost(newArticle);
      // Set message
      // this.clearMessage();
      // Check if there is an error and display message
      if (this.postsError) {
        this.messageContent({
          title: 'Error',
          body: 'Something went wrong',
          isDelete: false,
          isSuccess: false,
          isError: true
        });
      } else {
        this.messageContent({
          title: 'Success',
          body: 'Post succesfully created',
          isDelete: false,
          isSuccess: true,
          isError: false
        });
      }
      this.openMessage();
    }
  },
  mounted() {
    if (!this.initialSubmit) {
      this.$nextTick(() => {
        this.validateInputs();
      });
    }
  },
  watch: {
    authorName: 'validateInputs',
    title: 'validateInputs',
    body: 'validateInputs'
  }
};
</script>

<style></style>
