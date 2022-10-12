<template>
  <div class="SideBar box">
    <ul>
      <li>
        <a href="/">Links</a>
      </li>
      <li>
        <a href="/">?</a>
      </li>
      <li>
        <a href="/">?</a>
      </li>
      <li>
        <a href="/">?</a>
      </li>
      <li>
        <a href="/">?</a>
      </li>
      <li>
        <a href="/">usuario</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.SideBar {
  display: flex;
  height: 100vh;
  width: 150px;
  background: green;
}
.box {
  box-shadow: 10px 0 5px -2px #888;
}
</style>
