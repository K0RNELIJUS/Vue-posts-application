<template>
  <section class="section">
    <Breadcrumb />
    <div class="columns is-flex-wrap-wrap">
      <div v-if="!posts.length">
        <p>No articles posted yet</p>
      </div>
      <div
        v-for="post in posts"
        :key="post.id"
        class="column is-6-tablet is-4-desktop"
      >
        <router-link :to="`/${post.id}`">
          <Card :isPrimary="false" :authors="authors" :post="post"></Card>
        </router-link>
      </div>
    </div>
    <!-- <Pagination :items="posts" /> -->
  </section>
</template>

<script>
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb.vue';
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';
// import useFetch from '../hooks/useFetch';
export default {
  data() {
    return {
      authors: [],
      posts: []
    };
  },
  components: { Breadcrumb, Card, Pagination },
  methods: {
    // getData() {
    //   const { data, loading, error, get, post, put, deleteData } = useFetch(
    //     'http://localhost:3000/articles',
    //     'all'
    //   );
    //   get();
    //   console.log(data);
    //   // this.posts.push(data);
    // }
    async fetchData(method, url, id) {
      switch (method) {
        case 'getPosts': {
          try {
            const { data } = await axios.get(url);
            this.posts = data;
          } catch (error) {
            console.log(error.message);
          }
          break;
        }
        case 'getAuthors': {
          try {
            const { data } = await axios.get(url);
            this.authors = data;
          } catch (error) {
            console.log(error.message);
          }
          break;
        }
      }
    }
  },

  async created() {
    this.fetchData('getAuthors', 'http://localhost:3000/authors');
    this.fetchData('getPosts', 'http://localhost:3000/articles');
  }
};
</script>

<style>
.full-height {
  height: calc(100vh);
}
</style>
