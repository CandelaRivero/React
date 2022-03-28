import { getProducts } from  "./firebase/firebaseClient";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const PlanesListContainer = () => {

    const [productos, setProductos] = useState([])


    useEffect( () => {

      getProducts().then( data => {
        // console.log(data);
        setProductos( data )
      })
      
      // getProductsByProp ('name' , 'Cessna 172').then (data => {
      //   console.log(data[0]);
      // })


          }, [])
            
         




  return (

    <>
        <div>PlanesListContainer</div>
        {productos.map((p) => <PlanesCard key={p.namee} plane ={p} /> )}

    
    </>
  )
}
 const PlanesCard = ({plane}) => {
  return (
    <>
    {/* <div>
    <Link to={`/detalle/${plane.id}`}>{plane.name}</Link>
     </div> */}
     

    <main className="h-screen w-screen py-6  flex items-center justify-center flex-wrap">
      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007409/Planes/Cessna_152_hdh2ws.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="152"></img>
        </div>
        
        
        <div className="w-full h-1/4 p-3">
          <a href="#" className="text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide "><Link to={`/detalle/${plane.id}`}>{plane.name}</Link></span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$1500</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
      </div>



      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
        
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007196/Planes/cessna_172_dpo95n.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="172"></img>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className="text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide "><Link to={`/detalle/${plane.id}`}>{plane.name}</Link></span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$3000</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
        
      </div>



      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007431/Planes/piper-seneca_n8wdmx.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piper"></img>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className="text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide "><Link to={`/detalle/${plane.id}`}>{plane.name}</Link></span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$6000</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
      </div>


      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007442/Planes/cirrus_toknvp.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="cirrus"></img>
       <svg xmins=""></svg>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className=" text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide "><Link to={`/detalle/${plane.id}`}>{plane.name}</Link></span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$9000</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
      </div>
      </main>

    {/* <div>Price: {plane.price}</div>
    <div>Stock: {plane.stock}</div> */}
    </>
  )
}

export default PlanesListContainer




















// useEffect( () => {

  //  const asynCall = async () => { 
        // const db = getFirestore()

    //     const querySnapshot = await getDocs(collection(db,"products"));
   
      //   let listaDeProductos = []
            
        // querySnapshot.forEach((doc) => { 
             
            // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
          //    console.log(doc.data());
            //  listaDeProductos.push(doc.data())
        //  });
   
         // setProductos(listaDeProductos)
    // }
     // asynCall()
       
    //   }, [])