import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({item:p}) => {
  return (
    <div>
        <strong>{p.name}</strong>
        <strong> Precio: {p.precio}</strong>
        <strong> Stock: {p.stock}</strong>
        <div>Categoria: <Link to='/categoria/${p.categoria}'>{p.categoria}</Link></div>

    </div>
  )
}

export default ItemCard