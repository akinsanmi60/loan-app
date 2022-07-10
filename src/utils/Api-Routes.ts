import axios from "axios";

const BASE_URL = "http://localhost:5500";
const studentRegisterRoute = `${BASE_URL}/auth/student/register`;
const studentLoginRoute = `${BASE_URL}/auth/student/login`;
const businessRegisterRoute = `${BASE_URL}/auth/business/register`;
const businessLoginRoute = `${BASE_URL}/auth/business/login`;

export default {
  studentRegisterRoute,
  studentLoginRoute,
  businessRegisterRoute,
  businessLoginRoute,
};

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
