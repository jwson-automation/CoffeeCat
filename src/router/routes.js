const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/review", component: () => import("pages/Review.vue") },
      { path: "/form", component: () => import("pages/Form.vue") },
      { path: "", component: () => import("pages/Home.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
