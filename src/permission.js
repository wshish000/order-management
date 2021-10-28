import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  const browserHeaderTitle = to.meta.title;
  store.commit("SET_BROWSERHEADERTITLE", {
    browserHeaderTitle: browserHeaderTitle,
  });
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle;
    window.document.title = browserHeaderTitle;
  }, 0);
});
