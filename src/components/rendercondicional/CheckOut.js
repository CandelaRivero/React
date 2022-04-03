import React from 'react'
import { addOrder } from './firebase/firebaseClient';

const CheckOut = () => {
 
    const orderHandler = () => { 
        const order = {
            user: {
                name :'Ana',
                email: 'ana@gmail.com',
            },
            products: 
                [
                {name: 'Cessna 152', price: 1500, quantity: 2}, 
                {name: 'Cessna 172', price: 3000, quantity: 1},
                {name: 'Cirrus', price: 9000, quantity: 1}
            ],
            total: 13500

        }
        addOrder(order).then( data => {
            console.log(data);
            } )
        console.log('Se realizo el pedido');
     }
    
  return (
      <>
      <div>CheckOut</div>
      <button onClick={orderHandler}> Realizar pedido</button>
      </>
    
  )
}

export default CheckOut