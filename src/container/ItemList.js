import {useEffect , useState} from 'react'
import ItemCard from './ItemCard'


const ItemList = ({category}) => {
 
  
  

  
    const  productos = [
      {id:'1' , name:'Cessna 152' , precio: '$1500', stock:'5', categoria: 'cessna'},
      {id:'2' , name:'Cessna 172' , precio: '$3000', stock: '8', categoria: 'cessna'},
      {id:'3' , name:'Piper Seneca ' , precio: '$6000', stock: '7', categoria: 'other'},
      {id:'4' , name:'Cirrus' , precio: '$9000', stock: '9', categoria: 'other'}
     ]
    
   
     const {products, setProducts} = useState([])
     useEffect(() => {
       getProducts()
     }, [category])
   
     const getProducts = () => {
       const prodPromise = new Promise ((res, rej) => {
         res (productos)
   
       } )
       prodPromise.then (data => {
         if (category) {
           setProducts (data)
         } else {
          setProducts (data.filter(p => p.categoria == category))
         }

       }
        )
     }
   
    
     
    
    
      return (
    
        <>
        
        <div>ItemList
         
        
        
        {productos.map (p =>
          <ItemCard key={p.id} item={p} />
          )}
        </div>

       
    
       
        
  
    </>
  )
}

export default ItemList


/*
      const {products, setProducts} = useState([])
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const prodPromise = new Promise ((res, rej) => {
      res (productos)

    } )
    prodPromise.then (data => setProducts(data))
  }


     en el return  {products.map( p => 
          <strong>{p.name}</strong>
          )}
        
    */


