import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "InboxMessage",
    component: () => import("../views/InboxMessage.vue")
  },
  {
    path: "/sent",
    name: "SendMessage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SendMessage.vue")
  },
  {
    path: "/starred",
    name: "StarredMessage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StarredMessage.vue")
  },
  {
    path: "/snoozed",
    name: "SnoozedMessage",
    component: () => import("../views/SnoozedMessage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
