import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const UseRole = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const token=localStorage.getItem('access token')
    // use axios secure with react query
    const {data: isRole, isLoading: isRoleLoading} = useQuery({
        enabled: !loading&& !!user?.email,
        queryKey: ['role', user?.email],
     
        queryFn: async () => {
            if(!user){
                return []
            }
            const res = await axiosSecure.get(`/users/role/${user?.email}`);
            return res.data.role;
        }
    })
    return [isRole, isRoleLoading]
}
export default UseRole;