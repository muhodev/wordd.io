import axios from "axios";

import { BASE_URL } from "@constants";

const api = axios.create({ withCredentials: true });

api.interceptors.response.use(undefined, (error) => {
  if (typeof error.response !== "undefined") {
    if (error.response.status === 401) {
      /* store.remove("token");
      store.remove("name"); */
    }
    /*  message.warn(error?.response?.data?.message || "Error"); */
  } else {
    /*  message.warn(error.message); */
  }
  return Promise.reject(error);
});

export { api };
