import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"


const useUser=()=>{
    const{user,loading}=useContext(AuthContext)
    const[axiosSecure]=useAxiosSecure()
const {data,refetch}=useQuery({
    enabled:!loading,
    queryKey:['alluser'],
    queryFn:async()=>{
       const res=await axiosSecure.get('/allusers')
        return res.data
    }
})

return [data,refetch]
}
export default useUser