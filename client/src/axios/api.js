import axios from "axios";
import { useSelector } from "react-redux";
const {token}=useSelector((state)=>state.auth) // to extract token from redux
const axiosApi = axios.create({
    baseURL: "http://127.0.0.1:5000/api/",
    headers: {
        'Content-Type': "application/json",
        'Authorization': `${localStorage.getItem('token')}` // we can also extract token from localstorage
    },
    
})
export default axiosApi;
