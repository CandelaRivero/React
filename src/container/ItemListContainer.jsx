
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

          <div className={estilos.nombre} style={{border: "solid red"}}>
          <Item producto={producto[0]}></Item>  
          <Item producto={producto[1]}></Item> 
          <Item producto={producto[2]}></Item>   
          <Item producto={producto[3]}></Item>
          
         <ItemList></ItemList>
          </div>





    <main className="h-screen w-screen py-6  flex items-center justify-center flex-wrap">
      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="152"></img>
        </div>
        
        
        <div className="w-full h-1/4 p-3">
          <a href="#" className=" hover:text-yellow-600 text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Cessna 152</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$1500</p>
        </div>
      </div>



      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="172"></img>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" clasNames=" hover:text-yellow-600 text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Cessna 172</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$3000</p>
        </div>
      </div>



      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piper"></img>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className=" hover:text-yellow-600 text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Piper Seneca</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$6000</p>
        </div>
      </div>


      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cirrus"></img>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className=" hover:text-yellow-600 text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Cirrus</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$9000</p>
        </div>
      </div>
      </main>

        
          </>    
    
        )
    }
    
    export default ItemListContainer
    
    