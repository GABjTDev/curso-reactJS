import axios from "axios";

export const actionLogin = (body) => {
  return axios.post("https://reqres.in/api/login", body);
};
