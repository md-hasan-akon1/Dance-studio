import React from 'react';
import useUser from '../../../Hooks/useUser';
import { FaUserAlt, FaUserTie } from 'react-icons/fa';

import { GrUserAdmin } from "react-icons/gr";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure()
  const [data, refetch] = useUser()
  const handelInstructor = (id) => {
    fetch(`http://localhost:5000/users/instructor/${id}`, {
      method: "PATCH",
    }).then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Instructor created successfully.',
            showConfirmButton: false,
            timer: 1500
          });
        }

      })

  }

  const handelAdmin = (id) => {
    console.log(id)

    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
    }).then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Admin created successfully.',
            showConfirmButton: false,
            timer: 1500
          });
        }

      })



  }

  return (
    <div className='pt-10 h-full bg-slate-200'>
      <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'> manage all users</h1>



      <div className="overflow-x-auto">
        <table className="table font-semibold">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>image</th>
              <th>name</th>
              <th>Role</th>
              <th>make Instructor</th>
              <th>make Admin</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              data?.map((item, index) => <tr key={item._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={<FaUserAlt></FaUserAlt>} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>{item.role}</td>
                <th>
                  <button disabled={item.role == 'instructor'} onClick={() => handelInstructor(item._id)} title='Make Instructor' className="btn btn-ghost btn-lg bg-[#e50e84] ">{item.role === 'instructor' ? 'Instructor' :<FaUserTie></FaUserTie>}</button>
                </th>
                <th>
                  <button disabled={item.role == 'admin'} onClick={() => handelAdmin(item._id)} title={item.role == "admin" ? 'this person admin now' : 'Make Admin'} className="btn btn-ghost btn-lg bg-[#e50e84] ">{item.role === 'admin' ? 'Admin' : <GrUserAdmin></GrUserAdmin>}</button>
                </th>
              </tr>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageUser;