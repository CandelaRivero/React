import { getFirestore, collection, getDocs } from 'firebase/firestore'
import  "./firebase/firebaseClient";
import { useEffect, useState } from 'react'


const PlanesListContainer = () => {

    const [productos, setProductos] = useState([])


    useEffect( () => {

       const asynCall = async () => { 
            const db = getFirestore()

            const querySnapshot = await getDocs(collection(db,"products"));
      
            let listaDeProductos = []
               
            querySnapshot.forEach((doc) => { 
                
               // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
                 console.log(doc.data());
                 listaDeProductos.push(doc.data())
            });
      
            setProductos(listaDeProductos)
        }
        asynCall()
          
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
    <div>{plane.name}</div>
    <div>Price: {plane.price}</div>
    <div>Stock: {plane.stock}</div>
    </>
  )
}

export default PlanesListContainer