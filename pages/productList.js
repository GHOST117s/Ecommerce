import React from "react";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "./Components/Modal";

const productList = () => {
  const router = useRouter();
  const { category } = router.query;


  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleAdd() {
    setShowModal(true);
  }
  const handleClose = () => {
    setShowModal(false);
  };

function handleEdit(product) {

  console.log(product);
  setSelectedProduct(product);
  setShowModal(true);
}

const handleEditSubmit = (e,id) => {

  
 
 

}



const handleSubmit = (e) => {
  e.preventDefault();

  // Get input values
  const name = e.target.elements.name.value;
  const category = e.target.elements.category.value;

  // Handle file upload
  const fileInput = e.target.elements.picture;
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const base64Image = reader.result;

    // Retrieve existing products from local storage
    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    // Check if product already exists in local storage
    const id = selectedProduct ? selectedProduct.id : existingProducts.length + 1;
    const index = existingProducts.findIndex((product) => product.id === id);

    if (index !== -1) {
      // Product already exists, update its properties
      const updatedProduct = {
        ...existingProducts[index],
        name,
        image: base64Image,
        category,
      };

      // Update products array with updated product
      const updatedProducts = [
        ...existingProducts.slice(0, index),
        updatedProduct,
        ...existingProducts.slice(index + 1),
      ];

      // Save updated products array to local storage
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      console.log("Product updated:", updatedProduct);

      // Update products state variable
      const filteredProducts = updatedProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    } else {
      // Product does not exist, create a new product
      const newProduct = {
        id,
        name,
        image: base64Image,
        category,
      };

      // Add new product to products array
      const newProducts = [...existingProducts, newProduct];

      // Save updated products array to local storage
      localStorage.setItem("products", JSON.stringify(newProducts));
      console.log("Product added:", newProduct);

      // Update products state variable
      const filteredProducts = newProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }

    setShowModal(false);
  };
};

  

  useEffect(() => {
    // Retrieve products from local storage
    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    // Filter products based on category ID
    const filteredProducts = existingProducts.filter(
      (product) => product.category === category
    );

    setProducts(filteredProducts);
    //update products state variable
    
  }, [category]);

//edit product from local storage and update state
 



//delete product from local storage and update state

  function handleDelete(id) {

    console.log(id,"clicked");
    const filteredProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(filteredProducts));

    setProducts(filteredProducts);
  } 



  console.log(category);

  return (
    <div>
      <Navbar />

      <h1>Product List page</h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add Product
            </label>

            <button
              type="button"
              className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
              onClick={handleAdd}
            >
              Add
            </button>
            {showModal && (
              <Modal
                onClose={() => setShowModal(false)}
                handleClose={handleClose}
                handleSubmit={handleSubmit} product={selectedProduct}
              />
            )}
          </div>

          {/* //products */}
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
            <div className="m-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" key={product.id}>
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </a>
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href={`/product?product=${product.id}&category=${category}`}                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View
                  <svg  aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <button
                 onClick={() => handleEdit(product)}
                  className=" m-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              

                <button
                  
                  className=" m-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"                 onClick={() => handleDelete(product.id)}
                >
                  Delete
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default productList;
