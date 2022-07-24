import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  }
];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });
const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  publicPathmode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  routes,
});

export default router;
