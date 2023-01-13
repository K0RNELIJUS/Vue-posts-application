<template>
  <!-- <nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav> -->
  <div>
    <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
    <ul>
      <li v-for="item in currentItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 2,
      items: this.posts
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    currentItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
};
</script>
