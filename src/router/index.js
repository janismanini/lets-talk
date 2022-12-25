import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import only home-view here and all other sub-views in the routes for lazyloading the content on these sub-views
import sourceData from "../data.json";

const routes = [
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
    // use per route navigation guard to find not found page if slug doesn't exisit in our data
    beforeEnter(to, from) {
      const exists = sourceData.interviews.find(
        (i) => i.slug === to.params.slug
      );
      if (!exists)
        return {
          name: "not.found",
          // to keep showing the not existing url
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not.found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      // delay scoll to top for time of set transition mode out-in in App.vue
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 100);
      })
    );
  },
});

export default router;
