<template>
  <form class="form" @submit="onSubmit">
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
          class="textarea"
          :class="bodyInputStyle"
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
        Save
      </button>
    </div>
  </form>
</template>

<script>
import currentDateTime from '../services/currenDateTime';
import { mapGetters, mapActions } from 'vuex';
import setStatusMessage from '../services/setStatusMessage';
export default {
  data() {
    return {
      title: '',
      body: '',
      authorSelectStyle: '',
      titleInputStyle: '',
      bodyInputStyle: '',
      validationMessages: {
        title: 'Title is required',
        body: 'Article text is required'
      },
      initialSubmit: true,
      isFormValid: false
    };
  },
  computed: {
    ...mapGetters([
      'allAuthors',
      'currentActivePostId',
      'singlePost',
      'postsError'
    ])
  },
  methods: {
    ...mapActions(['openMessage', 'messageContent', 'fetchPost', 'updatePost']),

    validateInputs() {
      if (this.initialSubmit) {
        return;
      }

      let isTitleValid;
      let isBodyValid;

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
        title: isTitleValid ? '' : 'Title is required',
        body: isBodyValid ? '' : 'Article text is required'
      };

      return isTitleValid && isBodyValid;
    },

    async onSubmit(e) {
      e.preventDefault();
      this.initialSubmit = false;
      this.validateInputs();

      if (!this.validateInputs()) {
        return;
      }

      let updatedArticle = {
        title: this.title,
        body: this.body,
        author: this.singlePost.author,
        created_at: this.singlePost.created_at,
        updated_at: currentDateTime,
        id: this.singlePost.id
      };

      //  Update post
      await this.updatePost(updatedArticle);

      setStatusMessage(
        this.postsError,
        this.messageContent,
        'Article succesfully updated'
      );

      this.openMessage();
    }
  },
  mounted() {
    if (!this.initialSubmit) {
      this.$nextTick(() => {
        this.validateInputs();
      });
    }
    this.title = this.singlePost.title;
    this.body = this.singlePost.body;
  },
  watch: {
    title: 'validateInputs',
    body: 'validateInputs'
  }
};
</script>

<style></style>
