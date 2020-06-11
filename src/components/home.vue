<template>
  <div class="wrapper">
    <!--    heading-->

    <app-guide id="guide"></app-guide>
    <div class="form">
      <div class="heading row m-0">
        <h1 class="col-lg-4">😎</h1>
        <h1 class="col-lg-4">
          Grader <br />
          Know your grades!
        </h1>
        <h1 class="col-lg-4">💯</h1>
        <hr />
      </div>

      <!--        form-->

      <div class="container">
        <h4>Select your branch</h4>
        <b-form-select v-model="selected" :options="options" :key="selected"></b-form-select>
        <br /><br />
        <transition-group name="slide" tag="ul">
          <li v-for="(subject, index) in course" v-bind:key="subject">
            <h6>Subject {{ index + 1 }}</h6>
            <div class="row">
              <div class="col">
                <b-form-select v-if="selected == 'options1'"
                  v-model="course[index].credit"
                  :options="options1"
                ></b-form-select>
                <b-form-select  v-else
                        v-model="course[index].credit"
                        :options="options2"
                ></b-form-select>
              </div>
              <br /><br />
              <div class="col-md-auto">
                <b-form-input
                  type="number"
                  v-model.number="course[index].grade"
                />
              </div>
              <br /><br />
              <div class="col col-lg-2">
                <button class="btn btn-primary" @click="remove(index)">
                  - Remove course
                </button>
              </div>
            </div>
            <br />
          </li>
        </transition-group>

        <!--        buttons-->

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <button class="btn btn-primary" @click="addCourse">
                + Add course
              </button>
              <button
                class="btn btn-primary"
                @click="submit"
                style="float: right;"
              >
                Submit
              </button>
              <br /><br />
            </div>
          </div>
        </div>
      </div>

      <!--      result-->

      <transition name="fade">
        <div class="container" v-if="result">
          <h1>result</h1>
          <hr />
          <h1>CGPA: {{ cgpa }}</h1>
          <b-alert show variant="info" style="text-align: center;">
            <h5>Info</h5>
            <p>
              "This is only for your own knowledge and has nothing to do with
              the real Sgpa"
            </p></b-alert
          >
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import guide from "./guide.vue";
export default {
  name: "home",
  components: {
    appGuide: guide,
  },
  data() {
    return {
      cgpa: 0,
      result: false,
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "options1", text: "CSE" },
        { value: "options2", text: "ECE" }
      ],
      course: [],
      options1: [
        { value: null, text: "Please select an option" },
        { value: 2, text: "ENG-MATHS 1" },
        { value: 3, text: "c programming" },
        { value: 4, text: "python" },
      ],
      options2: [
        { value: null, text: "Please select an option" },
        { value: 2, text: "electronics" },
        { value: 3, text: "BE" },
        { value: 4, text: "python" },
      ],
    };
  },
  methods: {
    addCourse() {
      this.course.push({
        credit: 0,
        grade: 0,
      });
    },
    remove(index) {
      this.course.splice(index, 1);
    },
    submit() {
      this.cgpa = 0;
      for (let key in this.course) {
        this.cgpa += this.course[key].grade;
      }
      this.result = !this.result;
    },
  },
};
</script>

<style scoped>
#guide {
  z-index: 1000;
  position: absolute;
}

ul {
  list-style-type: none;
}

.heading h1 {
  overflow: hidden;
}

h1 {
  padding-top: 10px;
  padding-left: 0px;
  padding-right: 0px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  font-family: "Comic Neue", cursive;
}
.slide-enter {
  opacity: 0;
  /*transform: translateY(20px);*/
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
