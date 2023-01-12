<template>
  <footer class="footer mt-auto">
    <div class="content has-text-centered">
      <p>
        Built by
        <a
          href="https://lt.linkedin.com/in/kornelijus-irtmonas-frontend-developer"
          >Kornelijus Irtmonas</a
        >
        &copy; {{ year }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style></style>
