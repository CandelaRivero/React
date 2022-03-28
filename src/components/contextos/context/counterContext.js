 import React, { useContext, useState } from "react"


export const CounterContext = React.createContext( {
       count: 0,
        addCounter: ()=> {},
        subtractCounter: ()=> {}
     } )


    export const useCounter = () => { 
     return  useContext(CounterContext)
      }
     

 
export const CounterContextProvider = ({children}) => {

     const [counter, setCounter] = useState(0)

    const addCounter = (num = 1) => { 
            setCounter(counter + num)
         }

         const subtractCounter = (num = 1) => { 
            setCounter(counter - num)
         }


    const context = {
        count: counter,
        addCounter: addCounter,
        subtractCounter: subtractCounter

    }

   return (
    <CounterContext.Provider value={context}>
     {children}
     </CounterContext.Provider>
   )
 }
 
 










 