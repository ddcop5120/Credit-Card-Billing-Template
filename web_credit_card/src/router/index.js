import Vue from "vue";
import VueRouter from "vue-router";
import Template1 from "../views/Template1.vue";
import Template2 from "../views/Template2.vue";
import Template3 from "../views/Template3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Template3",
    component: Template3,
  },
  {
    path: "/t1",
    name: "Template1",
    component: Template1,
  },
  {
    path: "/t2",
    name: "Template2",
    component: Template2,
  },
  {
    path: "/t3",
    name: "Template3",
    component: Template3,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
