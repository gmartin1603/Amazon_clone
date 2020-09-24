import React from 'react';
import '../style/Prouduct.css'
import { useStateValue } from '../providers/StateProvider';
import { AnimationWrapper, useHover } from 'react-hover-animation'

function Prouduct({title, price, image, rating, id}) {

    const [basket, dispatch] = useStateValue()
    const { spring, animated, setHover } = useHover({
        animationConfig : {
            duration: 200
        }
    })
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
            
        <animated.div className='product' 
        style={spring} 
        onPointerOver={() => {
            setHover(true)
        }} onPointerOut={() => {
            setHover(false)
        }}>
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
        </animated.div>
        
    );
}

export default Prouduct;