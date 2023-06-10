import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const secrete_key = import.meta.env.VITE_IMAGE_SECRETE;
const AddClass = () => {
    const [axiosSecure]=useAxiosSecure()

    const img_upload_url = `https://api.imgbb.com/1/upload?key=${secrete_key}`
    const [addLoading, setAddLoading] = useState(false)

    const { user } = useContext(AuthContext)
    const name = user?.displayName;
    const email = user?.email;
    const handelSubmit = (event) => {
        setAddLoading(true)
        event.preventDefault()
        const form = event.target;

        const className = form.className.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const img = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', img)
        fetch(img_upload_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const classInfo = { className, instructorName, email, availableSeats:parseInt(availableSeats),price:parseFloat(price), image: data.data.display_url,status:"pending",studentNumber:0 }
                    axiosSecure.post('/addClass',classInfo)
                    .then(data => {
                        console.log(data.data)
                        setAddLoading(false)
                        if(data.data.insertedId){
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              })
                            event.target.reset()
                        }
                    })
                }
            })

    }
    return (
        <div className='pt-10 w-full bg-slate-200 h-full font-bold'>

            <div className='pt-10 w-full bg-slate-200 h-full font-bold'>
                <form onSubmit={handelSubmit}>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 '>
                        <div className="form-control w-full mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" name='className' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text">Class Photo</span>
                            </label>
                            <input type="file" name='image' accept="image/*" className="file-input file-input-bordered file-input-secondary w-full max-w-xs"></input>

                        </div>
                        <div className="form-control mx-auto w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" defaultValue={name} readOnly name='instructorName' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control mx-auto w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" name='email' defaultValue={email} readOnly placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control mx-auto w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" name='availableSeats' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control mx-auto w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    <div className='w-full text-center'>
                        <button disabled={addLoading} className="btn btn-secondary mt-4  mx-auto"> <input type="submit" value="Add Class" /></button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddClass;