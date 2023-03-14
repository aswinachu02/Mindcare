import axios from "axios";
import config from "../../common/config";

const baseURL = config.BASE_API;

const base = (options) => {
  return axios({
    baseURL,
    headers: { Accept: "application/json" },
    ...options,
  }).then((res) => res.data);
};

const get = (url, params) => base({ method: "get", url, params });
const patch = (url, data) => base({ method: "patch", url, data });
const post = (url, data) => base({ method: "post", url, data });
const put = (url, data) => base({ method: "put", url, data });
const del = (url, data) => base({ method: "delete", url, data });

const API = { get, patch, post, put, del };
export { API };
