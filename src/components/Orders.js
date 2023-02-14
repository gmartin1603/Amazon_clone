import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useStateValue } from '../providers/StateProvider';
import '../style/Orders.css'
import Order from './Order';

function Orders(props) {
  const [orders, setOrders] = useState([])

  const [{basket, user}, dispatch] = useStateValue()

  useEffect(() => {
    if(user){
      console.log(user.uid)
      const q = query(collection(db, "users", user.uid, "orders"), orderBy("created", 'desc'));
      getDocs(q).then((querySnapshot) => {
        let arr = []
        querySnapshot.docs.map(doc => {
            arr.push({
            id: doc.id,
            data: doc.data()
            })
        })
        setOrders(arr)
      })
    } else{
      setOrders([])
    }
  },[user])
    return (
        <div>
          <h1>Your Orders</h1>
          <div className="orders-order">
            {orders?.map(order => (
              <Order key={order.id} order={order} />
            ))}
          </div>
        </div>
    );
}

export default Orders;