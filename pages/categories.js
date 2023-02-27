import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import {  useState } from "react";

const categories = () => {
  const [category, setCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");

  function handleCategory() {
    if (!category.trim()) {
      alert("Please enter a category name.");
      return;
    }

    const existingCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    const newCategory = {
      id: existingCategories.length + 1,
      name: category,
    };
    const newCategories = [...existingCategories, newCategory];
    localStorage.setItem("categories", JSON.stringify(newCategories));
    setCategoriesList(newCategories);

    console.log("Category added:", newCategory);

    setCategory("");
  }

  function handleDelete(id) {
    const filteredCategories = categoriesList.filter(
      (category) => category.id !== id
    );
    localStorage.setItem("categories", JSON.stringify(filteredCategories));
    setCategoriesList(filteredCategories);
  }

  function handleEdit(id) {
    const categoryToEdit = categoriesList.find(
      (category) => category.id === id
    );
    setEditCategory(categoryToEdit);
    setEditCategoryName(categoryToEdit.name);
  }

  function handleUpdate() {
    const updatedCategories = categoriesList.map((category) =>
      category.id === editCategory.id
        ? { ...category, name: editCategoryName }
        : category
    );
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategoriesList(updatedCategories);
    setEditCategory(null);
    setEditCategoryName("");
  }

  useEffect(() => {
    const existingCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    setCategoriesList(existingCategories);
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
          value={category}
        />

        <button
          type="button"
          className="m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
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
                {editCategory && editCategory.id === category.id ? (
                  <input
                    type="text"
                    value={editCategoryName}
                    onChange={(e) => setEditCategoryName(e.target.value)}
                  />
                ) : (
                  category.name
                )}
              </h2>
              <Link href={`/productList?category=${category.id}`}>
                <button className="m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded">
                  View
                </button>
              </Link>
              {editCategory && editCategory.id === category.id ? (
                <>
                  <button
                    type="button"
                    className="m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="m-1 focus:outline-none text-white bg-gray-500 border-0 py-2 px-6 hover:bg-gray-600 rounded"
                    onClick={() => setEditCategory(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="m-1 focus:outline-none text-white bg-red-500 border-0 py-2 px-6 hover:bg-red-600 rounded"
                  onClick={() => handleEdit(category.id)}
                >
                  Edit
                </button>
              )}
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
