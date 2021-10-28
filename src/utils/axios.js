import axios from "axios";
import { ElMessage } from "element-plus";
// 创建axios实例
let service = axios.create({
  baseURL: "http://127.0.0.1:3000", // api的base_url
  timeout: 5000, // 请求超时时间
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    /**
     * status:200,接口正常返回;
     */
    const res = response.data;
    if (res.status !== 200) {
      ElMessage({
        message: res.message,
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject("error");
    } else {
      // res.status === 200,正常返回数据
      return response.data;
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
