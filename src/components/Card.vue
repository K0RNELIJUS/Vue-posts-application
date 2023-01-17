<template>
  <div class="card">
    <router-link :to="`/article/${post.id}`">
      <header class="card-header has-background-light">
        <p class="card-header-title">
          {{ post.title }}
        </p>
      </header>
    </router-link>
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
      <a href="#" @click.prevent="editPost" class="card-footer-item">Edit</a>
      <a
        href="#"
        @click.prevent="deletePostSetMsg"
        class="card-footer-item is-danger"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: ['isPrimary', 'post', 'authors'],
  methods: {
    ...mapActions([
      'openModal',
      'deletePost',
      'messageContent',
      'openMessage',
      'clearMessage',
      'setCurrentActivePostId',
      'editMode',
      'fetchPost'
    ]),

    // -- Delete post
    deletePostSetMsg() {
      this.setCurrentActivePostId(this.post.id);

      this.clearMessage();
      this.messageContent({
        title: 'Are you sure?',
        body: 'You will not be able to recover this post!',
        isDelete: true,
        isSuccess: false,
        isError: true
      });
      this.openModal();
      this.openMessage();
    },

    // -- Edit post
    editPost() {
      this.openModal();
      this.editMode();
      this.setCurrentActivePostId(this.post.id);
      this.fetchPost(this.currentActivePostId);
    }
  },

  computed: {
    ...mapGetters(['currentActivePostId']),
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
