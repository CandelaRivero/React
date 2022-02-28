import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import CharListCard from './CharListCard'


const charsList = [
    {id: 1, name:'Alex', life:'23', power:'CFI'},
    {id: 2, name:'Audrey', life:'32', power:'CFII'},
    {id: 3, name:'Delfi', life:'21', power:'Intructors chief'},
    {id: 4, name:'Bauti', life:'26', power:'CFI'}
]

const CharList = () => {

    const [chars, setChars] = useState([])

    useEffect(() => {
      getChars ()
    }, [])
    

    const getChars = () => { 
         const getCharsPromise = new Promise ((resolve, reject) => {
             setTimeout(()=> {
                resolve(charsList)
             }, 3000);
         })

         getCharsPromise.then(
             data => {
                 setChars (data)
                 console.log(data);

             }
         )


     }

   

  return (
     
    <div>
        <h1>Lista de Instructores</h1>
        {chars.map((c) => 
        <CharListCard key={c.id} char={c} ></CharListCard>

             
        )}
  </div>
  )
        }

export default CharList