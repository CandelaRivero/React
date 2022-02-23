import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {


  return (

    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
</svg>
      <span className="ml-3 text-xl" >Planes</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href=''>Our fleet</a>
      <a className="mr-5 hover:text-gray-900" href=''>Courses</a>
      <a className="mr-5 hover:text-gray-900" href=''>Our staff</a>
      <a className="mr-5 hover:text-gray-900" href=''>Shop</a>
    </nav>
    <CartWidget></CartWidget>
  </div>

</header>

  )
}

export default NavBar


