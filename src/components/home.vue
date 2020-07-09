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

      <!--form-->

      <div class="container">
        <h4>Select your branch</h4>
        <b-form-select
          v-model="selected"
          :options="options"
          :key="selected"
          @input="addArray"
        ></b-form-select>
        <br /><br />
        <transition-group name="slide" tag="ul">
          <li v-for="(subject, index) in course" v-bind:key="String(subject)">
            <h6>Subject {{ index + 1 }}</h6>
            <div class="row">
              <div class="col">
                <b-form-select
                  v-model="course[index].credit"
                  :options="optionsArray"
                ></b-form-select>
              </div>
              <br /><br />
              <div class="col-md-auto">
                <b-form-input
                  type="number"
                  v-model="course[index].grade"
                  min="0"
                  max="10"
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

      <!--      false msg-->

      <transition name="fade">
        <div class="container" v-if="flag">
          <b-alert show variant="info" style="text-align: center;">
            <h4>{{ msg }}</h4>
          </b-alert>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import guide from "./guide.vue";
import { courses } from "../courses.js";
export default {
  name: "home",
  components: {
    appGuide: guide,
  },
  mixins: [courses],
  data() {
    return {
      msg: "Please enter the grade point between 0-10",
      cgpa: 0,
      count: 0,
      result: false,
      selected: null,
      optionsArray: [],
      flag: false,
      options: [
        { value: null, text: "Please select an option" },
        { value: "options1", text: "Btech.CSE" },
        { value: "options2", text: "Btech.ECE" },
        { value: "options3", text: "Mtech.ECE" },
        { value: "options4", text: "Btech.Mech" },
        { value: "options5", text: "Mtech.CSE" },
        { value: "options6", text: "B.Arch" },
        { value: "options7", text: "Btech.EE" },
      ],
      course: [],
    };
  },
  methods: {
    addArray() {
      this.optionsArray = [];
      for (let key in this.courseval) {
        if (this.selected === key) {
          this.courseval[key].forEach((element) => {
            this.optionsArray.push(element);
          });
        }
      }
    },
    addCourse() {
      this.course.push({
        credit: null,
        grade: 0,
      });
    },
    remove(index) {
      this.course.splice(index, 1);
    },
    submit() {
      this.cgpa = 0;
      this.count = 0;
      for (let key in this.course) {
        this.cgpa +=
          this.course[key].grade *
          this.optionsArray[this.course[key].credit].credit;
        this.count += this.optionsArray[this.course[key].credit].credit;
      }
      this.cgpa /= this.count;
      this.cgpa = this.cgpa.toFixed(2);
      if (this.cgpa > 10) {
        this.flag = true;
        this.result = false;
      } else {
        this.flag = false;
        this.result = true;
      }
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
