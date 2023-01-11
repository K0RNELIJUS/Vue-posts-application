<template>
  <div id="root">
    <Hero />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: { Hero, Footer }
};
</script>

<style>
html,
body {
  height: 100vh;
}
</style>
