<template>
  <section class="section is-fullheight">
    <div class="columns">
      <div class="column">
        <Card :isPrimary="true" :authors="allAuthors" :post="singlePost" />
      </div>
    </div>
  </section>
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

<style></style>
