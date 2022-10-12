<template>
  <aside class="box">
    <div class="menu">
      <router-link to="/modal" class="button">
        <span class="material-icons"> share </span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons"> school </span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons"> emoji_events </span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons"> person </span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons"> question_answer </span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons">group</span>
      </router-link>
      <router-link to="/" class="button">
        <span class="material-icons">email</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons"> account_circle </span>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",

  data() {
    return {
      expandir: false,
    };
  },
};
</script>

<style scoped>
.box {
  box-shadow: 1px 0 5px -2px #888;
}

.menu .material-icons:hover {
  color: var(--azul);
}
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--light);

  width: calc(8rem);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;
  z-index: 10;
  box-sizing: border-box;

  position: absolute;
}

.flex {
  flex: 1 1 0%;
}

.logo {
  margin-bottom: 1rem;
}

.material-icons:hover {
  color: var(--hover);
  transform: translateX(0.5rem);
}

.menu {
  margin: 0 -1rem;
}
.menu:nth-child(1) {
  margin-top: 50px;
}
.menu:nth-child(3) {
  margin-bottom: 50px;
}

.menu .button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}

.menu .material-icons {
  font-size: 2rem;
  color: var(--primary);
  transition: 0.2s ease-in-out;
}

/* .menu a {
  margin-bottom: 30px;
} */
.menu a:hover {
  background-color: var(--dark-alt);
}

.menu .router-link-exact-active {
  background-color: var(--dark-alt);
  border-right: 5px solid var(--azul-dark);
}

.menu .router-link-exact-active .material-icons {
  color: var(--blue);
}

@media (max-width: 1024px) {
  aside {
    position: absolute;
    z-index: 99;
  }
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
</style>
