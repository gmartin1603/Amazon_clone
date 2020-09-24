import React from 'react';
import '../style/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../providers/StateProvider';
import { getBasketTotal } from '../reducers/stateReducer';

function Subtotal(props) {
    const [{basket}] = useStateValue()
    
    return (
        <div className='subtotal'>
          <CurrencyFormat
          renderText = {(value) => (
                  <>
              <p>
                  Subtotal ({basket?.length} items): <strong>{value}</strong>
              </p>
              <small className='subtotal-gift'>
                  <input type='checkbox'/> This order contains a gift
              </small>
              </>
                )
            
          }
          decimalScale={2}
          value={getBasketTotal(basket)} //part of hw
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          /> 
          <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;