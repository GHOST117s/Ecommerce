import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from './Components/Navbar'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [category, setCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);



  //retrive data from local storage
  useEffect(() => {
    const existingCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    setCategoriesList(existingCategories);
  
    //clear the input field
    setCategory("");
    console.log(existingCategories);
   
  }, []);



  return (
    <>
    <Navbar />

    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-6">        
         
          </div>

          <div className="flex flex-wrap -m-4">
            {categoriesList.map((category) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={category.id}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/428x268"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {category.name}
                </h2>
                {/* <p className="mt-1">₹18.40</p> */}
                
                
       

              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

 

  



    </>
  )
}
