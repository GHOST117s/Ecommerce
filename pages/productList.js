import React from 'react'
import Link from 'next/link'
import Navbar from './Components/Navbar'


const productList = () => {
  return (
    <div>
        <Navbar/>

        <h1>Product List page</h1>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      
      
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          {/* <p className="mt-1">$18.40</p> */}

          <Link href='/product'> <button type="button" className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded">View</button></Link>

<button type="button" className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded">Edit</button>

<button type="button" className="  m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded">Delete</button>


        </div>
      </div>
    </div>
  </div>
</section>
        

      
    </div>
  )
}

export default productList
