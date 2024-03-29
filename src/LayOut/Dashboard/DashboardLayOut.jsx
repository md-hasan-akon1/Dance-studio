import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import UseRole from '../../Hooks/UseRole';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const DashboardLayOut = () => {
  const {user}=useContext(AuthContext)
 const [isRole]=UseRole()
  return (
    <div className="drawer lg:drawer-open relative">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn absolute top-0 drawer-button lg:hidden"><GrMenu></GrMenu></label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#e50e84] text-base-content uppercase">
          <div className=" text-center mb-14 w-full  ">
            <img className='h-20 w-20 rounded-full mx-auto' src={user.photoURL} alt="" />

          </div>

          {isRole=='admin' ? <>
            <li><NavLink to='/dashboard/manageclass'>Manage Class</NavLink></li>
            <li><NavLink to='/dashboard/manageuser'>Manage Users</NavLink></li></>
            : isRole=='instructor' ? <>
              <li><NavLink to='/dashboard/addclass'>Add a class</NavLink></li>
              <li><NavLink to='/dashboard/myclass'>My Class</NavLink></li>
            </>
              : <>
                <li><NavLink to='/dashboard/selectedclass'> My Selected Class</NavLink></li>
                <li><NavLink to='/dashboard/enrolledclass'> My Enrolled Class</NavLink></li>
                <li><NavLink to='/dashboard/enrolledhistory'> My Enrolled History</NavLink></li></>
          }





          <div className="divider"></div>
          <li><NavLink to='/'> Home</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default DashboardLayOut;
{/* <ul className="menu p-4 w-80 h-full bg-[#e50e84] text-base-content uppercase">
    <div className="uppercase text-center ">
        <h1 className="text-3xl font-bold">bistro boss </h1>

    </div>

    {isAdmin ? <>
        <NavLink to='/'> admin Home</NavLink>
        <NavLink to='/'> manage class</NavLink></>
        : isInstructor ? <>
            <NavLink to='/'> instructor home</NavLink>
            <NavLink to='/'> add class</NavLink></>
            : <><NavLink to='/'> student admin</NavLink>
                <NavLink to='/'> Home</NavLink></>
    }




    <div className="divider"></div>
    <li><NavLink to='/'> Home</NavLink></li>

</ul> */}