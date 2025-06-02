import axios from 'axios'
import Cookies from 'js-cookie'
const url = process.env.NEXT_PUBLIC_API ?? ''

const getToken = () =>{
  return Cookies.get('access_token')
}

const apiInstance = axios.create({
    baseURL:url,
    
})

apiInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('interceptor',config)

  config.headers.Authorization = `BEARER ${getToken()}`
  return config;
  
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default apiInstance