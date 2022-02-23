import {useEffect , useState} from 'react'

const ItemList = () => {
 
   

  
    const  productos = [
      {id:'1' , name:'Cessna 152' , precio: '$1500', stock:'5'},
      {id:'2' , name:'Cessna 172' , precio: '$3000', stock: '8'},
      {id:'3' , name:'Piper Seneca ' , precio: '$6000', stock: '7'},
      {id:'4' , name:'Cirrus' , precio: '$9000', stock: '9'}
     ]
    
    
    
     useEffect ( () => {
      getProducts ()
      console.log ('se ejecuto el efecto');
      return () => {
          console.log ('Limpieza al unmount');
      } 
    }, [] )
    
     
    const getProducts = () => { 
      const getProductsPromise = new Promise ( (resolve, reject)=> {
        setTimeout(() => {
          resolve (productos)
        }, 3000);
        
      }) 
    
      getProductsPromise.then (response => {
        console.log(response);
      })
     }
    
     
    
    
      return (
    
        <>
        
        <div>ItemList</div>
    
        {productos.map (producto => <li key={producto.id}>{producto.name} - Stock:  {producto.stock} Precio: {producto.precio} </li> )}
        
  
    </>
  )
}

export default ItemList