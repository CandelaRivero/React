//import React from 'react'
//snmipet: rafce

//const footer = () => {
 // return (
   // <div>footer</div>
  //)
//}

//export default footer

function Footer ( {name, action, children} ) {     // si le pongo el action sale el artMsg, si dejo name toma el onclick

//  const onClickHandler = () => { 
  //  console.log('Hiciste click')
  // }

const styles = {
  button: 'class=h-10 px-6 font-semibold rounded-md bg-black text-white'
}
    return (

      <>
      
        
        <button className={styles.button} onClick={action} >Dale click aqui</button> 
        
        
        
      </>    
// si le pong action salta el aler, si dejo la funcion toma el consolelog
    )
}

export default Footer

