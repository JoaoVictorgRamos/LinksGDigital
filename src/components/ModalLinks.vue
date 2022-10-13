<template>
  <section class="modal">
    <div class="conteudo-modal">
      <p @click="fecharModal">X</p>
      <button @click="add">Adicionar</button>
      <p>{{ numero }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModalLinks",
  data() {
    return { numero: 0 };
  },
  methods: {
    fecharModal() {
      this.modal = false;
    },
    add() {
      this.numero++;
    },
  },
};
</script>

<style>
.modal {
  display: flex;
  align-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.conteudo-modal {
  margin: auto auto;
  position: relative;
  width: 95vw;
  height: 95vh;
  background: #fff;
  border-radius: 5px;
}
</style>
