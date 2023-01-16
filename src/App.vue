<template>
  <div id="root">
    <Hero />
    <Breadcrumb />
    <router-view />
    <Footer />
    <Modal v-if="modalState">
      <template v-if="!messageState.isOpen" slot="title"
        >Create new article</template
      >
      <template v-if="!messageState.isOpen" slot="form"
        ><FormCreate
      /></template>
      <template v-if="messageState.isOpen" slot="message"><Message /></template>
    </Modal>
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
import FormCreate from './components/FormCreate.vue';
import Message from './components/Message.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  components: { Hero, Breadcrumb, Footer, Modal, FormCreate, Message },
  computed: mapGetters(['modalState', 'messageState'])
};
</script>

<style></style>
