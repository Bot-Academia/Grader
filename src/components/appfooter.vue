<template>
  <div class="footer" id="footers">
    <a href="https://github.com/Bot-Academia/Grader" id="logo"
      ><i class="fa fa-github" aria-hidden="true"></i
    ></a>
    <p>
      Developed by <a href="https://github.com/codetheorem">Hrishikesh</a> |
      <a href="https://github.com/vinayaksh42">Vinayak</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "appfooter",
};
</script>

<style scoped>
#logo {
  font-size: 30px;
}
a {
  color: white;
}
.footer {
  font-family: "Comic Neue", cursive;
  font-size: large;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #228be6;
  color: white;
  text-align: center;
  margin-bottom: 0;
}
p {
  font-size: larger;
}
</style>
