import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOut/MainLayOyt/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";
import DashboardLayOut from "../LayOut/Dashboard/DashboardLayOut";
import ManageClass from "../Pages/Dashboard/ManageClsass/ManageClass";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Classes from "../Pages/Classes/Classes";
import MyAddClass from "../Pages/Dashboard/MyAddClass/MyAddClass";
import PrivateRoute from "./PrivetRout";
import Instructor from "../Pages/Instructor/Instructor";
import Payment from "../Pages/Payment/Payment";
import EnrolledHistory from "../Pages/EnrolledHistory/EnrolledHistory";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path:'/instructor',
                element:<Instructor></Instructor>
            }


        ]

    },
  
    {
        path: '/dashboard',
        element:<PrivateRoute> <DashboardLayOut></DashboardLayOut></PrivateRoute>,
        children: [
            {
                path: '/dashboard/manageclass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path:'/dashboard/enrolledhistory',
                element:<PrivateRoute><EnrolledHistory></EnrolledHistory></PrivateRoute>
            },
            {
                path: '/dashboard/manageuser',
                element:<AdminRoute> <ManageUser></ManageUser></AdminRoute>
            },
            {
                path: '/dashboard/selectedclass',
                element: <PrivateRoute><SelectedClass></SelectedClass></PrivateRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: '/dashboard/enrolledclass',
                element: <PrivateRoute><EnrolledClass></EnrolledClass></PrivateRoute>
            },
            {
                path: '/dashboard/addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: '/dashboard/myclass',
                element: <InstructorRoute><MyAddClass></MyAddClass></InstructorRoute>
            }
        ]
    }

]);
export default router;