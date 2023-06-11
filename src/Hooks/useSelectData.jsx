import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useSelectData=()=>{
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    
    const { data: selectedData = [], refetch } = useQuery({
         queryKey: ['add/cart'],
     
        queryFn: async () => {
            if(!user){
                return []
            }
            const res = await axiosSecure.get('/add/cart')
            return res.data;
        }
    })

return [selectedData,refetch]
}
export default useSelectData;