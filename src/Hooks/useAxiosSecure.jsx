import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {  logOut, } = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(() => {

        axiosSecure.interceptors.request.use(req => {
            const token = localStorage.getItem('access_token')
        
            if (token) {
                req.headers.Authorization = `Bearer ${token}`;
            }
            return req
        });
        axiosSecure.interceptors.response.use(res => res,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login')
                }
                return Promise.reject(error)
            }

        )
    }, [logOut, axiosSecure])
    return [axiosSecure]
}
export default useAxiosSecure