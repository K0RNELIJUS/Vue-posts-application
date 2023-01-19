<template>
  <main>
    <section class="section full-height ">
      <div
        class="is-flex is-justify-content-space-between is-flex-wrap-wrap-reverse"
      >
        <button class="button is-primary mb-5" @click="openModalSetMode">
          Create new article
        </button>
        <!-- Search -->
        <Search @search="handleSearch" />
      </div>
      <!-- Posts -->
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
import Search from '../components/Search.vue';
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'posts-page',
  components: { Search, Card, Pagination },
  data() {
    return {
      // Pagination
      currentPage: 1,
      postsPerPage: 6,
      searchTerm: ''
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
    // Get author name
    getAuthorName(authorId) {
      const author = this.allAuthors.find(author => author.id === authorId);
      return author ? author.name.toLowerCase() : '';
    },
    // Search
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm.toString().toLowerCase();
      this.currentPage = 1;
    },
    // Pagination
    changePage(newPage) {
      this.currentPage = newPage;
    }
  },

  computed: {
    ...mapGetters(['allPosts', 'allAuthors']),
    // Pagination and Search
    totalPages() {
      if (this.searchTerm === '') {
        return Math.ceil(this.allPosts.length / this.postsPerPage);
      } else {
        let filteredPosts = this.allPosts.filter(
          post =>
            post.title.toLowerCase().includes(this.searchTerm) ||
            post.body.toLowerCase().includes(this.searchTerm)
        );
        return Math.ceil(filteredPosts.length / this.postsPerPage);
      }
    },
    filteredPosts() {
      let filteredPosts = this.allPosts;
      if (this.searchTerm) {
        filteredPosts = filteredPosts.filter(
          post =>
            post.title.toLowerCase().includes(this.searchTerm) ||
            post.body.toLowerCase().includes(this.searchTerm) ||
            post.created_at.includes(this.searchTerm) ||
            post.updated_at.includes(this.searchTerm) ||
            this.getAuthorName(post.author).includes(this.searchTerm)
        );
      }
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return filteredPosts.slice(start, end);
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
  height: calc(100vh);
}
</style>
