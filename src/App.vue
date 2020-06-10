<template>
  <div id="app">
    <app-header @namewasreset="selected = $event"></app-header>
    <component :is="selected"></component>
    <br /><br /><br />
    <br /><br /><br />
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import appfooter from "./components/appfooter";
import home from "./components/home";
import contact from "./components/contact";

export default {
  name: "App",
  components: {
    appHeader: header,
    appFooter: appfooter,
    apphome: home,
    appcontact: contact,
  },
  data() {
    return {
      selected: "apphome",
    };
  },
};
</script>

<style>
body {
  background: #ccffff;
}
</style>
