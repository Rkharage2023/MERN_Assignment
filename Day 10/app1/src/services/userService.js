import config from "./config";
import axios from "./../../node_modules/axios/lib/axios";

export async function loginUser(email, password) {
  const URL = config.url + "/users/signin";
  const body = { email, password };

  const res = await axios.post(URL, body);
  return res.data;
}

export async function registerUser(name, email, password, mobile) {
  const URL = config.url + "/users/signup";
  const body = { name, email, password, mobile };

  const res = await axios.post(URL, body);
  return res.data;
}

export async function getUserProfile(token) {
  const URL = config.url + "/users/profile";
  const headers = { token };
  const res = await axios.get(URL, { headers });
  return res.data;
}

export async function updateProfile(token, name, email, mobile) {
  const URL = config.url + "/users/update";
  const headers = { token };
  const body = { name, email, mobile };
  const res = await axios.put(URL, body, { headers });
  return res.data;
}
