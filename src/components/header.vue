<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#" id="navbar-brand" @click="change1('apphome')"
        >Home</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#footer1">About Us</b-nav-item>
            <b-nav-item  @click="change2('appcontact')"
              >Contact Us</b-nav-item
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    change1(item) {
      this.$emit("namewasreset", item);
    },
    change2(item) {
      this.$emit("namewasreset", item);
    },
  },
};
</script>

<style scoped>
#header {
  background-color: #228be6;
  font-family: "Comic Neue", cursive;
  font-size: 20px;
}
#navbar-brand {
  font-size: 20px;
}
</style>
