<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModalClearMsg"></div>
    <div class="modal-content">
      <div v-if="!messageState.isOpen" class="box">
        <h3 class="title is-3 has-text-centered">
          <!-- Title slot -->
          <slot name="title"></slot>
        </h3>
        <div class="modal-card-body">
          <!-- Form slot -->
          <slot name="form"></slot>
          <!-- Message slot -->
        </div>
      </div>
      <slot name="message"></slot>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="closeModalClearMsg"
    ></button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Message from '../components/Message.vue';
export default {
  name: 'modal',
  methods: {
    ...mapActions(['closeModal', 'clearMessage']),
    closeModalClearMsg() {
      this.closeModal();
      this.clearMessage();
    }
  },
  computed: mapGetters(['messageState']),
  components: {
    Message
  }
};
</script>

<style></style>
