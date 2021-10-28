import request from "@/utils/axios";

export function addPunish(params) {
  return request({
    url: "/addPunish",
    method: "post",
    data: params,
  });
}

export function getPunish(params) {
  return request({
    url: "/getPunish",
    method: "post",
    data: params,
  });
}
export function getDataOfChart(params) {
  return request({
    url: "/getDataOfChart",
    method: "post",
    data: params,
  });
}
