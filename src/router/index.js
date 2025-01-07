import {
  createRouter,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Layout",
      name: "Layout",
      component: () => import("@/views/Layout.vue"),
      children: [
        {
          path: "/:id?",
          name: "Index",
          component: () => import("@/views/Index.vue"),
        },
        {
          path: "/:id?",
          name: "IndexB",
          component: () => import("@/views/IndexB.vue"),
        },
      ],
    },
  ],
  scrollBehavior(to, from) {
    if (to.fullPath === from.fullPath) {
      return;
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
