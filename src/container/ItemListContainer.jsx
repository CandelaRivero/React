

import React from 'react'




function ItemListContainer ( {nombre} ) {    

    const estilos = {
        nombre: 'class=h-10 px-6 text-center underline decoration-pink-500'
      }
    
        return (
    
          <>
          
    <div className={estilos.nombre} >Hola buen dia {nombre}!</div>
  
            
            
            
          </>    
    
        )
    }
    
    export default ItemListContainer
    
    