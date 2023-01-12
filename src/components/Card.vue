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

      <div v-if="isPrimary" class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <footer class="card-footer">
      <div v-if="isPrimary">
        <a href="#" class="card-footer-item">Save</a>
      </div>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item is-danger">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['isPrimary', 'post', 'authors'],
  data() {
    return {
      isEddited: false
    };
  },
  methods: {},
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
