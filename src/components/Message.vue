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
      'clearMessage'
    ]),
    // -- Clear and close message
    clearCloseMessage() {
      // Clear message
      this.messageContent({
        title: '',
        body: '',
        isDelete: true,
        isSuccess: false,
        isError: false
      });
      //   Close message
      this.closeMessage();
      //   Close modal
      this.closeModal();
    },

    // -- Delete article
    deleteArticle() {
      this.deletePost(this.currentActivePostId);

      this.messageContent({
        title: 'Success',
        body: 'Your post has been deleted.',
        isDelete: false,
        isSuccess: true,
        isError: false
      });
      // Navigate to Posts page
      this.$router.push('/');
    }
  },

  computed: {
    ...mapGetters(['messageState', 'currentActivePostId'])
  },
  unmounted() {
    this.clearMessage();
  }
};
</script>

<style></style>
