import { createRouter, createWebHistory } from "vue-router";
import { prodUrlPrefix, isProduction } from "@/helpers/helpers.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/AllUsers.vue"),
  },
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
/*router.beforeEach((to, from, next) => {
  if (isProduction && !to.path.startsWith(prodUrlPrefix)) {
    next(prodUrlPrefix + to.path);
  } else {
    next();
  }
});*/
export default router;
