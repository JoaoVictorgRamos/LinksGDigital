<template>
  <div id="app">
    <SideBar />
    <TexTo />
    <ModalLinks v-if="modal" />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TexTo from "@/components/TexTo";
import ModalLinks from "@/components/ModalLinks";

export default {
  components: {
    SideBar,
    TexTo,
    ModalLinks,
  },
  data() {
    return {
      modal: false,
    };
  },
  methods: {},
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
</style>
