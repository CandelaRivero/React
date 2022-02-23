import React from 'react'
import Cursos2 from "./Cursos2"

const Cursos = ( {nombre}) => {

    const estilos = {
        nombre: 'class=h-10 px-6 text-center underline decoration-pink-500'
      }

    const cursos = [
        {nombre: 'Private Pilot'},
        {nombre: 'Commercial Pilot'},
        {nombre: 'Airline Pilot'}
    ]

  return (
    <>
    <div className="text-3xl font-bold underline">Cursos y programas</div>
    <div className={estilos.nombre} style={{border: "solid blue"}} >
        <Cursos2 cursos={cursos[0]}></Cursos2>
        <Cursos2 cursos={cursos[1]}></Cursos2>
        <Cursos2 cursos={cursos[2]}></Cursos2>

    
    </div>
    </>
  )
}

export default Cursos


