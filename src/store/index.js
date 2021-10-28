import { createStore } from "vuex";
import menu from './modules/menu';
import permission from './modules/permission';
import inspect from './modules/inspect';
import punish from './modules/punish'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menu,
    permission,
    inspect,
    punish,
  },
});
