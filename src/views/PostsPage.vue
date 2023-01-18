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
          v-for="post in filteredPosts"
          :key="post.id"
          class="column is-6-tablet is-4-desktop"
        >
          <Card :authors="allAuthors" :post="post" :id="post.id"></Card>
        </div>
      </div>
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @pageChanged="changePage"
      />
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
  data() {
    return {
      currentPage: 1,
      postsPerPage: 6
    };
  },

  methods: {
    ...mapActions([
      'fetchPosts',
      'fetchAuthors',
      'openModal',
      'createMode',
      'closeMessage'
    ]),
    // Open modal and set mode to create
    openModalSetMode() {
      this.openModal();
      this.createMode();
      this.closeMessage();
    },
    changePage(newPage) {
      this.currentPage = newPage;
    }
  },

  computed: {
    ...mapGetters(['allPosts', 'allAuthors']),
    totalPages() {
      return Math.ceil(this.allPosts.length / this.postsPerPage);
    },
    filteredPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.allPosts.slice(start, end);
    }
  },

  created() {
    this.fetchAuthors();
    this.fetchPosts();
  }
};
</script>

<style>
.full-height {
  height: 100vh;
}
</style>
