import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    component: () =>
      import("../components/home.vue"),
    name: "home",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
