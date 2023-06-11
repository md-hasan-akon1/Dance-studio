import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useSelectData from '../../Hooks/useSelectData';
const stripePromise=loadStripe(import.meta.env.VITE_payment_pk)
const Payment = () => {
    const [selectedData]=useSelectData()
    const {id}=useParams()
    const [data,setData]=useState()
   useEffect(()=>{
    const payData=selectedData.find(item=>item._id===id) 
    setData(payData)
   },[data])
   console.log(data)
    return (
        <div className='pt-10 h-full bg-slate-200'>
             <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>please processed your payment</h1>
            <Elements  stripe={stripePromise}>
                <CheckOutForm item={data} price={data?.price} ></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;