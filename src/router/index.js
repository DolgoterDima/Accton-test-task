import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
const routes = [
  {
    path: "/create-user",
    name: "CreateUser",
    component: () => import("../pages/CreateUserPage.vue"),
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../components/HelloWorld.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
