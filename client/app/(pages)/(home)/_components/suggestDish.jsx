"use client";
import React from "react";

const SuggestDish = () => {
  return (
    <form>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="ingredients"
          id="floating_ingredients"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" rice flour, sugar, ghee etc..."
          required
        />
      </div>
      <button className="bg-gray-600 p-3 text-white rounded">Find Dish</button>
    </form>
  );
};

export default SuggestDish;
