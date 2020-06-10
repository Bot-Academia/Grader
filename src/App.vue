<template>
  <div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer";

export default {
  name: "App",
  components: {
    appHeader: header,
    appFooter: footer,
  },
};
</script>

<style></style>
