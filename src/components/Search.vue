<template>
  <div class="field has-addons mb-5">
    <p class="control">
      <input
        v-model="searchTerm"
        class="input"
        type="text"
        placeholder="Find an article"
      />
    </p>
    <p class="control">
      <button @click="search" class="button is-primary">
        Search
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.searchTerm);
    }
  }
};
</script>
