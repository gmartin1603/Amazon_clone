import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../providers/StateProvider';
import '../style/Payment.css'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct';
import {getBasketTotal} from '../reducers/stateReducer'
import axios from '../axios'
import {db} from '../firebase'


function Payment(props) {
    const [{basket, user} , dispatch] = useStateValue()
    
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    }, [basket])

    console.log('The client secret is ', clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type:'EMPTY_BASKET',
            })
            history.replace('/orders')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty)
        setError(e.error? e.error.message : '')
    }

    return (
        <div className="payment">
           <div className="payment-container">
               <h1>
                   Checkout (<Link to='/checkout'>
                    {basket?.length} items   
                    </Link>)
               </h1>
               <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div> 
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>123 React Ln</p>    
                        <p>Hiawatha, IA 52233</p>    
                    </div>   
               </div>
               <div className="payment-section">
                    <div className="payment-title">
                        <h3>Items for Delivery</h3>
                        <div className="payment-items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                                ))}
                            
                        </div>
                    </div>
               </div>
               <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        {/* stripe magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment-price-container">
                            <CurrencyFormat
                                renderText = {(value) => (
                                    <h3>Order Total: {value}</h3>
                                    )
                                    
                                }
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                            /> 
                            <button id="check-out-button" disabled={processing || disabled || succeeded}>
                            <span>{processing? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
               </div>
           </div>
        </div>
    );
}

export default Payment;