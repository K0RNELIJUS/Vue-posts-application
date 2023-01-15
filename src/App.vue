<template>
  <div id="root">
    <Hero />
    <Breadcrumb />
    <router-view />
    <Footer />
    <Modal v-if="modalState" />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  components: { Hero, Breadcrumb, Footer, Modal },
  computed: mapGetters(['modalState'])
};
</script>

<style></style>
