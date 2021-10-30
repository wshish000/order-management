import { getToken, removeToken } from "../../utils/auth";
import { logout } from "@/api/user";
const user = {
  state: {
    name: "",
    token: getToken("Token"),
    roles: [],
  },
  getters: {
    token: (state) => state.token,
    roles: (state) => state.roles,
    name: (state) => state.name,
  },
  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
  },
  actions: {
    //登出
    LogOut({ commit, reqData }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        logout(reqData).then((response) => {
          console.log(response);
          commit("SET_ROLES", []);
          commit("SET_NAME", []);
          removeToken("Token");
          resolve();
        });
      });
    },
  },
};

export default user;
