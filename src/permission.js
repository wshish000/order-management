import router from "./router";
import store from "./store";
import { getToken } from "./utils/auth"; // 验权(从cookie中获取)
import { getUserInfo } from "./api/user";
import { ElMessage } from "element-plus";
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf("admin") >= 0) return true;
  if (!permissionRoles) return true;
  return roles.some((role) => permissionRoles.indexOf(role) >= 0);
}

const whiteList = ["/login"]; //不重定向白名单

router.beforeEach((to, from, next) => {
  const browserHeaderTitle = to.meta.title;
  store.commit("SET_BROWSERHEADERTITLE", {
    browserHeaderTitle: browserHeaderTitle,
  });
  // 点击登录时，拿到了token并存入了cookie,保证页面刷新时,始终可以拿到token
  if (getToken("Token")) {
    if (to.path == "/login") {
      next({ path: "/" });
    } else {
      // 用户登录成功之后，每次点击路由都进行了角色的判断;
      if (store.getters.roles.length == 0) {
        console.log("没有任何权限");
        let token = getToken("Token");
        getUserInfo({ token: token })
          .then((res) => {
            let userList = res.userList;
            store.commit("SET_ROLES", userList.roles);
            store.commit("SET_NAME", userList.name);
            store
              .dispatch("GenerateRoutes", { roles: userList.roles })
              .then(() => {
                // 根据roles权限生成可访问的路由表
                const routers = store.getters.addRouters;
                routers.forEach((route) => {
                  router.addRoute(route);
                });
                next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
              });
          })
          .catch((err) => {
            store.dispatch("LogOut").then(() => {
              ElMessage.error(err || "Verification failed, please login again");
              next({ path: "/" });
            });
          });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next();
        } else {
          next({ path: "/401", replace: true, query: { noGoBack: true } });
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) != -1) {
      //点击退出时，会定位到这里
      next();
    } else {
      next("/login");
    }
  }
});

router.afterEach(() => {
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle;
    window.document.title = browserHeaderTitle;
  }, 0);
});
