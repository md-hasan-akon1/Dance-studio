import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseRole from "../Hooks/UseRole";



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const[isRole,isRoleLoading]=UseRole()
    const location = useLocation();

    if(loading || isRoleLoading){
        return <div className="flex justify-center items-center mt-40">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
    </div>
    }

    if (user && isRole==='admin') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;