import React from 'react';
import '../style/Prouduct.css'
import { useStateValue } from '../providers/StateProvider';

function Prouduct({title, price, image, rating, id}) {

    const [basket, dispatch] = useStateValue()
    
    const addToBasket = () => {
        console.log('clicked')
        //dispatch action
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
            
        <div className="product">
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='product-rating'>
                {
                    Array(rating).fill().map((_, i) => (
                        <span key={i} role="img" aria-label='star-rating'>⭐️</span>
                    ))
                }
            </div> 

            <img 
            className='product-image' 
            alt='prouduct' 
            src={image}/>
            
            <button onClick={addToBasket}>Add to Basket</button>
            </div>
        
        
    );
}

export default Prouduct;