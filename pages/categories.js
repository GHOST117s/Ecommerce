import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import {  useState } from "react";

const categories = () => {
  const [category, setCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  

  function handleCategory() {

    if (!category.trim()) {
      alert("Please enter a category name.");
      return;
    }


    // Get existing categories from local storage or create an empty array if there are none
    const existingCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );

    // Create a new category object with an auto-increment ID based on the number of existing categories
    const newCategory = {
      id: existingCategories.length + 1,
      name: category,
    };

    // Add the new category to the existing categories array
    const newCategories = [...existingCategories, newCategory];
   

    // Save the updated categories array to local storage
    localStorage.setItem("categories", JSON.stringify(newCategories));

    // Log a message to the console for testing purposes
    console.log("Category added:", newCategory);


    // Update the categories list state variable
    setCategoriesList(newCategories);
  }
//delete category
function handleDelete(id) {
  const filteredCategories = categoriesList.filter((category) => category.id !== id);
  localStorage.setItem("categories", JSON.stringify(filteredCategories));
  setCategoriesList(filteredCategories);
}





  //retrive data from local storage
  useEffect(() => {
    const existingCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    setCategoriesList(existingCategories);
  
    //clear the input field
    setCategory("");
   
  }, []);




  return (
    <div>
      <Navbar />

      <h1>Categories Page</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add Category
            </label>
            <input
              type="text"
              id="large-input"
              className="block w-1/3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setCategory(e.target.value)}
            />
            <button
              type="button"
              className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
              onClick={handleCategory}
            >
              Add
            </button>
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
                <Link href={`/productList?category=${category.id}`}>
                  {" "}
                  <button
                    type="button"
                    className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
                  >
                    View
                  </button>
                </Link>
                <button
                  type="button"
                  className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
                >
                  Edit
                </button>
                <button
  type="button"
  className=" m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
  onClick={() => handleDelete(category.id)}
>
  Delete
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
export default categories;
