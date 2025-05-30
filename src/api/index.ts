import axios from 'axios'
import Cookies from 'js-cookie'
const url = process.env.NEXT_PUBLIC_API ?? ''

const getToken = () =>{
  return Cookies.get('access_token')
}

const apiInstance = axios.create({
    baseURL:url,
    headers:{
        Authorization:`BEARER ${getToken()}`
    }
})

export default apiInstance