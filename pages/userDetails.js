// import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import NavbarSecondary from './Components/NavbarSecondary'


const userDetails = () => {

  
  const user = JSON.parse(localStorage.getItem('user'));
  

  if (!user) {
    return (
      <>
      
        <h1 className="display-1 text-center">Please Login to View user data </h1>
      </>
    )
  }


  return (
    <div>
        <NavbarSecondary/>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{user.username}
        <br class="hidden lg:inline-block"/>{user.name}
      </h1>
      <p class="mb-8 leading-relaxed">{user.email}</p>
      <p class="mb-8 leading-relaxed">Address:
     <h2 class="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900"> {user.address.street}</h2>
     <h2 class="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900"> {user.address.suite}</h2>
     <h2 class="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900"> {user.address.city}</h2>
     <h2 class="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900"> {user.address.zipcode}</h2>


     
      </p>

      {/* <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default userDetails
