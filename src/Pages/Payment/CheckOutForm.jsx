import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import './common.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const CheckOutForm = ({ item, price }) => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState()
    const [processing, setProcessing] = useState(false)
 
    
    useEffect(() => {

        axiosSecure.post('/create-payment-intent', { price })
            .then(res => setClientSecret(res.data.clientSecret))


    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { err } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(err.message)
        }
        else {
            setError('')

        }


        const { paymentIntent, error: conErr } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'name not fund',
                        email: user?.email || 'email not found',
                    },
                },
            },
        );
        if (conErr) {
            setError(conErr.message)
        }
        if (paymentIntent?.status === 'succeeded') {
            console.log('avol tabol')
            const payment = {
                email: user?.email,
                transitionId: paymentIntent.id,
                ...item
            }

console.log(payment)

            axiosSecure.patch(`/payment/${item._id}`, payment).then(res => {
               console.log(res.data)
            //    if(res.data.upsertedCount>0||res.data.matchedCount>0){
            //     axiosSecure.patch(`update/${item.id}`).then(res=>console.log(res.data))
            //    }
            })

        }
        setProcessing(false)
    }

    console.log(error)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                {error && <p className='ml-20 mt-0'>{error}</p>}
            </form>

        </div>
    );
};

export default CheckOutForm;