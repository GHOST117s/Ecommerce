import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from './Components/Navbar'

const variants = () => {
    const router = useRouter();
    const {product} = router.query;

    const [variants, setVariants] = useState([])    
    useEffect(() => {
        const localProducts = JSON.parse(localStorage.getItem('products') || '[]');

        const selectedProduct = localProducts.find(p => p.id === parseInt(product));  
        
        // console.log(selectedProduct);
        
        setVariants(selectedProduct);


     }, []);


  return (
    <>
    <Navbar/>

    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">

        {variants && (
      <><img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={variants.image} /><div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                              <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
                              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{variants.name}</h1>

                              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                              </div>

                          </div></>
        )} 
    </div>
  </div>
</section>
    
    
    
    
    </>
  )
}

export default variants
