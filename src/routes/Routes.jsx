import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOut/MainLayOyt/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>

            }


        ]
        
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signin',
        element:<SignIn></SignIn>
    }
]);
export default router;