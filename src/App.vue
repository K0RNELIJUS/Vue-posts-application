<template>
  <div id="root">
    <Hero />
    <router-view />
    <Footer />
    <Modal v-if="modalState">
      <template v-if="!messageState.isOpen" slot="title">{{
        isEditMode ? 'Edit article' : 'Create new article'
      }}</template>
      <template v-if="!messageState.isOpen" slot="form"
        ><template v-if="isEditMode">
          <FormEdit />
        </template>
        <template v-else>
          <FormCreate />
        </template>
      </template>
      <template v-if="messageState.isOpen" slot="message"><Message /></template>
    </Modal>
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
import FormCreate from './components/FormCreate.vue';
import FormEdit from './components/FormEdit.vue';
import Message from './components/Message.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  components: { Hero, Footer, Modal, FormCreate, FormEdit, Message },
  computed: mapGetters(['modalState', 'messageState', 'isEditMode'])
};
</script>

<style></style>
