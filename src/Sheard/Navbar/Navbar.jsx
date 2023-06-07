import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navItems=<>
    <NavLink className="mx-4">Home</NavLink>
    <NavLink className="mx-4">Instructors</NavLink>
    <NavLink className="mx-4">Classes</NavLink>
    <NavLink className="mx-4">Dashboard</NavLink>
    <NavLink className="mx-4">login</NavLink>
    
    </>
    return (
        <div className="  bg-zinc-200 w-full lg:fixed z-50  bg-opacity-70 ">
            <div className=" navbar lg:w-[1280px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 px-4 font-bold shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    
                    <img className="hidden lg:block w-20 " src="https://i.ibb.co/YjGJW9d/logo-retina1.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-bold menu-horizontal  px-4">
                     {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;