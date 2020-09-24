import React, { useReducer } from 'react';
import { useStateValue } from '../providers/StateProvider';
import reducer, {initialState} from '../reducers/stateReducer';
import '../style/CheckoutProduct.css'


const CheckoutProduct = ({ id, image, title, price, rating }) => {
    
    const [{basket}, dispatch] = useStateValue()
    console.log(basket)
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
                <p className='checkout-prouduct-title'>{title}</p>
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
            <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;