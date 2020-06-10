<template>
  <div>
    <div class="button left" @click="openguide">Guide</div>
    <transition name="slide">
      <div class="guide" v-if="isguide" :class="{ guidetranslate: isguide }">
        <h1>Guide</h1>
        <br />
        <h4>Step 1:</h4>
        <p>Select your branch</p>
        <h4>Step 2:</h4>
        <p>Add your courses with the respective grade points</p>
        <h3>Now you are ready to hit submit!😊</h3>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isguide: false,
    };
  },
  methods: {
    openguide: function (event) {
      this.isguide = !this.isguide;
      if (this.isguide) event.target.classList.add("button-translate");
      else event.target.classList.remove("button-translate");
    },
  },
};
</script>

<style scoped>
.button {
  top: 100px;
  color: #fff;
  cursor: pointer;
  padding: 30px 10px 30px 10px;
  position: absolute;
  background-color: cornflowerblue;
  transition: 1s ease;
  margin-left: 0px;
  box-shadow: 10px 10px 54px -6px rgba(0,0,0,0.75);
}

.left {
  border-radius: 0 100px 100px 0;
}

#title {
  transform: rotate(-90deg);
}

.guide {
  color: black;
  font-family: "Comic Neue", cursive;
  background-color: cornflowerblue;
  width: 50vw;
  height: 30vh;
  z-index: 1000;
  transition: width 1s ease;
  overflow: hidden;
  position: absolute;
  border-radius: 0 20px 20px 0;
   box-shadow: 10px 10px 54px -6px rgba(0,0,0,0.75);
}

.guidetranslate {
  width: 50vw;
}



.button-translate {
  transform: translateX(50vw);
}

.slide-enter {
  width: 0vw;
}

.slide-enter-active {
  transition: 1s ease;
}

.slide-leave {
  transition: 1s ease;
}

.slide-leave-active {
  width: 0vw;
}

@media (max-width: 1486px){
  .guide{
    height: 50vh;
  }
}

@media (max-width:1120px){
  .guide{
    height: 40vh;
  }
}


@media (max-width:772px){
  .guide{
    height: 50vh;
  }
}

@media (max-width: 680px){
  .guide{
    height: 60vh;
  }
}

@media (max-width: 485px){
  .guide{
    height: 60vh;
  }
}
</style>
