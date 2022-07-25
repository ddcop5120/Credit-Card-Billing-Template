import Vue from "vue";
import Router from "vue-router";
import Template from "@/views/Template.vue";
import Cell from "@/views/Cell.vue";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "template2",
    component: Template
  },
  {
    path: "/cell",
    name: "cell",
    component: Cell
  }
];
const router = new Router({
  mode: "history",
  routes
});
export default router;
