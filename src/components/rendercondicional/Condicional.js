import React from 'react'
import { useState, useEffect } from 'react'


const Condicional = () => {

    const [boleano, setBoleano] = useState(false)

    console.log('Render del componente');

    useEffect(() => {
        console.log('Hubo un cambio en "boleano"');
      return () => {
          console.log('Cleanup');

     }
    }, [boleano])
    
    //if (boleano) {
      // return <div>Se cumple la condicion</div>

    //}


  //return (
    //<div>Condicional</div>
  //)


  const onClickHandler = () => { 
      setBoleano(!boleano)
   }

  return (
  <>
  <Titulo numero={5}/>
  {boleano ? 
   <Card mensaje='Se cumple la condicion'/> : 
    <Card mensaje='Condicional en false' error={true}/> } 

  <button onClick={onClickHandler}>
    {/*boleano ? 'Set false' : 'Set true'*/}
    {boleano &&  'Set false'}
    {!boleano && 'Set true'}
    </button>
  </>)
}

export const Card = ({mensaje, error})=> {

  const styles = error ?
   'border-4 border-red-600 m-2 p-4' :
   'border-4 border-blue-600 m-2 p-4'
 
  return (
    <div className={styles}>
    {mensaje}
    </div>
  )
} 




 const Titulo = React.memo( ({numero}) => {
   console.log('Titulo hizo render');
   
   useEffect(() => {
     getSpecies ()
   }, [])
   


   const getSpecies = () => {
     const URL = 'https://swapi.dev/api/species'
     fetch (URL)
      .then (res => res.json() )
      .then (res => {
        console.log(res);
        return res.results
       // setSpecies(res.results)
      })
   }

  return (
    <div>Esta es una cabezera {numero}</div>
  )
})



export default Condicional