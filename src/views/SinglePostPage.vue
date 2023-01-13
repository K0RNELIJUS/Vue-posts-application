<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <CardSingle
          :isPrimary="true"
          :authors="allAuthors"
          :post="singlePost"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardSingle from '../components/CardSingle.vue';
// Vuex
import { mapGetters, mapActions } from 'vuex';

export default {
  components: { CardSingle },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(['fetchPost', 'fetchAuthors'])
  },

  computed: { ...mapGetters(['singlePost', 'allAuthors']) },

  async created() {
    this.fetchAuthors();
    this.fetchPost(this.id);
  }
};
</script>

<style></style>
