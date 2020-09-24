import React from 'react';
import { useStateValue } from '../providers/StateProvider';
import '../style/CheckOut.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function CheckOut(props) {
    const [{basket, user}] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img 
                className='checkout-ad' 
                alt='ad'
                src='https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png'
                />
                <div>
                    <h2 className='checkout-title'>
                        {user? user + "'s shopping basket" : "Guest's shopping basket"}
                    </h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>

            <div className='checkout-right'>
               <Subtotal/>
            </div>
        </div>
    );
}

export default CheckOut;