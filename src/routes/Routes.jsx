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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }


        ]

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
        path: '/dashboard',
        element: <DashboardLayOut></DashboardLayOut>,
        children: [
            {
                path: '/dashboard/manageclass',
                element: <ManageClass></ManageClass>
            },
            {
                path: '/dashboard/manageuser',
                element: <ManageUser></ManageUser>
            },
            {
                path: '/dashboard/selectedclass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: '/dashboard/enrolledclass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: '/dashboard/addclass',
                element: <AddClass></AddClass>
            },
            {
                path: '/dashboard/myclass',
                element: <MyAddClass></MyAddClass>
            }
        ]
    }

]);
export default router;