
import Cards from '../components/Cards'
import Item from './Item'
import ItemList from './ItemList'



function ItemListContainer (  {nombre} ) {    

    const estilos = {
        nombre: 'class=h-10 px-6 text-center underline decoration-pink-500 '
      }

      const titulo = {
        titulo: 'font-bold underline text-center '
      }

      const producto = [
        {nombre: 'Cessna 152', precio: '$1500'},
        {nombre: 'Cessna 172', precio: '$3000'},
        {nombre: 'Piper Seneca', precio: '$6000'},
        {nombre: 'Cirrus', precio: '$9000'}
      ]
    
        return (
         <>
          <div className={titulo.titulo} >Our fleet</div>  
          <Cards></Cards>
          


          <div className={estilos.nombre} style={{border: "solid red"}}>
          <Item producto={producto[0,1,2,3]}></Item>  
          
          
         <ItemList></ItemList>
          </div>



        
          </>    
    
        )
    }
    
    export default ItemListContainer

    
    
    