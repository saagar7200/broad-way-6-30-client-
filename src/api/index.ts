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

  if(getToken()){
  
    config.headers.Authorization = `BEARER ${getToken()}`
  }
  return config;
  
}, function (error) {
  return Promise.reject(error);
});

export default apiInstance