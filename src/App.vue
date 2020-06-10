<template>
  <div id="app">
    <app-header @namewasreset="selected = $event"></app-header>
    <component :is="selected"></component>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer";
import home from "./components/home";
import contact from "./components/contact";
import result from "./components/result";

export default {
  name: "App",
  components: {
    appHeader: header,
    appFooter: footer,
    apphome: home,
    appcontact: contact,
    appresult: result
  },
  data() {
    return {
      selected: 'apphome'
    };
  }
};
</script>

<style></style>
