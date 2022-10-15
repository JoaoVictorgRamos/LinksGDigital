<template>
  <div id="app">
    <div class="menu">
      <img
        class="icons"
        src="@/assets/logo.svg"
        alt="logo"
        @click="abrirModal = !abrirModal"
      />
      <div class="flex">
        <img class="icons" src="@/assets/formacao.svg" alt="trofeu" />

        <img class="icons" src="@/assets/trofeu.svg" alt="trofeu" />

        <img class="icons" src="@/assets/social.svg" alt="trofeu" />

        <img class="icons" src="@/assets/chat.svg" alt="trofeu" />
      </div>
      <img class="icons user" src="@/assets/user-img.svg" alt="user-img" />
    </div>
    <TexTo />
    <section v-if="abrirModal" class="modal">
      <div class="conteudo-modal">
        <img
          @click="abrirModal = !abrirModal"
          src="@/assets/fechar-dark.svg"
          alt="fechar"
          class="fechar-modal"
        />
        <div class="flex-cotainer">
          <div>
            <h1 class="h1">Links de Redirecionamento 🌐</h1>
            <p class="p">Crie seus links de redirect em poucos passos</p>
          </div>
          <div>
            <button @click="SegundoModal = !SegundoModal" class="button">
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
                <div class="valor-flex-container">
                  <h1 class="valor">01</h1>
                  <h1 class="link-gerado">
                    https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
                  </h1>
                </div>
                <button class="botao">Editar</button>
              </div>
              <p class="data-gerada">02/250</p>
            </div>
            <div class="links-geradoss">
              <div class="valor-container">
                <div class="valor-flex-container">
                  <h1 class="valor">01</h1>
                  <h1 class="link-gerado">
                    https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
                  </h1>
                </div>
                <button class="botao">Editar</button>
              </div>
              <p class="data-gerada">02/250</p>
            </div>
            <div class="links-geradoss">
              <div class="valor-container">
                <div class="valor-flex-container">
                  <h1 class="valor">01</h1>
                  <h1 class="link-gerado">
                    https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
                  </h1>
                </div>
                <button class="botao">Editar</button>
              </div>
              <p class="data-gerada">02/250</p>
            </div>
          </div>
        </div>
      </div>
      <section v-if="SegundoModal">
        <div class="modal">
          <div class="conteudo-segundo-modal">
            <div class="background-titulo">
              <div class="menus">
                <h1 class="text-h1">Criação de Link</h1>
                <img
                  class="fechar"
                  @click="SegundoModal = !SegundoModal"
                  src="@/assets/fechar.svg"
                  alt="fechar"
                />
              </div>
            </div>
            <div class="background">
              <div class="titulo-container">
                <h1 class="titulo">Título do Link</h1>
                <input
                  class="titulo-link"
                  type="text"
                  placeholder="Link Legal"
                />
              </div>
              <div class="url-container">
                <h1 class="url-titulo">URL original</h1>
                <p class="url-descricao">
                  Você poderá inserir uma ou várias URL's, faça como desejar.
                  Lembre-se de inserir a quantidade de cliques junto à URL.
                </p>
              </div>
              <div class="url-gerada-container">
                <div class="url-flex">
                  <p class="url-gerada-id">01</p>
                  <p class="url-gerada-link">
                    https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc
                  </p>
                </div>
                <p class="url-gerada-cliques">250</p>
              </div>
              <div class="adicionar-container">
                <button class="botao">+ Adicionar mais URL</button>
              </div>
              <div class="default-container">
                <h1 class="default-text">URL Default</h1>
                <p class="default-descricao">
                  Essa URL será associada ao redirecionamento apenas quando
                  todas as outras chegarem ao limite de cliques. Ela será a uma
                  url fixa sem limitação.
                </p>
                <p class="default-inserir">Insira a URL Default</p>
              </div>
              <div class="flex-2">
                <button class="botao-salvar">Salvar Link 💪</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import TexTo from "@/components/TexTo";

export default {
  components: {
    TexTo,
  },
  data() {
    return {
      abrirModal: false,
      SegundoModal: false,
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
  font-family: "Montserrat";
}
.menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 98px;
  height: 100vh;
  top: 0;
  border: 1px solid #ededf0;
  background: #fff;
}

.icons {
  cursor: pointer;
}

.flex {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.user {
  width: 50px;
  height: 50px;
}

/* PRIMEIRO MODAL */
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

.button:hover {
  background-color: #2133d2;
  box-shadow: 0px 15px 20px rgba(33, 51, 210, 0.4);
  color: #fff;
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
  grid-column: 2/-1;
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

.botao:hover {
  color: #2133d2;
  background-color: rgba(33, 51, 210, 0.1);
  box-shadow: 0px 7px 10px rgba(33, 51, 210, 0.4);
  transform: translateY(-3px);
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
  display: flex;
  flex: 1;
  margin-left: 20px;
  font-size: 12px;
  color: #81858e;
}
.data-gerada {
  margin-top: 5px;
  margin-left: 50px;
  font-size: 12px;
  color: #2133d2;
}

.valor-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 20px;
}

.valor-flex-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

/* SEGUNDO MODAL */
.conteudo-segundo-modal {
  right: 0;
  position: absolute;
  width: 35vw;
  height: 100vh;
  background: #fff;
}

.background-titulo {
  padding: 25px;
  background: #191b28;
}

.menus {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-h1 {
  font-size: 16px;
  color: #ffffff;
}

.fechar {
  cursor: pointer;
  padding: 10px;
}

.background {
  padding: 10px 30px;
}

.titulo {
  font-weight: 600;
  font-size: 13px;
  color: #333333;
}

.titulo-link {
  font-size: 13px;
  margin-top: 10px;
  border: none;
  color: #81858e;
  margin-bottom: 20px;
}

.titulo-container {
  border-bottom: 1px solid #ededf0;
}

.url-titulo {
  font-weight: 600;
  font-size: 14px;
  color: #2133d2;
}

.url-descricao {
  margin-top: 7px;
  color: #81858e;
  font-size: 12px;
}
.url-container {
  margin-top: 20px;
}

.url-gerada-id {
  font-weight: 600;
  font-size: 13px;
  color: #000;
}
.url-gerada-link,
.url-gerada-cliques {
  font-size: 13px;
  color: #81858e;
}

.url-gerada-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.url-flex {
  display: flex;
  gap: 10px;
  align-items: center;
}

.adicionar-container {
  margin-top: 50px;
}

.default-text {
  font-weight: 600;
  font-size: 14px;
  color: #2133d2;
}

.default-container {
  margin-top: 50px;
}

.default-descricao {
  margin-top: 10px;
  font-size: 12px;
  color: #81858e;
}
.default-inserir {
  font-size: 13px;
  margin-top: 30px;
  color: #81858e;
}
.botao-salvar {
  background: #2133d2;
  box-shadow: 0px 4px 10px rgba(33, 51, 210, 0.5);
  border-radius: 5px;
  padding: 15px 50px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
}

.botao-salvar:hover {
  animation: pulsar 1s infinite;
  transition: 0.3s;
}

@keyframes pulsar {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.flex-2 {
  display: flex;
  flex: 1;
  justify-content: end;
}
</style>
