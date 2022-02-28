
import { useState} from 'react'

const ComponenteEstado = () => {

  
  const [contador, setContador] = useState(0)

 
  const sumarHandler = () => { 
    setContador( contador + 1)
   }

   const restarHandler = () => { 
    setContador( contador - 1)
   }

   console.log ('render de ComponenteEstado'); 

  return (

    <>
    <div className='text-right	'>
    <div>ComponenteEstado</div>
    Total : {contador}
    <br></br>
    <button onClick={restarHandler}>-</button>
    <button onClick={sumarHandler}>+</button>
    </div>


    


   
    </>
    
  )
}

export default ComponenteEstado



























/*
  const promesa = () => {
    console.log ('Inicia mi funcion con una promesa');

    const miPromesa = new Promise ( (resolve, reject) => {
      const random = Math.random() 
      console.log ('random:', random);
      if (random  < 0.5) {
        reject ('la promesa se rechazo')
      } else {
        resolve ('la promesa se resolvio')
      }
    })


    miPromesa.then( (res) => {
      console.log (res);
    }).catch (e => {                //  esto es lo mismo que poner el catch  , (err)=> { console.log (err); } )
      console.log(e);
    }).finally( ()=> {
      console.log('Finally siempre se ejecuta al final');
    })        

  }
  */


  /*  const productosNombres = [
    'Cessna 152', 'Cessna 172', 'Piper Seneca', 'Cirrus'
  ]

  {productosNombres.map ( (n) => <li><span>{n}</span></li>)} */