<template>
  <div class="card">
    <header class="card-header has-background-light">
      <p class="card-header-title">
        {{ post.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">{{ findAuthor }}</p>
        </div>
        <time datetime="2016-1-1">{{ latestDate }}</time>
      </div>
      <slot v-if="isPrimary" class="card-content">
        <div class="content">{{ post.body }}</div>
      </slot>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a
        href="/"
        @click="deletePost(post.id)"
        class="card-footer-item is-danger"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['isPrimary', 'post', 'authors'],
  data() {
    return {
      isEddited: false
    };
  },
  methods: {
    ...mapActions(['deletePost'])
  },
  computed: {
    findAuthor() {
      let author = this.authors.filter(
        author => author.id === this.post.author
      );
      return author[0].name;
    },

    latestDate() {
      return Date.parse(this.post.updated_at) > Date.parse(this.post.created_at)
        ? this.post.updated_at
        : this.post.created_at;
    }
  }
};
</script>

<style></style>
