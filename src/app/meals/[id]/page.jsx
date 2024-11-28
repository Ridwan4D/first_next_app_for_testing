import Image from "next/image";
import React from "react";

const MealDetailsPage = async ({ params }) => {
  const { id } = params;

  // Fetch the meal data
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { meals } = await res.json();
  const meal = meals ? meals[0] : null;

  // Check if meal exists
  if (!meal) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-500">Meal not found!</p>
      </div>
    );
  }

  // Extract ingredients and measures conditionally
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();
    if (ingredient) {
      ingredients.push(`${measure ? `${measure} ` : ""}${ingredient}`);
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6">
        {/* Left Section: Image and Video */}
        <div>
          <Image
            width={800}
            height={800}
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-lg shadow-md w-full"
          />
          {meal.strYoutube && (
            <div className="mt-4">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline font-medium"
              >
                Watch Tutorial on YouTube
              </a>
            </div>
          )}
        </div>

        {/* Right Section: Meal Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{meal.strMeal}</h1>
          <p className="text-sm text-gray-500 mt-1">ID: {meal.idMeal}</p>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p>
              <strong>Area:</strong> {meal.strArea}
            </p>
            {meal.strTags && (
              <p>
                <strong>Tags:</strong> {meal.strTags.split(",").join(", ")}
              </p>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Instructions
            </h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {meal.strInstructions}
            </p>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {ingredients.length > 0 ? (
            ingredients.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-gray-700"
              >
                <span className="block w-2 h-2 rounded-full bg-green-500"></span>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <p>No ingredients available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MealDetailsPage;
