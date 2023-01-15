<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <slot></slot>
      <div class="box">
        <h3 class="title is-3 has-text-centered"><slot></slot></h3>
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
export default {
  name: 'modal',
  methods: mapActions(['closeModal'])
};
</script>

<style></style>
