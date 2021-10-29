import { createRouter, createWebHistory } from "vue-router";
import { Home } from "../layout";

export const constantRouterMap = [
  {
    path: "/",
    component: Home,
    redirect: "/index/index",
    hidden: true,
  },
  {
    path: "/index",
    name: "index",
    component: Home,
    meta: {
      title: "首页",
      icon: "el-icon-s-home",
    },
    noDropdown: true,
    children: [
      {
        path: "index",
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          routerType: "leftmenu",
        },
        component: () => import("@/page/index/index"),
      },
    ],
  },
  {
    path: "/punish",
    name: "punish",
    meta: {
      title: "奖惩管理",
      icon: "el-icon-user-solid",
      roles: ["Manager"],
    },
    component: Home,
    children: [
      {
        path: "checkIn",
        name: "checkIn",
        meta: {
          title: "奖惩登记",
          icon: "el-icon-user-solid",
          routerType: "leftmenu",
          roles: ["Manager"],
        },
        component: () => import("@/page/punish/checkIn"),
      },
      {
        path: "display",
        name: "display",
        meta: {
          title: "奖惩展示",
          icon: "el-icon-user-solid",
          routerType: "leftmenu",
          roles: ["Manager"],
        },
        component: () => import("@/page/punish/display"),
      },
    ],
  },
  {
    path: "/inspect",
    name: "inspect",
    meta: {
      title: "查勤管理",
      icon: "el-icon-user-solid",
      roles: ["Manager"],
    },
    component: Home,
    children: [
      {
        path: "register",
        name: "register",
        meta: {
          title: "查勤登记",
          icon: "el-icon-user-solid",
          routerType: "leftmenu",
          roles: ["Manager"],
        },
        component: () => import("@/page/inspect/register"),
      },
      {
        path: "statistic",
        name: "statistic",
        meta: {
          title: "查勤统计",
          icon: "el-icon-user-solid",
          routerType: "leftmenu",
          roles: ["Manager"],
        },
        component: () => import("@/page/inspect/statistic"),
      },
    ],
  },
];

export const asyncRouterMap = [];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap,
});

export default router;
