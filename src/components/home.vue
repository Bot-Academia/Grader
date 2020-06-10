<template>
  <div class="wrapper">

    <app-guide id="guide"></app-guide>
    
  </div>
</template>

<script>
import guide from "./guide.vue"
export default {
  name: "home",
  components: {
    appGuide: guide
  }
};
</script>

<style scoped>

#guide{
  z-index: 1000;
  position: relative;
}



</style>
