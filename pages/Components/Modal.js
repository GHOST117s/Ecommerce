import React, { useEffect, useState } from "react";

const Modal = ({ show, handleClose, handleSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const existingCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    setCategories(existingCategories);
  }, []);

  return (
    <div className={`${showHideClassName} fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center`}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
      <section className="modal-main bg-white rounded-md w-96 p-6 relative z-10">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-gray-400 rounded-md mb-4" />
  
          <label htmlFor="picture" className="block mb-2 font-medium text-gray-700">Picture:</label>
          <input type="file" id="picture" name="picture" className="w-full p-2 border border-gray-400 rounded-md mb-4" accept="image/*" />
  
          <label htmlFor="category" className="block mb-2 font-medium text-gray-700">Category:</label>
          <select id="category" name="category" className="w-full p-2 border border-gray-400 rounded-md mb-4">
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
  
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600">Add</button>
          <button type="button" onClick={handleClose} className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500">Close</button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
