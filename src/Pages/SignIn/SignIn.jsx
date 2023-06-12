import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogin from "../../Sheard/GoogleLogin/GoogleLogin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseTitle from "../../Hooks/useTitle";

const secrete_key = import.meta.env.VITE_IMAGE_SECRETE;
const SignIn = () => {
    UseTitle('signin')
    const navigate = useNavigate();
    const location = useLocation();
    const [axiosSecure]=useAxiosSecure()

    const from = location.state?.from?.pathname || "/";
    const [showPass, setShowPass] = useState(false)
    const [showPass1, setShowPass1] = useState(false)
    const handelPass1 = () => {
        setShowPass1(!showPass1)
    }
    const handelPass = () => {
        setShowPass(!showPass)
    }

    const img_upload_url = `https://api.imgbb.com/1/upload?key=${secrete_key}`
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL[0].name)

                    .then(() => {

                        const formData = new FormData();
                        formData.append('image', data.photoURL[0])
                        fetch(img_upload_url, {
                            method: 'POST',
                            body: formData
                        })
                            .then(res => res.json())
                            .then(imgResponse => {
                                if (imgResponse.success) {
                                    const saveUser = { name: data.name, email: data.email, image: imgResponse.data.display_url, role: 'student' }

                                   axiosSecure.put('/users')
                                        .then(data => {
                                            if (data.data.upsertedCount > 0 || data.modifiedCount > 0 || data.matchedCount > 0) {
                                                navigate(from)
                                            }



                                        })


                                }
                            })


                    })
                    .catch(error =>'')
            })
    };




    return (
        <div className=" h-full relative py-20">
            <div className="hero  ">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2  mx-auto ">
                    <div>
                        <img className=' lg:w-[100%] h-ful rounded-lg hidden lg:block  ' src="https://i.ibb.co/3RhgJG0/Login-8.jpg" alt="" />

                        <img className=' h-28 mx-auto lg:hidden' src="https://i.ibb.co/GQCxRGY/login.jpg" alt="" />
                        <h1 className='text-3xl font-bold font-mono text-center lg:hidden'>Please SignIn</h1>
                    </div>
                  
                        <div className="card-body max-w-sm  bg-slate-200 m-0 p-6">
                             <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-sm  my-0">
                            <div className="">
                              <span>Name</span>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered max-w-xs" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="w-full max-w-xs">
                                
                                    <span >Photo URL</span>

                          
                                <input type="file" {...register("photoURL", { required: true })} className="file-input file-input-bordered file-input-secondary max-w-xs" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="">
                            
                                    <span className="">Email</span>
                              

                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered max-w-xs" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="">
                                
                                    <span className="">Password</span>
                               
                                <input type={`${showPass1 ? 'text' : 'password'}`}  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered max-w-xs" />
                                {
                                    showPass1 ? <FaEyeSlash onClick={handelPass1} className="-mt-12 ms-72 mb-5"></FaEyeSlash> : <FaEye onClick={handelPass1}className="-mt-12 ms-72 mb-5"></FaEye>
                                }
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>
                            <div className=" mt-3 w-full ">
                               
                                    <span className="">Confirm password</span>

                           
                                <input  {...register("password_repeat")}
                                    id="confirmPassword"
                                    type={`${showPass ? 'text' : 'password'}`} placeholder="Type here" className="input input-bordered  max-w-xs" />
                                  {
                                    showPass ? <FaEyeSlash onClick={handelPass} className="-mt-12 ms-72"></FaEyeSlash> : <FaEye onClick={handelPass} className="-mt-12 ms-72 "></FaEye>
                                }
                                {watch("password_repeat") !== watch("password") &&
                                    getValues("password_repeat") ? (
                                    <p>password not match</p>
                                ) : null}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                               
                            </div>
                            <div className="">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className="text-2xl" ><small>Already have an account <Link to="/login"><span className="text-blue-600">Login</span></Link></small></p>
                        </form>
                          <GoogleLogin></GoogleLogin>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SignIn;