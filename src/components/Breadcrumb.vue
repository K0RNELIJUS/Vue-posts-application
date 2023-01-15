<template>
  <nav
    class="breadcrumb has-arrow-separator px-6 px-7 pt-5 mb-0"
    aria-label="breadcrumbs"
  >
    <ul>
      <li @click="resetSinglePost">
        <router-link to="/">All Posts</router-link>
      </li>

      <li v-if="this.singlePost" class="is-active">
        <a href="#" aria-current="page">{{ this.singlePost.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['singlePost'])
  },

  methods: mapActions(['resetSinglePost'])
};
</script>

<style></style>
