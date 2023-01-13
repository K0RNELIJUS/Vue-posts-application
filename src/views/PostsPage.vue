<template>
  <section class="section">
    <div class="columns is-flex-wrap-wrap">
      <div v-if="!allPosts.length">
        <p>No articles posted yet</p>
      </div>
      <div
        v-for="post in allPosts"
        :key="post.id"
        class="column is-6-tablet is-4-desktop"
      >
        <router-link :to="`/${post.id}`">
          <Card :isPrimary="false" :authors="allAuthors" :post="post"></Card>
        </router-link>
      </div>
    </div>
    <!-- <Pagination :items="posts" /> -->
  </section>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';
// Components
import Breadcrumb from '../components/Breadcrumb.vue';
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';

export default {
  components: { Breadcrumb, Card, Pagination },

  methods: { ...mapActions(['fetchPosts', 'fetchAuthors']) },

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
