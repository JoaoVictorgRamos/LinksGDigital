<template>
  <section class="modal">
    <div class="conteudo-modal">
      <img src="@/assets/fechar-dark.svg" alt="fechar" class="fechar-modal" />
      <div class="flex-cotainer">
        <div>
          <h1 class="h1">Links de Redirecionamento 🌐</h1>
          <p class="p">Crie seus links de redirect em poucos passos</p>
        </div>
        <div>
          <button
            class="button"
            @click="abrirSegundoModal = !abrirSegundoModal"
          >
            Criar um Link
          </button>
        </div>
      </div>
      <div class="container-links">
        <div class="lado-esquerdo">
          <div class="container-link">
            <h1 class="quantidade-links">04 links</h1>
            <p class="tempo">Clique em tempo real</p>
          </div>
          <div class="container-link">
            <div class="flex-1">
              <div class="link">
                <h1 class="link-nome">Link legal</h1>
                <p class="link-data">04/01/2020</p>
              </div>
              <div class="detalhes-link">
                <p class="link-redirect">redirect.gdigi.al/3hNU8HO</p>
                <p class="link-cliques">👉 02/750</p>
              </div>
            </div>
          </div>
          <div class="container-link">
            <div class="flex-1">
              <div class="link">
                <h1 class="link-nome">Melhor legal</h1>
                <p class="link-data">03/01/2020</p>
              </div>
              <div class="detalhes-link">
                <p class="link-redirect">redirect.gdigi.al/3hNU8HO</p>
                <p class="link-cliques">👉 30/750</p>
              </div>
            </div>
          </div>
          <div class="container-link">
            <div class="flex-1">
              <div class="link">
                <h1 class="link-nome">Aquele link</h1>
                <p class="link-data">2/08/2020</p>
              </div>
              <div class="detalhes-link">
                <p class="link-redirect">redirect.gdigi.al/3hNU8HO</p>
                <p class="link-cliques">👉 45/750</p>
              </div>
            </div>
          </div>
          <div class="container-link">
            <div class="flex-1">
              <div class="link">
                <h1 class="link-nome">Link Outro</h1>
                <p class="link-data">01/01/2020</p>
              </div>
              <div class="detalhes-link">
                <p class="link-redirect">redirect.gdigi.al/3hNU8HO</p>
                <p class="link-cliques">👉 15/750</p>
              </div>
            </div>
          </div>
        </div>
        <div class="lado-direito">
          <div class="container-link-escolhido">
            <div class="link-escolhido-container">
              <h1 class="link-escolhido">Link Legal</h1>
              <p class="link-escolhido-data">Criado em 04/01/2020 ás 10:36</p>
            </div>
            <div class="link-escolhido-detalhes">
              <p class="link-redirect-detalhes">redirect.gdigi.al/3hNU8HO</p>
              <button class="botao">Copiar</button>
              <button class="botao">Editar</button>
            </div>
          </div>
          <div class="links-geradoss">
            <div class="valor-container">
              <h1 class="valor">01</h1>
              <h1 class="link-gerado">
                https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
              </h1>
              <button class="botao">Editar</button>
            </div>
            <p class="data-gerada">02/250</p>
          </div>
          <div class="links-geradoss">
            <div class="valor-container">
              <h1 class="valor">02</h1>
              <h1 class="link-gerado">
                https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
              </h1>
              <button class="botao">Editar</button>
            </div>
            <p class="data-gerada">02/250</p>
          </div>
          <div class="links-geradoss">
            <div class="valor-container">
              <h1 class="valor">03</h1>
              <h1 class="link-gerado">
                https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
              </h1>
              <button class="botao">Editar</button>
            </div>
            <p class="data-gerada">02/250</p>
          </div>
        </div>
      </div>
    </div>
    <CriacaoLinkModal v-if="abrirSegundoModal"></CriacaoLinkModal>
  </section>
</template>

<script>
import CriacaoLinkModal from "@/components/CriacaoLinkModal";
export default {
  name: "ModalLinks",
  components: { CriacaoLinkModal },
  data() {
    return {
      abrirSegundoModal: false,
    };
  },
  methods: {},
};
</script>

<style>
.fechar-modal {
  position: absolute;
  right: 40px;
  top: 15px;
  color: #b5b9c5;
  cursor: pointer;
  padding: 10px;
}
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
  width: 93vw;
  height: 93vh;
  background: #fff;
  border-radius: 5px;
  padding: 50px;
}

.flex-cotainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededf0;
  padding: 20px;
}
.h1 {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}
.p {
  color: #81858e;
  font-size: 14px;
}

.button {
  font-size: 14px;
  font-weight: 600;
  color: #2133d2;
  background: rgba(33, 51, 210, 0.1);
  padding: 15px 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}

.container-links {
  display: grid;
  grid-template-columns: 1fr calc(8rem) 1fr;
}

.container-link {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ededf0;
}

.lado-esquerdo {
  border-right: 1px solid #ededf0;
}

.quantidade-links {
  font-size: 14px;
  font-weight: 600;
  color: #2133d2;
}

.tempo {
  font-size: 12px;
  color: #81858e;
}

.flex-1 {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.link {
  display: flex;
  align-items: center;
  gap: 20px;
}

.link-nome {
  color: #333333;
  font-weight: 600;
  font-size: 14px;
}

.link-data {
  font-size: 12px;
  color: #81858e;
}

.detalhes-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.link-redirect {
  font-size: 13px;
  color: #81858e;
}

.link-cliques {
  font-size: 14px;
  color: #81858e;
}

.lado-direito {
  padding: 50px;
}
.container-link-escolhido {
  border-bottom: 1px solid #ededf0;
}
.link-escolhido-container {
  display: flex;
  gap: 20px;
  align-items: center;
}
.link-escolhido {
  font-weight: 600;
  font-size: 20px;
  color: #000000;
}

.link-escolhido-data {
  font-size: 12px;
  color: #81858e;
}

.link-escolhido-detalhes {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
}

.link-redirect-detalhes {
  color: #2133d2;
}

.botao-ativo {
  font-weight: 600;
  color: #2133d2;
  background: rgba(33, 51, 210, 0.1);
  border: none;
  border-radius: 5px;
  padding: 6px 20px;
  cursor: pointer;
}

.botao {
  font-weight: 600;
  color: #2133d2;
  background: #fff;
  border: 1px solid #2133d2;
  border-radius: 5px;
  padding: 6px 20px;
  cursor: pointer;
}

.valor {
  font-weight: 600;
  font-size: 13px;
  color: #2133d2;
}

.links-geradoss {
  margin-top: 25px;
}

.link-gerado {
  font-size: 12px;
  color: #81858e;
}
.data-gerada {
  margin-top: 5px;
  margin-left: 33px;
  font-size: 12px;
  color: #2133d2;
}

.valor-container {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 20px;
}
</style>
