import React from 'react'
import Link from 'next/link'
import Navbar from './Components/Navbar'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const product = () => {
  const router = useRouter();
  const { product } = router.query;
  const {category} = router.query;

const [products, setProducts] = useState([]);
const [Variants, setVariants] = useState([]);
  useEffect(() => { 
    const localProducts = JSON.parse(localStorage.getItem("products") || "[]");   
    // console.log(localProducts);

    //match the product id with the product in local storage
    const selectedProduct = localProducts.find(p => p.id === parseInt(product));  
        // console.log(selectedProduct);
    setProducts(selectedProduct);

    //filter the products by category
    const filteredProducts = localProducts.filter(p => p.category === category);
    console.log(filteredProducts);
    setVariants(filteredProducts);
    // console.log(product);
    // console.log(category);
   
  }, [product]);
 
  
  return (
    <div>
        <Navbar/>   
        <h1>Product Page</h1>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    {products && (
      <><img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={products.image} /><div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{products.name}</h1>
                <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                </div>
              </div></>
)}
    </div>
  </div>
</section>
<h1 className="title-font font-medium text-3xl text-gray-900 ml-12">Variants</h1>
{/* <h1>Variants</h1> */}
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4"> 
      
      {/* //map the Variants array to create a list item for each product */}
      {Variants && Variants.map((product, index) => (
        
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
          {/* <p className="mt-1">₹18.40</p> */}
          <Link   href={`/variants?product=${product.id}`} > <button type="button" className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded">View</button></Link>
         {/* <button type="button" className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded">Edit</button>
         <button type="button" className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded">Delete</button> */}
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
      
    </div>
  )
}

export default product
