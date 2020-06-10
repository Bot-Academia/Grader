<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import header from "./components/header.vue";

export default {
  name: "App",
  components: {
    appHeader: header,
  },
};
</script>

<style>
</style>
