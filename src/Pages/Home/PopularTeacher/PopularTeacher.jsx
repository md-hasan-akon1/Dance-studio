import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PopularTeacher = () => {
    const [PopularTeacher, setPopularTeacher] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/popularteacher').then(data => setPopularTeacher(data.data))


    }, [])
    
    return (
        <div className='lg:w-[1280px] mx-auto'>
            <h2 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>Our Popular Teacher</h2>
            <p className="text-center text-slate-500 mb-6"> Dance teachers provide structured lessons and training to students of all ages <br /> and skill levels. They teach various dance styles such as ballet, jazz, hip-hop, contemporary, tap, ballroom</p>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    PopularTeacher.map((teacher) => <div key={teacher._id} className="card w-96  mx-auto my-4 bg-base-100 shadow-xl">
                            <figure><img className=' w-96 h-60' src={teacher.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {teacher.name}
                                    <div className="badge badge-secondary">Popular</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                               
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularTeacher;