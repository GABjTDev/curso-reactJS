import axios from "axios";

export const actionGetAllUsers = () => {
  return axios("https://reqres.in/api/users");
};
