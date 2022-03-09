import React from 'react'
import { NavLink } from 'react-router-dom';

const Item = ({producto}) => {


  return (

    <div>
   
        <h3>{producto.nombre}</h3>
        <h4>{producto.precio}</h4>
        <NavLink to={`/item/${producto.id}`}>Ver más</NavLink>

        
    </div>
    
    
  )
}

export default Item