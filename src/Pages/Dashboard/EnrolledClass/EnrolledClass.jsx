import React, {  useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const EnrolledClass = () => {
    const {user}=useContext(AuthContext)
const [enrolledData,setEnrolledData]=useState()
    const [axiosSecure]=useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get(`/enrolled/${user?.email}`).then(res=>setEnrolledData(res.data))
    },[user])
    return (
        <div className='bg-slate-200 pt-20 h-full'>
             <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>all your enrolled classes</h1>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 mx-6'>


                {

                    enrolledData?.map(enroll=><div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='h-40 w-full' src={enroll.image} alt="Shoes" /></figure>
                    <div className="card-body ">
                      <h2 className="card-title">Class Name: {enroll.className}</h2>
                      <p className='font-semibold'>Instructor Name: {enroll.instructorName}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-secondary">View Details</button>
                      </div>
                    </div>
                  </div>)
                }
             </div>
        </div>
    );
};

export default EnrolledClass;