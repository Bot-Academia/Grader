<template>
  <div>
    <div class="button left" @click="openguide">Guide</div>
      <div class="guide animate__animated" v-if="appearguide"  :class="{slideInLeft:isguide,slideOutLeft:notguide}">
        <h1>Guide</h1>
        <br />
        <h4>Step 1:</h4>
        <p>Select your branch</p>
        <h4>Step 2:</h4>
        <p>Add your courses with the respective grade points</p>
        <h3>Now you are ready to hit submit!😊</h3>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      appearguide: false,
      isguide: false,
      notguide: false
    };
  },
  methods: {
    openguide: function (event) {
      this.appearguide=true;
      this.isguide = !this.isguide;
      if(this.isguide===true)
         this.notguide=false;
      else
          this.notguide=true;
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
  box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
}

.left {
  border-radius: 0 100px 100px 0;
}



.guide {
  color: black;
  font-family: "Comic Neue", cursive;
  background-color: cornflowerblue;
  width: 50vw;
  height: 30vh;
  z-index: 1000;
  overflow: hidden;
  position: absolute;
  border-radius: 0 20px 20px 0;
  box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);
  transition: 1s ease;
}



.button-translate {
  transform: translateX(50vw);
}



@media (max-width: 1486px) {
  .guide {
    height: 50vh;
  }
}

@media (max-width: 1120px) {
  .guide {
    height: 40vh;
  }
}

@media (max-width: 772px) {
  .guide {
    height: 50vh;
  }
}

@media (max-width: 680px) {
  .guide {
    height: 60vh;
  }
}

@media (max-width: 485px) {
  .guide {
    height: 60vh;
  }
}


@keyframes slideOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-50vw, 0, 0);
  }
}

.slideOutLeft {
  animation-name: slideOutLeft;
}

@keyframes slideInLeft {
  from {
    transform: translate3d(-50vw, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  animation-name: slideInLeft;
}


</style>
