import React from 'react'

const CharListCard = ({char: c}) => {
  return (
    
    <div className='divide-y divide-dashed'>
        <div>{c.name}</div>
        <div>{c.life}</div>
        <div>{c.power}</div>
    </div>

  )
}

export default CharListCard