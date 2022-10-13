import Vue from "vue";
import VueRouter from "vue-router";
import ModalLinks from "@/components/ModalLinks";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/modal",
    name: "ModalLinks",
    component: ModalLinks,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
