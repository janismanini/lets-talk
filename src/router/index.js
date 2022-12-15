import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import only home-view here and all other sub-views in the routes for lazyloading the content on these sub-views

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/interview/:slug",
      component: () => import("../views/InterviewPage.vue"),
    },
  ],
});

export default router;
