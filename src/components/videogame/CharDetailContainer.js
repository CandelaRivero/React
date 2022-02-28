import React from 'react'
import { useParams } from 'react-router-dom'

const CharDetailContainer = () => {

   const {charId} = useParams()
  return (

    <>
    <div>Personaliza tus personajes</div>
    <div>Id de personaje: {charId}</div>
    </>
    
  )
}

export default CharDetailContainer