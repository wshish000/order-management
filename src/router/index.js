import { createRouter, createWebHistory } from "vue-router";
import { Home } from "../layout";

/**
 * path:''与path:'*'的区别：
 * 1、path:'*', 会匹配所有路径
 * 2、path:''，也是会匹配到路由
 *
 */
//默认不需要权限的页面
export const constantRouterMap = [
  {
    path: "/",
    component: Home,
    redirect: "/index/index",
    hidden: true,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/page/login"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/page/errorPage/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/page/errorPage/401"),
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
];

export const asyncRouterMap = [
  {
    path: "/punish",
    name: "punish",
    meta: {
      title: "奖惩管理",
      icon: "el-icon-user-solid",
      roles: ["manager", "user"],
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
          roles: ["manager"],
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
          roles: ["manager", "user"],
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
      roles: ["manager", "user"],
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
          roles: ["manager"],
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
          roles: ["manager", "user"],
        },
        component: () => import("@/page/inspect/statistic"),
      },
    ],
  },
  {
    path: "/error",
    component: Home,
    name: "errorPage",
    meta: {
      title: "错误页面",
      icon: "iconError",
    },
    children: [
      {
        path: "401",
        name: "page401",
        component: () => import("@/page/errorPage/401"),
        meta: {
          title: "401",
          noCache: true,
        },
      },
      {
        path: "404",
        name: "page404",
        component: () => import("@/page/errorPage/404"),
        meta: {
          title: "404",
          noCache: true,
        },
      },
    ],
  },
  //{ path: "*", redirect: "/404", hidden: true },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/page/errorPage/404"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap,
});

export default router;
