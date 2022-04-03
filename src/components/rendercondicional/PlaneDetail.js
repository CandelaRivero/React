import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductById } from './firebase/firebaseClient'


const PlaneDetail = () => {

    const [plane, setPlane] = useState({})
    const {id} = useParams()

    useEffect (() => {
      getProductById (id).then (data => {
         // console.log(data[0]);
         setPlane(data)
       })

    }, [])


  return (
   <>
    <div>PlaneDetail</div>
     <PlaneCard plane={plane}></PlaneCard> 
   </>
  )
}


 export const PlaneCard = ({plane}) => {
   return (
    <>
     <div>
         <h1>{plane.name}</h1>
         <h1>${plane.price}</h1>
         <h1>{plane.desc1}</h1>
         <h1>{plane.desc2}</h1>
         <h1>{plane.desc3}</h1>

         
     </div>
    </>
   )
 }


export default PlaneDetail