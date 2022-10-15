import Vue from "vue";
import VueRouter from "vue-router";
import LinksCriados from "@/views/LinksCriados";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/links",
    name: "LinksCriados",
    component: LinksCriados,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
