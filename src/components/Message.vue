<template>
  <article class="message is-primary">
    <div class="message-header">
      <p>{{ messageState.title }}</p>
    </div>
    <div class="message-body">
      {{ messageState.body }}
    </div>
    <div class="is-flex is-justify-content-center pb-3">
      <button @click="clearCloseMessage" class="button is-primary">
        Ok
      </button>
    </div>
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['closeMessage', 'messageContent', 'closeModal']),

    clearCloseMessage() {
      // Clear message
      this.messageContent({
        title: '',
        body: ''
      });
      //   Close message
      this.closeMessage();
      //   Close modal
      this.closeModal();
    }
  },
  computed: {
    ...mapGetters(['messageState'])
  }
};
</script>

<style></style>
