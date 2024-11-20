import { createWebHistory, createRouter } from "vue-router";
import DevView from "./views/DevView.vue";

const routes = [{ path: "/", component: DevView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
