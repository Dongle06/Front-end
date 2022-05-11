import axios from "axios";
import { LOGIN_USER } from "./types";
import { REGISTER_USER, LOGINDUP_USER, AUTH_USER } from "./types";
export function loginUser(dataTosubmit) {
  const request = axios
    .post("https://donglebook.org/api/login", dataTosubmit)
    .then(response => response.data);

  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function registerUser(dataSubmit) {
  const request = axios
    .post("/api/users/register", dataSubmit)
    .then(response => response.data);

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function auth() {
  const request = axios
    .get("https://donglebook.org/api/user/auth")
    .then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request
  };
}

export function loginDupUser(dataSubmit) {
  const request = axios
    .post("/api/users/loginDup", dataSubmit)
    .then(response => response.data);

  return {
    type: LOGINDUP_USER,
    payload: request
  };
}
