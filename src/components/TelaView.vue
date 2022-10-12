<template>
  <div class="container">
    <div class="text">
      <h1>Tela usada apenas para exemplo de navegação.</h1>
      <h1>Clique na Logo para seguir o fluxo</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TelaView",
};
</script>

<style>
.container {
  display: grid;
  min-height: 100vh;
  margin-left: calc(8rem);
  justify-content: center;
  align-items: center;
}

.text {
  text-align: center;
}

h1 {
  font-weight: 600;
}
</style>
