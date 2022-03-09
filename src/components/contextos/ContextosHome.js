import React, { useContext, useState } from 'react'
import CounterContainer from './CounterContainer'
import {CounterContext} from './context/counterContext'

const ContextosHome = () => {

   
    
    const {count, addCounter, subtractCounter} =  useContext(CounterContext)


  return (
  
  <>
    <div>ContextosHome</div>
    <h1>{count}</h1>                                    
    <button onClick={ ()=>{addCounter()} }>Aumenta contador</button>  
    <button onClick={ ()=>{subtractCounter()} }>Resta contador</button>  

    <CounterContainer></CounterContainer>

    </>
  
  )
}

export default ContextosHome



  // const [counter, setCounter] = useState(0)

//    const addHandler = () => {                                         <h1>{counter}</h1>
  //      setCounter(counter + 1)                                         <button onClick={ addHandler }>Aumenta contador</button>  
  
  
    // }  