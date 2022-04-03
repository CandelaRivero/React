import React from 'react'
import Item from '../container/Item'
import ItemCount from './ItemCount'

function ItemDetail({item}) {
  const  productos = [
    {id:'1' , name:'Cessna 152' , precio: '$1500', stock:'5', categoria: 'cessna'},
    {id:'2' , name:'Cessna 172' , precio: '$3000', stock: '8', categoria: 'cessna'},
    {id:'3' , name:'Piper Seneca ' , precio: '$6000', stock: '7', categoria: 'other'},
    {id:'4' , name:'Cirrus' , precio: '$9000', stock: '9', categoria: 'other'}
   ]
  return (
    <div>ItemDetail
        <p>All annual and instruments inspections done</p>
        <p>Los Angeles, CA</p>
        <p>300 hours logged</p>


        <div className='container row'>
        <div className='mb-5'>
          <h1>Reserva tu viaje</h1>
        </div>
        <div className='col col-6'>
          <img className='card-img-top' src=''></img>
        </div>
        <div className='row col col-6'>
          <div className='py-4'>
            {/* <h2> {plane.plane}</h2>
            <h4 className='text-muted'>{plane.country}</h4> */}
            <h2>{productos.nombre}</h2>
            
            <small className='col-12 text-muted align-center m-auto'>
              {productos.description} 
            </small>
            <p className='fs-4 offset-3 col-6 badge bg-danger text-wrap m-auto mt-3'>
             ${productos.price} 
            </p>
          </div>
          <hr/>
         <ItemCount stock={productos.stock}   />  {/* stock={plane.stock} */}
        </div>
        </div>




    </div>

    
  )
}

export default ItemDetail