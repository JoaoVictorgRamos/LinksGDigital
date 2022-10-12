<template>
  <div>
    <SideBar></SideBar>
    <h1>Contato</h1>
    <div>
      <ul>
        <li>whats</li>
        <li>face</li>
        <li>insta</li>
        <li>linkedin</li>
        <li>telegram</li>
        <li>{{ redeextra }}</li>
      </ul>
      <button @click="EscreverMais">Escrever mais</button>
      {{ escrever }}
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "ContatoView",
  components: { SideBar },
  data() {
    return {
      redeextra: "twiter",
      escrever: "",
    };
  },
  methods: {
    EscreverMais() {
      this.escrever = "escreveu";
    },
  },
};
</script>

<style scoped></style>
