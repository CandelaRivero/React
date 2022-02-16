

import React from 'react'
import Item from './Item'




function ItemListContainer ( {nombre}  ) {    

    const estilos = {
        nombre: 'class=h-10 px-6 text-center underline decoration-pink-500'
      }

      const producto = [
        {nombre: 'Cessna 152', precio: '$1500'},
        {nombre: 'Cessna 172', precio: '$3000'},
        {nombre: 'Piper Seneca', precio: '$6000'}
      ]
    
        return (
          <> 
          <div className={estilos.nombre} >Hola buen dia {nombre}!</div>  

          <div className={estilos.nombre} style={{border: "solid red"}}>
          <Item producto={producto[0]}></Item>  
          <Item producto={producto[1]}></Item> 
          <Item producto={producto[2]}></Item>   
         
          </div>
          </>    
    
        )
    }
    
    export default ItemListContainer
    
    