import React from 'react'
import { Link } from 'react-router-dom'
// import Cessna172 from './Cessna172.svg'

const Cards = () => {
  return (
    


    <main className="h-screen w-screen py-6  flex items-center justify-center flex-wrap">
      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007409/Cessna_152_hdh2ws.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="152"></img>
        </div>
        
        
        <div className="w-full h-1/4 p-3">
          <a href="#" className="text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Cessna 152</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$1500</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
      </div>



      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
        
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007196/cessna_172_dpo95n.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="172"></img>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className="text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Cessna 172</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$3000</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
      </div>



      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007431/piper-seneca_n8wdmx.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piper"></img>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className="text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Piper Seneca</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$6000</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
      </div>


      <div className="bg-white w-72 h-96 shadow-md rounded m-3 focus:outline-none hover:bg-gray-200">
        <div className="h-3/4 w-full">
          <img className="w-full h-full object-cover rounded-t" src="https://res.cloudinary.com/dvyoczetf/image/upload/v1646007442/cirrus_toknvp.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="cirrus"></img>
       <svg xmins=""></svg>
        </div>
        <div className="w-full h-1/4 p-3">
          <a href="#" className=" text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide ">Cirrus</span>
          </a>
          <p className="text-gray-600 text-sm leading-5 mt-1">$9000</p>
          <Link to='detalles' className='text-blue-500 hover:text-blue-600'>Detalles</Link>
        </div>
      </div>
      </main>

  )
}

export default Cards