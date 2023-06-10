import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data, refetch } = useQuery({
        queryKey: ['addedclass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/addedclass')
            return res.data;
        }
    })
    
const handelApprove=(id)=>{
fetch(`http://localhost:5000/addclass/approve/${id}`, {
        method: "PATCH",
      }).then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: ' Class approved successfully.',
              showConfirmButton: false,
              timer: 1500
            });
          }
  
        })
}

const handelDeny=(id)=>{

    fetch(`http://localhost:5000/addclass/deny/${id}`, {
        method: "PATCH",
      }).then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: ' Class deny successfully.',
              showConfirmButton: false,
              timer: 1500
            });
          }
  
        })

}


    return (
        <div className='pt-10 h-full bg-slate-200'>
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'> manage all new added classes</h1>
            <div>

                {

                    data?.map(classData => <div key={classData._id} className="card card-side m-10 bg-base-100 shadow-xl">
                        <figure><img className='h-full w-96' src={classData.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-serif text-red-600">{classData.className}</h2>

                            <p className='font-semibold'>Instructor Name: {classData.instructorName}</p>
                            <p className='font-semibold'>Instructor Email: {classData.email}</p>
                            <p className='font-semibold '>Available Seats: {classData.availableSeats}</p>
                            <p className='font-semibold '>price: {classData.price}</p>
                            <p className='font-semibold '>Status: {classData.status}</p>

                            <div>
                                <button disabled={classData.status=='approved'||classData.status=='deny'} onClick={()=>handelApprove(classData._id)} className="btn btn-secondary mr-3">approve</button>

                                <button disabled={classData.status=='approved'||classData.status=='deny'} onClick={()=>handelDeny(classData._id)} className="btn btn-secondary">deny</button>
                            </div>

                            <div className="card-actions justify-end">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text uppercase text-secondary">type your feedback here</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24 textarea-secondary" placeholder="type feedback"></textarea>

                                </div>

                                <button className="btn btn-secondary mt-20">Send Feedback</button>
                            </div>
                        </div>
                    </div>)
                }



            </div>
        </div>
    );
};

export default ManageClass;