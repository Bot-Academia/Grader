<template>
  <div class="footer" id="footer">
    <a href="https://github.com/codetheorem/Grader" id="logo"
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
  name: "footer",
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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #228be6;
  color: white;
  text-align: center;
}
p {
  font-size: larger;
}
</style>
