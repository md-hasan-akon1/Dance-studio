import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import moment from 'moment';
import UseTitle from '../../Hooks/useTitle';

const EnrolledHistory = () => {
    UseTitle('enroll history')
    const { user } = useContext(AuthContext)
    const [enrolledData, setEnrolledData] = useState()
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/enrolled/${user?.email}`).then(res => setEnrolledData(res.data))
    }, [user])
    return (
        <div className='pt-10 h-full bg-slate-200'>
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>all your enroll History</h1>


            <div>



                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Transition Id</th>
                                <th>Date</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                enrolledData?.map((enroll,index)=><tr key={enroll.id}>
                                    <th>{index+1}</th>
                                    <td>{enroll.className}</td>
                                    <td>{enroll.transitionId}</td>
                                    <td>{ moment(enroll.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                                    <td>${enroll.price}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default EnrolledHistory;