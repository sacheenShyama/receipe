import React from "react";
import SuggestDish from "./_components/suggestDish";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="mt-5 p-5">
      <div>
        <h1 className="text-4xl font-extrabold text-center">
          Discover Your Desire Dishes
        </h1>
        <p className="text-center text-gray-400 mt-2">
          We will Find Dishes according to your Ingredients, Just
          <br /> fill out the below form with your available Ingredients.
        </p>
        <div className="mt-10">
          <SuggestDish />
        </div>
      </div>

      <div>{/* show dishes list */}</div>
      <div className="mt-10">
        <p className="font-bold  border-b-2 w-fit pb-2">Quick Action</p>

        <div className="flex  mt-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <Link href={"/dishList"}> Browse All Dishes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
