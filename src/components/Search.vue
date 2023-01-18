<template>
  <div class="field has-addons mb-5">
    <div class="control has-icons-left">
      <input
        v-model="searchTerm"
        class="input"
        type="text"
        placeholder="Find an article"
        @keyup="search"
      />
      <span class="icon is-left"
        ><i class="fas fa-lg fa-search is-left"></i
      ></span>
    </div>
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
