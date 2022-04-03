import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CheckOut from './CheckOut'
import PlaneDetail from './PlaneDetail'
import PlanesListContainer from './PlanesListContainer'

const PlanesHome = () => {
  return (
    <BrowserRouter>
    <Link to='/'>Tienda de Planes</Link> --
    <Link to='/checkout'>Finalizar compra </Link>
    <Routes>
        <Route index element={<PlanesListContainer/>}></Route>
        <Route path='checkout' element={<CheckOut/>}/>
        <Route path='detalle'>
            <Route path=':id' element={<PlaneDetail/>}></Route>
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default PlanesHome