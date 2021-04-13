import { createRouter, createwebHashHistory } from "vue-router";

const router = createRouter({
  history: createwebHashHistory(),
  route: [{ path: "/", component: () => import("") }],
});

export default router;
