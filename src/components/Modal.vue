<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="box">
        <h3 class="title is-3 has-text-centered">
          <!-- Title slot -->
          <slot name="title"></slot>
        </h3>
        <div class="modal-card-body">
          <!-- Form slot -->
          <slot name="form"></slot>
          <!-- Message slot -->
          <slot name="message"></slot>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="closeModal"
    ></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Message from '../components/Message.vue';
export default {
  name: 'modal',
  methods: mapActions(['closeModal']),
  components: {
    Message
  }
};
</script>

<style></style>
