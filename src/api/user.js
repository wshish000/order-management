import request from "@/utils/axios";

export function login(params) {
  return request({
    url: "/users/login",
    method: "post",
    data: params,
  });
}

export function logout(params) {
  return request({
    url: "/users/logout",
    method: "get",
    data: params,
  });
}
export function getUserInfo(params) {
  return request({
    url: "/users/info",
    method: "post",
    data: params,
  });
}
