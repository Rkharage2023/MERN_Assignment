import config from "./config";
import axios from "axios";

export async function getAllCourses(token) {
  const URL = config.url + "/courses/all-active-courses";
  const headers = { token };
  const res = await axios.get(URL, { headers });
  return res.data;
}
