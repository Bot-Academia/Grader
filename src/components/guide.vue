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
        <h3>Now you are ready to hit submit!</h3>
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
  background: #2ec4b6;
  transition: 1s ease;
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
  z-index: 1000;
  transition: width 1s ease;
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
</style>
