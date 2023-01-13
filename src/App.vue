<template>
  <div id="root">
    <Hero />
    <Breadcrumb />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: { Hero, Breadcrumb, Footer }
};
</script>

<style></style>
