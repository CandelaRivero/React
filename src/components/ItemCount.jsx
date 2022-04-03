import React, {useState} from 'react';

export default function ItemCount({stock}) {
    const [count, setCount] = React.useState(1);

    function suma(){
        if (count < stock) 
            setCount(count + 1);
        
    }
    function resta(){
        if (count > 1) 
            setCount(count - 1);
        
    }
    

    return (
        <div className='container'>
        <div className='border-primary conatiner mt-5'>
            <div className='btn-group' role="group" arial-label="Basic outlined example">
                <button  onClick={resta}type='button' className='btn btn-outlinee-primary'> - </button>
                <span className='my-auto px-5'>{count}</span>
                <button onClick={suma} type='button' className='btn bnt-outline-primary'> + </button>
            </div>
        </div>
        <div className='container'>
            <div className='text-center d-flex flex-column'>
            <button  type='button' className='mt-4 btn btn-success cart-button px-5'>Agregar al carrito</button>
            <small className='text-muted mt-2'>Stock disponible : {stock}</small>
            </div>
        </div>
        </div>
    )
}