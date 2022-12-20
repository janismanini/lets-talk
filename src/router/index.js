import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import only home-view here and all other sub-views in the routes for lazyloading the content on these sub-views

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/about",
      name: "about.page",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/:slug",
      name: "interview.page",
      component: () => import("../views/Interview.vue"),
      props: (route) => ({ slug: route.params.slug }),
    },
  ],
});

export default router;
