import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useSelectData = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const email={email:user.email}

    const { data: selectedData = [], refetch } = useQuery({
        queryKey: ['add/cart',email],
        enabled: !loading,
        queryFn: async () => {
           
            const res = await axiosSecure.get(`/add/cart/${user.email}`,email)
            return res.data;
        }
    })

    return [selectedData, refetch]
}
export default useSelectData;