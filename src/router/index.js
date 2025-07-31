import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import BusinessLunch from "../pages/BusinessLunch.vue";
import Shop from "../pages/Shop.vue";
import About from "../pages/About.vue";
import Blog from "../pages/Blog.vue";
import HealthyCandies from "@/pages/HealthyCandies.vue";

const Empty = {
  template: "<div>Page is under construction</div>",
};

const routes = [
  { path: "/", component: Home },
  { path: "/programs", component: Home },
  { path: "/business-lunch", component: BusinessLunch },
  { path: "/shop", component: Shop },
  { path: "/shop/healthy-candies", component: HealthyCandies },
  { path: "/about", component: About },
  { path: "/blog", component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
