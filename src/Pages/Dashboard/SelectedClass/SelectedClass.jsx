import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdPayment } from "react-icons/md";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: selectedData = [], refetch } = useQuery({
        queryKey: ['add/cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/add/cart')
            return res.data;
        }
    })

    const handelDelete = (id) => {

        if (user?.email) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/item/${id}`).then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Item delete successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                }
            })
        }



    }


    return (
        <div className='pt-10 h-full bg-slate-200'>
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>all your selected class</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedData?.map((item, index) => <tr className='font-semibold' key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt='image' />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td>{item.instructorName}</td>
                                <td>${item.price}</td>
                                <th>
                                    <button className="btn btn-ghost bg-[#e50e84] "><MdPayment></MdPayment> Pay</button>
                                </th>
                                <th>
                                    <button onClick={() => handelDelete(item._id)} className="btn btn-ghost bg-[#e50e84] text-black "><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)}

                    </tbody>

                </table>
            </div>


        </div>

    );
};

export default SelectedClass;