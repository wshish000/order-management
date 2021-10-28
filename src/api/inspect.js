import request from "@/utils/axios";

export function addInspect(params) {
  return request({
    url: "/addInspect",
    method: "post",
    data: params,
  });
}

export function getInspect(params) {
  return request({
    url: "/getInspect",
    method: "post",
    data: params,
  });
}

export function getChaOfD(params) {
  return request({
    url: "/getChaOfD",
    method: "post",
    data: params,
  });
}
export function getChaOfZ(params) {
  return request({
    url: "/getChaOfZ",
    method: "post",
    data: params,
  });
}
export function getShangOfD(params) {
  return request({
    url: "/getShangOfD",
    method: "post",
    data: params,
  });
}
export function getShangOfZ(params) {
  return request({
    url: "/getShangOfZ",
    method: "post",
    data: params,
  });
}
