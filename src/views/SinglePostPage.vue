<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <CardSingle :isPrimary="true" :authors="authors" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import CardSingle from '../components/CardSingle.vue';

export default {
  components: { CardSingle },
  data() {
    return {
      id: this.$route.params.id,
      post: {},
      authors: []
    };
  },
  methods: {
    async fetchData(method, url, id) {
      switch (method) {
        case 'getSinglePost': {
          try {
            const { data } = await axios.get(`${url}${id}`);
            this.post = data;
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
    this.fetchData('getSinglePost', 'http://localhost:3000/articles/', this.id);
  }
};
</script>

<style></style>
