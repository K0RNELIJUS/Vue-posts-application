<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-half is-two-fifths-desktop">
        <div class="notification is-danger is-light ">
          <h2 class="title has-text-centered">404 Page not found</h2>
          <div class="is-flex is-justify-content-center">
            <router-link class="button" to="/"> Go back</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'not-found'
};
</script>

<style></style>
