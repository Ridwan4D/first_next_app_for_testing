"use client";
import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const SearchMeals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [err, setErr] = useState("");

  // Function to load meals based on the search term
  const loadMeals = async () => {
    if (!search?.trim()) {
      setMeals([]);
      return;
    }
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
    const data = await res.json();

    if (data.meals == "no data found") {
      setErr("Meal Not Found");
    } else {
      setErr(""); // Clear error message
      setMeals(data.meals);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  useEffect(() => {
    if (search.trim()) {
      loadMeals();
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Search Meals</h1>

      {/* Search input */}
      <form
        className="flex gap-x-2 w-full max-w-md mb-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter meal name"
          name="search"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </form>

      {err && <p className="text-red-500">{err}</p>}

      {meals.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
          {meals?.map((meal,idx) => (
            <MealCard key={idx} meal={meal}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMeals;
