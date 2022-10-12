<template>
  <div id="app">
    <SideBar />
    <TelaView />
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import TelaView from "@/components/TelaView.vue";

export default {
  components: {
    SideBar,
    TelaView,
  },
  data() {
    return {
      login: true,
    };
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
:root {
  --primary: #777;
  --azul: rgb(40, 40, 243);
  --azul-dark: rgb(21, 21, 252);
  --primary-alt: #22c55e;
  --grey: #dde1e7;
  --dark: #fff;
  --dark-alt: #dde1e6;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
</style>
