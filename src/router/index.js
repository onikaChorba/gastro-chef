import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
// import Programs from "../pages/Programs.vue";
// import BusinessLunch from "../pages/BusinessLunch.vue";
// import Shop from "../pages/Shop.vue";
import About from "../pages/About.vue";
// import Blog from "../pages/Blog.vue";

const Empty = {
  template: "<div>Page is under construction</div>",
};

const routes = [
  { path: "/", component: Home },
  { path: "/programs", component: Empty },
  { path: "/business-lunch", component: Empty },
  { path: "/shop", component: Empty },
  { path: "/about", component: About },
  { path: "/blog", component: Empty },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
