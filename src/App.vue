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
              <h1 class="quantidade-links">{{ LinksCriados.length }} links</h1>
              <p class="tempo">Clique em tempo real</p>
            </div>
            <div>
              <div
                id="id"
                v-for="(criar, index) in LinksCriados"
                :key="index"
                @click="selectItem(criar)"
                style="cursor: pointer"
              >
                <div class="container-lado-esquerdo">
                  <div class="lado-esquerdo-titulo-data">
                    <p class="lado-esquerdo-titulo-p">{{ criar.titulo }}</p>
                    <p class="lado-esquerdo-titulo-date">{{ criar.data }}</p>
                  </div>
                  <div class="lado-esquerdo-url-cliques">
                    <p class="lado-esquerdo-titulo-url">
                      {{ criar.url_original }}
                    </p>
                    <p class="lado-esquerdo-titulo-clqiues">
                      👉 {{ criar.cliques }}/{{ criar.total_max_click }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lado-direito">
            <div class="container-link-escolhido">
              <div class="link-escolhido-container">
                <h1 class="link-escolhido">{{ selectedItem.titulo ?? "" }}</h1>
                <p class="link-escolhido-data">{{ selectedItem }}</p>
              </div>
              <div class="link-escolhido-detalhes">
                <p
                  class="link-redirect-detalhes"
                  id="copy"
                  v-if="!inputEditUrlOriginal"
                >
                  http://localhost:8080/{{ selectedItem.urlOriginal }}
                </p>
                <input
                  v-else
                  class="geracao-de-links-titulo-input"
                  type="text"
                  v-model="selectedItem.urlOriginal"
                  placeholder="Digite o Link"
                />
                <button
                  class="botao"
                  v-if="!inputEditUrlOriginal"
                  @click="copiarTexto()"
                >
                  Copiar
                </button>
                <button
                  class="botao"
                  v-if="!inputEditUrlOriginal"
                  @click="editUrlOriginal(selectedItem)"
                >
                  Editar
                </button>
                <button
                  class="botao"
                  v-else
                  @click="saveEditUrlOriginal(selectedItem)"
                >
                  Salvar Editar
                </button>
              </div>
            </div>
            <div v-for="(item, index) in selectedItem.url" :key="index">
              <div class="links-geradoss">
                <div class="valor-container">
                  <div class="valor-flex-container">
                    <h1 class="valor">{{ index + 1 }}</h1>
                    <h1 class="link-gerado" v-if="!inputUrlSecundaria">
                      {{ item.urlTitulo }}
                    </h1>
                    <input
                      v-else
                      class="geracao-de-links-titulo-input"
                      type="text"
                      v-model="item.urlTitulo"
                      placeholder="Digite o Link"
                    />
                  </div>
                  <button
                    v-if="inputUrlSecundaria"
                    class="botao"
                    @click="saveEditUrlSecundaria(selectedItem)"
                  >
                    Salvar Editar
                  </button>
                  <button
                    class="botao"
                    @click="editUrlSecundaria(selectedItem)"
                  >
                    Editar
                  </button>
                </div>
                <p class="data-gerada">02/250</p>
              </div>
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
            <div class="container-geracao-de-links">
              <div class="container-geracao-de-links-titulo">
                <h1 class="geracao-de-links-titulo-h1">Titulo do Link</h1>
                <input
                  class="geracao-de-links-titulo-input"
                  type="text"
                  v-model="CriarLink.titulo"
                  placeholder="Digite o titulo do Link"
                />
              </div>
              <div class="container-geracao-de-links-URL">
                <h2 class="geracao-de-links-titulo-h2">URL original</h2>
                <p class="geracao-de-links-titulo-p">
                  Você poderá inserir uma ou várias URL’s, faça como desejar.
                  Lembre-se de inserir a quantidade de cliques junto à URL.
                </p>
              </div>
              <div class="container-vfor">
                <div
                  class="container-loop"
                  v-for="(criar, index) in CriarLink.url"
                  :key="index"
                >
                  <div class="container-lopp-itens">
                    <div class="container-id-url">
                      <!-- <p class="id-loop">01</p> -->
                      <p class="id-loop">{{ index + 1 }}</p>
                      <input
                        class="placehouder"
                        type="text"
                        v-model="criar.urlTitulo"
                        placeholder="Insira a URL original"
                      />
                    </div>
                    <input
                      class="placehouder"
                      type="number"
                      v-model="criar.cliques"
                      placeholder="cliques"
                    />
                  </div>
                </div>
              </div>
              <button @click="AdicionarMaisLink" class="botao">
                + Adicionar mais URL
              </button>
              <div class="container-url-default">
                <h1 class="url-default-h1">URL Default</h1>
                <p class="url-default-p">
                  URL Default Essa URL será associada ao redirecionamento apenas
                  quando todas as outras chegarem ao limite de cliques. Ela será
                  a uma url fixa sem limitação. Insira a URL Default
                </p>
                <input
                  class="default placehouder"
                  v-model="CriarLink.urlOriginal"
                  placeholder="Insira a URL Default"
                />
              </div>
              <div class="flex-2">
                <button @click="SalvarLinks" class="botao-salvar">
                  Salvar Link 💪
                </button>
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
import axios from "axios";
export default {
  components: {
    TexTo,
  },
  data() {
    return {
      abrirModal: false,
      SegundoModal: false,
      numero: 0,
      CriarLink: {
        id: "01",
        titulo: "",
        urlOriginal: "",
        url: [
          {
            id: "01",
            urlTitulo: "",
            cliques: 0,
            totalcliques: "300",
          },
        ],
        data: "01/01/01",
        hora: "12:38",
        cliques: 0,
        totalcliques: "567",
      },
      LinksCriados: [
        {
          id: "01",
          titulo: "Teste",
          urlOriginal: "dsahkjhsajkdhska",
          url: [
            {
              id: "01",
              urlTitulo:
                "https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc",
              cliques: "67",
              totalcliques: "567",
            },
          ],
          data: "01/01/01",
          hora: "12:38",
          cliques: "67",
          totalcliques: "567",
        },
        {
          id: "02",
          titulo: "Teste2",
          urlOriginal: "fdsafsdfsd",
          url: [
            {
              id: "01",
              urlTitulo:
                "https://www.notion.so/Green-club-8d477635100044e4b3c5ca81c479fbdc",
              cliques: "50",
              totalcliques: "300",
            },
            {
              id: "02",
              urlTitulo: "https://www.notion.so/Green-club-gfsdgfdgfdgdfgfdg",
              cliques: "50",
              totalcliques: "300",
            },
          ],
          data: "01/01/01",
          hora: "12:38",
          cliques: "100",
          totalcliques: "600",
        },
      ],
      selectedItem: [],
      inputEditUrlOriginal: false,
      inputUrlSecundaria: false,
    };
  },
  methods: {
    saveEditUrlSecundaria() {
      this.inputUrlSecundaria = false;
    },
    editUrlSecundaria(data) {
      console.log(data);
      this.inputUrlSecundaria = true;
    },
    saveEditUrlOriginal() {
      this.inputEditUrlOriginal = false;
    },
    editUrlOriginal(data) {
      console.log(data);
      this.inputEditUrlOriginal = true;
    },
    copiarTexto() {
      navigator.clipboard.writeText(
        "http://localhost:8080/" + this.selectedItem.urlOriginal
      );
    },
    selectItem(item) {
      this.selectedItem = item;
    },
    AdicionarMaisLink() {
      if (this.CriarLink.url.length <= 2) {
        this.CriarLink.url.push({
          id: "",
          urlTitulo: "",
          cliques: 0,
          totalcliques: "300",
        });
      } else {
        console.log("DESATIVAR BOTAO");
      }
    },
    SalvarLinks() {
      console.log(this.CriarLink);
      var dados = this.LinksCriados;
      dados.push(this.CriarLink);
      this.LinksCriados = dados;
      var data = {
        titulo: this.CriarLink.titulo,
        url_original: this.CriarLink.urlOriginal,
        total_max_click: 200,
      };
      var that = this;
      axios
        .post("http://127.0.0.1:8000/cadastrar-link", data)
        .then(function (response) {
          that.chamarSubLink(that.CriarLink.url, response.data);
          console.log(response);
          that.SegundoModal = false;
          that.CriarLink = {
            id: "01",
            titulo: "",
            urlOriginal: "",
            url: [
              {
                id: "01",
                urlTitulo: "",
                cliques: 0,
                totalcliques: "300",
              },
            ],
            data: "01/01/01",
            hora: "12:38",
            cliques: 0,
            totalcliques: "567",
          };
        })
        .catch(function (response) {
          console.log(response);
        });
    },
    chamarSubLink(datadois, idBase) {
      for (let i = 0; i < datadois.length; i++) {
        const element = datadois[i];
        var data2 = {
          id_base: idBase,
          url_titulo: element.urlTitulo,
          cliques: parseFloat(element.cliques, 10),
          total_cliques: element.totalcliques,
        };
        axios
          .post("http://127.0.0.1:8000/cadastrarlinks", data2)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
      }
    },
    pucharLinks() {
      var that = this;
      axios
        .get("http://127.0.0.1:8000/mostrar-link")
        .then(function (response) {
          console.log(response);
          that.LinksCriados = response.data;
          that.selectItem(that.LinksCriados[0]);
        })
        .catch(function (response) {
          console.log(response);
        });
    },
  },
  created() {
    this.pucharLinks();
    console.log("teste");
  },
};
</script>

<style>
.container-lado-esquerdo {
  border-bottom: 1px solid #ededf0;

  padding: 20px;
}
.lado-esquerdo-titulo-clqiues {
  font-size: 14px;
  color: #2133d2;
}
.lado-esquerdo-titulo-url {
  font-size: 13px;
  line-height: 16px;
  color: #2133d2;
}
.lado-esquerdo-titulo-date {
  font-size: 12px;
  line-height: 15px;
  color: #2133d2;
}

.lado-esquerdo-titulo-p {
  font-weight: 600;
  font-size: 14px;
  color: #2133d2;
}
.lado-esquerdo-url-cliques {
  display: flex;
  justify-content: space-between;
}
.lado-esquerdo-titulo-data {
  display: flex;
  gap: 30px;
}
.default {
  margin-top: 20px;
}
.url-default-p {
  margin-top: 10px;
  color: #81858e;
  font-size: 12px;
}
.container-url-default {
  margin-top: 20px;
}
.url-default-h1 {
  font-weight: 600;
  font-size: 14px;
  color: #2133d2;
}
.container-geracao-de-links-URL {
  margin-top: 20px;
}
.placehouder {
  border-bottom: 1px solid #2133d2;
}
.placehouder::placeholder {
  color: #2133d2;
}
.container-loop {
  margin-bottom: 30px;
  margin-top: 30px;
}
.container-id-url {
  display: flex;
  gap: 20px;
}

.container-lopp-itens {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.id-loop {
  font-weight: 600;
  font-size: 13px;
  color: #000000;
}
input {
  border: none;
}

.geracao-de-links-titulo-p {
  font-size: 12px;
  color: #81858e;
}
.geracao-de-links-titulo-h2 {
  font-weight: 600;
  font-size: 14px;
  color: #2133d2;
}
.geracao-de-links-titulo-input {
  margin-top: 10px;
  margin-bottom: 10px;
}
.container-geracao-de-links-titulo {
  border-bottom: 1px solid #ededf0;
}
.geracao-de-links-titulo-h1 {
  font-weight: 600;
  font-size: 13px;
  color: #333333;
}
.container-geracao-de-links {
  padding: 20px 50px;
}
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
