import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Sheard/GoogleLogin/GoogleLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const {  signIn } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const handelPass = () => {
        setShowPass(!showPass)
    }
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email,data.password)
        .then(result =>{
            navigate(from)
        
        } )
        .catch(error=>console.log(error))
    };
    return (
        <div className=' border grid grid-cols-1 lg:grid-cols-2  mx-auto rounded-lg'>
            <div>
                <img className='h-50 lg:w-[100%] rounded-lg hidden lg:block  ' src="https://i.ibb.co/3RhgJG0/Login-8.jpg" alt="" />

                <img className=' h-28 mx-auto lg:hidden' src="https://i.ibb.co/GQCxRGY/login.jpg" alt="" />
                <h1 className='text-3xl font-bold font-mono text-center lg:hidden'>WellCome Back</h1>
            </div>

            <div className=' relative bg-gray-200 mx-auto border m-5 p-4 lg:w-[50%] rounded-lg ' >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-control w-full ">
                        <h1 className='text-3xl font-bold font-mono text-center hidden lg:block mb-3 '>WellCome Back <br />Please LogIn !</h1>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Enter your email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered  " />
                            {errors.email && <span className="text-red-600">email is required</span>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Enter your password</span>
                        </label>
                        <input type={`${showPass ? 'text' : 'password'}`}  {...register("password", { required: true })} placeholder="Type here" className="input input-bordered  " />
                        {errors.password && <span className="text-red-600">password is required</span>}
                        {
                            showPass ? <FaEyeSlash onClick={handelPass} className=" absolute top-[250px] right-10"></FaEyeSlash> : <FaEye onClick={handelPass} className=" absolute top-[250px] right-10"></FaEye>
                        }
                    </div>
                    <span className='text-red-500 font-bold'>

                    </span>
                    <button className="btn btn-primary mt-4 w-full mx-auto"> <input type="submit" value="Login" /></button>



                    <Link className='text-green-700 font-bold'>Forgot Password ?</Link> <br />
                    <span >Don't Have An Account<Link to={'/signin'} className="btn btn-link">Sign In</Link></span>


                    <div className='flex justify-center items-center gap-2'>
                        <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>
                        <h6 className='text-center'>OR</h6>
                        <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>
                    </div>
                </form>
                <GoogleLogin></GoogleLogin>

            </div>

        </div>
    );
};

export default Login;
