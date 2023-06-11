import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Classes = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/classes')
            return res.data;
        }
    })


    const handelSelect = (item) => {
        if (user?.email) {

            const selectedData = {
                id:item._id,
                 className:item.className,
                 email: user?.email,
                 instructorName:item.instructorName,
                 image:item.image,
                 availableSeats:item.availableSeats,
                 price:item.price,
                 status:item.status,
                 studentNumber:item.studentNumber
                
                }
            // fetch(`http://localhost:5000/carts?email=${user?.email}&&id=${item._id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(selectedData)
            // }).then(res => res.json())



            axiosSecure.put('/carts',{data:selectedData,email:user.email,id:item._id})
            .then(res => {
                console.log(res)
                if(res.data.upsertedCount>0){
                    refetch()
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'class  added  successfully.',
                      showConfirmButton: false,
                      timer: 1500
                    });
                }

                else if(res.data=='data already added'){
                    refetch()
                    Swal.fire({
                      position: 'top-end',
                      icon: 'error',
                      title: 'class already added .',
                      showConfirmButton: false,
                      timer: 1500
                    });
                }

            })
        }
        else {
            console.log('user nai')
        }

    }
    return (
        <div className='bg-slate-200 pt-20'>
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>please chose your favorite classes</h1>




            <div className='pb-10 grid grid-cols-1 lg:grid-cols-3 font-semibold'>

                {
                    classes?.map(item => <div key={item._id} className="shadow-2xl card w-96 glass mx-auto mt-10">
                        <figure><img className='h-60 w-full' src={item.image} alt="photo" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-[#e50e84] font-serif">Name: {item.className}</h2>
                            <p>Instructor Name: {item.instructorName}</p>
                            <p>Available Seats: {item.availableSeats}</p>
                            <p>Enrolled Students: {item.studentNumber}</p>
                            <p>Price: {item.price}</p>
                            <div className="card-actions justify-center">
                                <button onClick={() => handelSelect(item)} className="btn btn-secondary">added class</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;