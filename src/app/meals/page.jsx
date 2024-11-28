import SearchMeals from "@/Components/SearchMeals";
import React from "react";

const MealPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Find Your Favorite Meal
        </h2>
        <SearchMeals />
      </div>
    </div>
  );
};

export default MealPage;
