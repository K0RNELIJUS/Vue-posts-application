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
        <div class="column is-half is-offset-one-quarter">
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
  // Redirect to the error page if the post id does not exist
  beforeRouteEnter(to, from, next) {
    const postId = to.params.id;
    // Check if the post id exists in the data store
    const callback = function(vm) {
      if (!vm.paginatedPosts.find(post => post.id == postId)) {
        // If the post id does not exist, navigate to the error page
        next({ name: 'error' });
      } else {
        next();
      }
    };
    next(callback);
  },
  methods: {
    ...mapActions(['findSinglePost', 'fetchAuthors', 'openModal'])
  },

  computed: {
    ...mapGetters(['singlePost', 'allAuthors', 'postsError', 'paginatedPosts'])
  },

  async created() {
    await this.fetchAuthors();
    await this.findSinglePost(this.id);
  }
  // infinite loop
  // updated() {
  //   this.fetchAuthors();
  //   this.findSinglePost(this.id);
  // }
};
</script>

<style>
.fullheight {
  height: 100vh;
}
</style>
