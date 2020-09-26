import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../providers/StateProvider';
import '../style/Orders.css'
import Order from './Order';

function Orders(props) {
  const [orders, setOrders] = useState([])

  const [{basket, user}, dispatch] = useStateValue()

  useEffect(() => {
    if(user){
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          data: doc.data()
        })))
      })
    } else{
      setOrders([])
    }
    })
    return (
        <div>
          <h1>Your Orders</h1>  
          <div className="orders-order">
            {orders?.map(order => (
              <Order order={order} />
            ))}
          </div>
        </div>
    );
}

export default Orders;