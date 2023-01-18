<template>
  <nav class="pagination is-info" role="navigation" aria-label="pagination">
    <a
      class="pagination-previous"
      @click="prevPage"
      :disabled="currentPage === 1"
      >Previous</a
    >
    <a
      class="pagination-next"
      @click="nextPage"
      :disabled="currentPage === totalPages"
      >Next page</a
    >
    <ul class="pagination-list">
      <li v-for="i in totalPages" :key="i">
        <a
          v-if="i === currentPage"
          class="pagination-link is-current"
          aria-current="page"
          @click="changePage(i)"
          >{{ i }}</a
        >
        <a v-else class="pagination-link" @click="changePage(i)">{{ i }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['currentPage', 'totalPages'],
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('pageChanged', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('pageChanged', this.currentPage + 1);
      }
    },
    changePage(page) {
      this.$emit('pageChanged', page);
    }
  }
};
</script>

<style></style>
