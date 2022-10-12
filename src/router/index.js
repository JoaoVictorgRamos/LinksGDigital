import Vue from "vue";
import VueRouter from "vue-router";
import ContatoView from "@/views/ContatoView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/contato",
    name: "ContatoView",
    component: ContatoView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
