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
        <svg
          class="icons"
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.1848 8.21389L12.7371 1.67236L1.28943 8.21389L12.7371 14.7554M24.1848 8.21389L12.7371 14.7554M24.1848 8.21389V17.2085M12.7371 14.7554V21.2969M12.7371 14.7554L20.0963 10.667V17.2085L12.7371 21.2969M12.7371 14.7554L5.37788 10.667V17.2085L12.7371 21.2969"
            stroke="#81858E"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          class="icons"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.64858 22.5571H15.8255M11.737 22.5571V16.0155M18.2786 10.2917C18.2786 7.70372 18.2745 3.41136 18.2724 2.11481C18.2724 1.89794 18.1863 1.68996 18.0329 1.53662C17.8796 1.38327 17.6716 1.29712 17.4547 1.29712L6.0178 1.31041C5.80137 1.31041 5.59378 1.3962 5.4405 1.549C5.28723 1.70179 5.20078 1.90912 5.20011 2.12554C5.20011 3.68835 5.19346 8.72686 5.19346 10.2917C5.19346 13.5768 9.43523 16.0155 11.735 16.0155C14.0347 16.0155 18.2786 13.5768 18.2786 10.2917ZM18.2786 10.2917C20.6524 10.2917 22.367 7.38993 22.367 4.56788V3.75019H18.2786M5.19551 3.75019H1.10706V4.56788C1.10706 7.38993 2.82165 10.2917 5.19551 10.2917V3.75019Z"
            stroke="#81858E"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          class="icons"
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2341 6.46303L16.1316 6.52957L16.1316 6.52951L15.2341 6.46303ZM6.23949 6.46303L5.34186 6.52831L5.34186 6.52838L6.23949 6.46303ZM0.9429 21.7232L1.8286 21.883L1.82861 21.8829L0.9429 21.7232ZM20.5312 21.7232L21.4169 21.5634L21.4169 21.5633L20.5312 21.7232ZM14.3365 6.39648C14.1612 8.76168 12.3915 10.4692 10.7368 10.4692V12.2692C13.5794 12.2692 15.9063 9.56829 16.1316 6.52957L14.3365 6.39648ZM10.7368 10.4692C9.0812 10.4692 7.3092 8.76125 7.13711 6.39767L5.34186 6.52838C5.56329 9.56974 7.89507 12.2692 10.7368 12.2692V10.4692ZM7.13712 6.39774C6.97041 4.10558 8.5537 2.45688 10.7368 2.45688V0.656885C7.50267 0.656885 5.09972 3.19885 5.34186 6.52831L7.13712 6.39774ZM10.7368 2.45688C12.9142 2.45688 14.5029 4.1507 14.3365 6.39654L16.1316 6.52951C16.3741 3.25595 13.9766 0.656885 10.7368 0.656885V2.45688ZM10.7368 13.7399C6.03506 13.7399 0.997585 16.3492 0.0571893 21.5634L1.82861 21.8829C2.55835 17.8368 6.54613 15.5399 10.7368 15.5399V13.7399ZM0.057197 21.5634C-0.0299113 22.0462 0.0542315 22.5656 0.343044 22.9876C0.645692 23.4298 1.1452 23.7168 1.74219 23.7168V21.9168C1.7383 21.9168 1.74139 21.9164 1.7498 21.9185C1.75828 21.9206 1.76925 21.9244 1.78118 21.9308C1.80652 21.9444 1.82183 21.9613 1.82844 21.9709C1.83415 21.9793 1.83041 21.9775 1.82719 21.9607C1.82403 21.9441 1.82238 21.9174 1.8286 21.883L0.057197 21.5634ZM1.74219 23.7168H19.7314V21.9168H1.74219V23.7168ZM19.7314 23.7168C20.3283 23.7168 20.828 23.43 21.1309 22.9878C21.4199 22.5657 21.504 22.0462 21.4169 21.5634L19.6455 21.883C19.6517 21.9174 19.6501 21.9441 19.6469 21.9606C19.6437 21.9774 19.6399 21.9792 19.6457 21.9708C19.6523 21.9611 19.6676 21.9442 19.6929 21.9307C19.7048 21.9243 19.7157 21.9205 19.7241 21.9185C19.7324 21.9164 19.7354 21.9168 19.7314 21.9168V23.7168ZM21.4169 21.5633C20.4759 16.3492 15.4385 13.7399 10.7368 13.7399V15.5399C14.9274 15.5399 18.9153 17.8368 19.6455 21.883L21.4169 21.5633Z"
            fill="#81858E"
          />
        </svg>

        <svg
          class="icons"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.42292 10.6742C1.7784 11.8321 1.46662 13.1456 1.52203 14.4697C1.57745 15.7937 1.99791 17.0766 2.73692 18.1765C2.85044 18.348 2.91432 18.4807 2.89467 18.5697C2.87501 18.6586 2.30842 21.61 2.30842 21.61C2.29479 21.6791 2.29996 21.7505 2.32338 21.8169C2.34681 21.8833 2.38763 21.9422 2.44159 21.9874C2.51358 22.0448 2.6031 22.0757 2.69515 22.0749C2.74434 22.075 2.79303 22.065 2.83815 22.0454L5.60036 20.9643C5.79046 20.8893 6.00254 20.8929 6.19005 20.9741C7.12077 21.3368 8.14978 21.5638 9.17928 21.5638C10.5608 21.5653 11.918 21.2009 13.113 20.5078M20.3367 15.0281C20.2875 14.8512 20.3957 14.6055 20.4989 14.4286C20.5304 14.3759 20.5648 14.3251 20.602 14.2762C21.4847 12.9646 21.9569 11.4198 21.9583 9.83883C21.9731 5.30805 18.1499 1.63232 13.4226 1.63232C9.29967 1.63232 5.85982 4.43826 5.05391 8.16313C4.93335 8.71522 4.87239 9.27865 4.87209 9.84374C4.87209 14.3794 8.54782 18.1534 13.2752 18.1534C14.027 18.1534 15.0393 17.9274 15.5946 17.7751C16.1499 17.6227 16.7003 17.4212 16.8428 17.3672C16.9889 17.3121 17.1437 17.2838 17.2998 17.2837C17.4701 17.283 17.6389 17.3164 17.7961 17.3819L20.5824 18.3697C20.6435 18.3955 20.7081 18.4121 20.774 18.4188C20.8783 18.4188 20.9783 18.3774 21.052 18.3037C21.1257 18.2299 21.1672 18.1299 21.1672 18.0257C21.1637 17.9807 21.1555 17.9362 21.1426 17.893L20.3367 15.0281Z"
            stroke="#81858E"
            stroke-width="1.8"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <svg
        class="icons user"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17.7371"
          cy="17.5308"
          r="17"
          fill="#81858E"
          fill-opacity="0.2"
          stroke="#81858E"
        />
      </svg>
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
}

.flex-2 {
  display: flex;
  flex: 1;
  justify-content: end;
}
</style>
