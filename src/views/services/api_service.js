import axios from "axios";

const apiService = {};
const apiGateway = axios.create({
  baseURL: "http://localhost:80/",
  timeout: 60000,
});

apiGateway.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiService.login = (model) => {
  return axios
    .post("http://localhost:80/auth/login", model)
    .then((res) => res)
    .catch((e) => null);
};
apiService.register = (model) => {
  return axios
    .post("http://localhost:80/auth/register", model)
    .then((res) => res)
    .catch((e) => null);
};

apiService.get = (url) => apiGateway.get(url);
apiService.post = (url, data) => apiGateway.post(url, data);
apiService.put = (url, data) => apiGateway.put(url, data);
apiService.delete = (url, id) => apiGateway.delete(url, id);
export default apiService;
