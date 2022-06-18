import axios from "axios";
import { toast } from "react-toastify";
import history from '../history'

axios.defaults.baseURL = "http://localhost:5000";

const instance = axios.create();
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const expectedError =
    (error.response &&
    error.response.status >= 400 &&
    error.response.status < 500)
  
  //forbidden or not found
  if (error.response.config.method === 'get' && (error.response.status === 404 ||  error.response.status === 403)) {
    history.push({
      pathname: `/error/${error.response.status}`,
      error: error
    })  
  }

  //issue from server side
  if(!expectedError){
    toast.error("An unexpected error occured");
  }
  
  return Promise.reject(error);
});

const httpServiceExports = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  request: instance.request,
  patch: instance.patch
};

export default httpServiceExports;