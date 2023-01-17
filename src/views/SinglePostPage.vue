<template>
  <main>
    <section class="section fullheight">
      <router-link to="/">
        <button class="button is-primary mb-5">
          <span class="icon is-small"> <i class="fas fa-arrow-left"></i> </span
          ><span>Back</span>
        </button>
      </router-link>

      <div class="columns">
        <div class="column">
          <Card :isPrimary="true" :authors="allAuthors" :post="singlePost" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Card from '../components/Card.vue';
// Vuex
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'single-post-page',
  components: { Card },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: { ...mapActions(['fetchPost', 'fetchAuthors']) },

  computed: { ...mapGetters(['singlePost', 'allAuthors']) },

  async created() {
    this.fetchAuthors();
    this.fetchPost(this.id);
  }
};
</script>

<style>
.fullheight {
  height: calc(100vh - 380px);
}
</style>
