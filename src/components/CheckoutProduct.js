import React, { useReducer } from 'react';
import { useStateValue } from '../providers/StateProvider';
import '../style/CheckoutProduct.css'


const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
    
    const [{basket}, dispatch] = useStateValue()
    
    const removeFromBasket = () => {
        
        // remove the item from the basket
        dispatch(
            {
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkout-product'>
            <img 
            className='checkout-product-image' 
            src={image} alt='product'
            />
            <div className='checkout-product-info'>
                <p className='checkout-prouduct-title'><span>{title}</span></p>
                <p className='checkout-prouduct-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout-product-rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <span key={i} role="img" aria-label='star-rating'>⭐️</span>
                    ))}
                </div>
            {!hideButton && (
                <button onClick={removeFromBasket}><span>Remove from Basket</span></button>
            )}
            </div>
        </div>
    );
};

export default CheckoutProduct;