import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import UseTitle from '../../../Hooks/useTitle';

const MyAddClass = () => {
  UseTitle('my added class')
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)

    const { data: postData = [], refetch } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/instructor/${user?.email}`)
            return res.data;
        }
    })
    const enrolledStudent=postData.reduce((sum,item)=>sum+item.studentNumber,0)
    return (
        <div className='pt-10 h-full bg-slate-200'>

            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>your all added classes</h1>
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>total enrolled student: {enrolledStudent}</h1>

            <div className='mt-12 mx-10 '>
                {
                    postData.map(singleClass=><div key={singleClass._id} className="card lg:card-side bg-base-100 shadow-xl h-96 mt-10">
                    <figure><img className='h-full lg:w-96'  src={singleClass.image} alt="Album"/></figure>
                    <div className="flex flex-col gap-2 ms-4 mt-4 font-semibold ">
                      <h2 className="card-title text-[#e50e84]">Class Name: {singleClass.className} </h2>
                      <p>Instructor Name: {singleClass.instructorName}</p>
                      <p>Available Seats : {singleClass.availableSeats}</p>
                      <p>Students: {singleClass.studentNumber}</p>
                      <p>price: ${singleClass.price}</p>
                      <p>Status: {singleClass.status}</p>
                     <span className='text-secondary'>Admin feedback</span>
                   {
                
                    singleClass.status==='deny'&&<><textarea readOnly className="textarea textarea-secondary" defaultValue={singleClass?.feedback?.textareaValue?singleClass.feedback.textareaValue:'no feedback'}></textarea></>
                   }
                      <div className="ms-auto mb-auto">

                        <Link ><button className="btn btn-secondary">update</button></Link>
                      </div>
                    </div>
                  </div>)
                }



            </div>
        </div>
    );
};

export default MyAddClass;