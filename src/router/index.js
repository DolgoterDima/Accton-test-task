import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/create-user",
    name: "Create User",
    component: () => import("../pages/CreateUser.vue"),
  },
  {
    path: "/users",
    name: "All Users",
    component: () => import("../pages/AllUsers.vue"),
  },
  {
    path: "/users/:id",
    name: "User",
    component: () => import("../pages/UserProfile.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "nav__link--active",
});
export default router;
