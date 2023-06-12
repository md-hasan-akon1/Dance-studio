import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Instructor = () => {
    const [instructors,setInstructors]=useState([])
    const [axiosSecure]=useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get('/allteacher').then(data=>setInstructors(data.data))
    },[])
    return (
       <div className=' pt-20 pb-10 bg-slate-200 h-full'>
         <div className=' lg:w-[1280px] mx-auto '>
            <h2 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>Our All Teachers</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    instructors?.map(instructor=><div key={instructor._id} className="card mx-auto card-compact w-full h-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-full' src={ instructor.image}alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">Name: {instructor.name}</h2>
                      <p>Email: {instructor.email}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-secondary">See details</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
       </div>
    );
};

export default Instructor;