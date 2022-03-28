import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PlaneDetail from './PlaneDetail'
import PlanesListContainer from './PlanesListContainer'

const PlanesHome = () => {
  return (
    <BrowserRouter>
    <Link to='/'>Tienda de Planes</Link>
    <Routes>
        <Route index element={<PlanesListContainer/>}></Route>
        <Route path='detalle'>
            <Route path=':id' element={<PlaneDetail/>}></Route>
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default PlanesHome