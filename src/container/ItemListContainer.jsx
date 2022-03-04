
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../components/Cards'
import Item from './Item'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'



const ItemListContainer = ( ) => {  
  
  const {category} = useParams ()
  const [cat, setCat] = useState('')

  useEffect(() => {
    setCat(category)
  }, [cat])
  
  // console.log(category);

    const estilos = {
        nombre: 'class=h-10 px-6 text-center underline decoration-pink-500 '
      }

      const titulo = {
        titulo: 'font-bold underline text-center '
      }

    
    
        return (
         <>
          <div className={titulo.titulo} >Our fleet</div>  
          <Cards></Cards>
          
          <div className={estilos.nombre} style={{border: "solid red"}}>
         <ItemList category={category}>
         </ItemList>
         <ItemDetailContainer></ItemDetailContainer>
          </div>



        
          </>    
    
        )
    }
    
    export default ItemListContainer

    
    
    