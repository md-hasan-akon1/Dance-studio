import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Classes = () => {
    const {user,loading}=useContext(AuthContext)
const [axiosSecure]=useAxiosSecure()
const{data,refetch}=useQuery({
    queryKey:['classes'],
    enabled:!loading,
    queryFn:async()=>{
        const res=await axiosSecure.get('/classes')
         return res.data
    }
})



const handelSelect=(item)=>{
    if(user?.email){
        
    }
}
    return (
        <div className='bg-slate-200 pt-20'>
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>please chose your favorite classes</h1>




            <div className=' py-10 grid grid-cols-1 lg:grid-cols-3 font-semibold'>

                {
                    data?.map(item=><div key={item._id} className="shadow-2xl card w-96 glass mx-auto">
                    <figure><img className='h-96 w-full' src={item.image} alt="photo"/></figure>
                    <div className="card-body">
                      <h2 className="card-title text-[#e50e84] font-serif">Name: {item.className}</h2>
                      <p>Instructor Name: {item.instructorName}</p>
                      <p>Available Seats: {item.availableSeats}</p>
                      <p>Total Students: {item.studentNumber}</p>
                      <p>Price: {item.price}</p>
                      <div className="card-actions justify-center">
                        <button onClick={()=>handelSelect(item)} className="btn btn-secondary">added class</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Classes;