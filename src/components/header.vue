<template>

    <div id=header>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#" id="navbar-brand">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
       <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
        <b-nav-item href="#">About Us</b-nav-item>
        <b-nav-item href="#">Contact Us</b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {};
</script>



<style scoped>
#header{
    background-color: #228be6;
    font-family: 'Comic Neue', cursive;
    font-size: 2vw;
}
#navbar-brand{
    font-size: 3vw;
}
</style>

