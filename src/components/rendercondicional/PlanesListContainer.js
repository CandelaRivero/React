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
      
        {productos.map((p) => <PlanesCard key={p.name} plane ={p} /> )}

    
    </>
  )
}
 const PlanesCard = ({plane}) => {
  return (
    <>
     <main>
     <div className="w-full h-1/4 p-3">
    <Link className="text-lg font-semibold uppercase tracking-wide text-gray-700 w-full h-1/4 p-3 " to={`/detalle/${plane.id}`}>{plane.name}</Link>
    <div className="text-gray-600 text-sm leading-5 mt-1">Price: {plane.price}</div>
    <div className="text-gray-600 text-sm leading-5 mt-1">Stock: {plane.stock}</div>
    
     </div> 
 
     
    </main>
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