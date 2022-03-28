import React from 'react'
import { useContext } from 'react'

import {useCounter} from './context/counterContext'

const CounterCard = () => {

  const {count, addCounter} =  useCounter()

  return (
    <>
    <div className='border-2 border-red-600 m-2 p-5'>
    <div>Contador : {count}</div>
    <button onClick={()=>{addCounter(2)}}>Agregar 2</button>
    </div>
    </>
  )
}

export default CounterCard