import Cookies from "js-cookie";

export function setToken(TokenKey, token) {
  return Cookies.set(TokenKey, token);
}
export function getToken(TokenKey) {
  return Cookies.get(TokenKey);
}
export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey);
}
