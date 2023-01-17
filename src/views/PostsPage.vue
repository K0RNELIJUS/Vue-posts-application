<template>
  <main>
    <section class="section ">
      <div class="is-flex ">
        <button class="button is-primary mb-5" @click="openModalSetMode">
          Create new article
        </button>
      </div>
      <div class="columns is-flex-wrap-wrap">
        <div
          class="column is-flex is-justify-content-center"
          v-if="!allPosts.length"
        >
          <h4 class="is-size-4">No articles posted yet</h4>
        </div>
        <div
          v-for="post in allPosts"
          :key="post.id"
          class="column is-6-tablet is-4-desktop"
        >
          <Card :authors="allAuthors" :post="post" :id="post.id"></Card>
        </div>
      </div>
      <Pagination />
    </section>
  </main>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';
// Components
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'posts-page',
  components: { Card, Pagination },

  methods: {
    ...mapActions(['fetchPosts', 'fetchAuthors', 'openModal', 'createMode']),
    openModalSetMode() {
      this.openModal();
      this.createMode();
    }
  },

  computed: { ...mapGetters(['allPosts', 'allAuthors']) },

  created() {
    this.fetchAuthors();
    this.fetchPosts();
  }
};
</script>

<style>
.full-height {
  height: calc(100vh);
}
</style>
