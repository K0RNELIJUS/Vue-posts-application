<template>
  <article
    :class="{
      'message is-primary': messageState.isSuccess,
      'message is-danger': messageState.isError
    }"
  >
    <div class="message-header">
      <p>{{ messageState.title }}</p>
    </div>
    <div class="message-body">
      {{ messageState.body }}
    </div>
    <div class="is-flex is-justify-content-center pb-3">
      <button
        v-if="!messageState.isDelete"
        @click="clearCloseMessage"
        :class="{
          'button mx-1 is-primary': messageState.isSuccess,
          'button mx-1 is-danger': messageState.isError
        }"
      >
        Ok
      </button>
      <button
        v-if="messageState.isDelete"
        @click="deleteArticle"
        :class="{
          'button mx-1 is-primary ': messageState.isSuccess,
          'button mx-1 is-danger ': messageState.isError
        }"
      >
        Delete
      </button>

      <button
        v-if="messageState.isDelete"
        @click="clearCloseMessage"
        class="
          button mx-1 is-primary"
      >
        Cancel
      </button>
    </div>
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import setStatusMessage from '../services/setStatusMessage';
export default {
  data() {
    return {
      id: null
    };
  },
  methods: {
    ...mapActions([
      'closeMessage',
      'messageContent',
      'closeModal',
      'deletePost',
      'clearMessage',
      'clearError'
    ]),
    // -- Clear message & close modal
    clearCloseMessage() {
      this.clearMessage();
      this.closeModal();
    },

    // -- Delete article
    async deleteArticle() {
      // Delete post
      await this.deletePost(this.currentActivePostId);

      setStatusMessage(
        this.postsError,
        this.messageContent,
        'Article has been deleted'
      );

      if (!this.postsError) {
        this.$router.push('/');
      }
    }
  },

  computed: {
    ...mapGetters(['messageState', 'currentActivePostId', 'postsError'])
  },
  unmounted() {
    this.clearError();
    this.clearMessage();
  }
};
</script>

<style></style>
