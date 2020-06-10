<template>
  <div class="wrapper">
    <div class="form">
      <div class="heading">
        <h1>
          Grader <br />
          Know your grades!
        </h1>
        <hr />
      </div>
      <!--        form-->
      <div class="container">
        <h4>Select your branch</h4>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <br /><br />
        <ul>
          <li v-for="(subject, index) in course" :key="subject.id">
            <h6>Subject {{ index + 1 }}</h6>
            <div class="row">
              <div class="col">
                <b-form-select
                  v-model="course[index].subject"
                  :options="options1"
                ></b-form-select>
              </div>
              <br /><br />
              <div class="col-md-auto">
                <b-form-input
                  type="number"
                  v-model.number="course[index].grade"
                />
              </div>
            </div>
            <br />
          </li>
        </ul>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <button class="btn btn-primary" @click="addCourse">
                + Add course
              </button>
              <br /><br />
            </div>
            <div class="col-sm">
              <button class="btn btn-primary" @click="remove">
                - Remove course
              </button>
            </div>
            <div class="col-sm">
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
      <div class="container" v-if="result">
        <h1>result</h1>
        <hr />
        <h1>CGPA: {{ cgpa }}</h1>
        <b-alert show variant="info" style="text-align: center;">
          <h5>Info</h5>
          <p>
            "This is only for your own knowledge and has nothing to do with the
            real Sgpa"
          </p></b-alert
        >
      </div>
    </div>
    <app-guide id="guide"></app-guide>
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
        { value: "Computer Science Eng", text: "CSE" },
        { value: "Electronics and Communication Eng", text: "ECE" },
        { value: "Electrical Eng", text: "EE" },
      ],
      course: [],
      selected1: null,
      options1: [
        { value: null, text: "Please select an option" },
        { value: "maths", text: "ENG-MATHS 1" },
        { value: "c", text: "c programming" },
        { value: "python", text: "python" },
      ],
    };
  },
  methods: {
    addCourse() {
      this.course.push({
        subject: "",
        grade: 0,
      });
    },
    remove() {
      this.course.pop();
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
  position: relative;
}

.form {
  position: absolute;
}

.container {
  position: absolute;
}

ul {
  list-style-type: none;
}
h1 {
  padding: 10px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  font-family: "Comic Neue", cursive;
}

@media (min-width: 471px) {
  .heading {
    margin-left: 10vw;
  }

  .form {
    margin-left: 25vw;
  }
}
</style>
