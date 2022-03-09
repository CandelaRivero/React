import React from 'react'

const EventsHome = () => {

    const buttonClickHandler = (event,num) => {
        console.log('Hiciste click el en boton', num);
        console.log(event);
    }

    const otroButtonClickHandler = (event) => { 
        console.log(event);
     }

     const inputHandler = (e) => { 
            console.log('Evento  oninput');
            console.log(e.targert.value);
      }
  return (

    <>
    <div>EVENTS HOME</div>
    <button onClick={(event) => { buttonClickHandler(event, 10) }}>Haz click aqui</button>
    <button onClick={otroButtonClickHandler}>Otro boton</button>
    <input onInput={inputHandler}></input>
    </>
  )
}

export default EventsHome