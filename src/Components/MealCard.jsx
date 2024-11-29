import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div>
      <Link
        href={`/meals/${meal?.idMeal}`}
        key={meal?.idMeal}
        className="bg-white shadow-md max-w-96 rounded-lg overflow-hidden transition-transform transform hover:scale-105 block"
      >
        <div className="relative w-full max-h-96 h-auto">
                <Image
                  src={meal?.strMealThumb}
                  alt={meal?.strMeal}
                  width={500}
                  height={500}
                  className="rounded-t-lg w-full"
                />
              </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold truncate">{meal?.strMeal}</h2>
          <p className="text-sm text-gray-500 mb-2">
            Category: {meal?.strCategory}
          </p>
          <p className="text-sm text-gray-700 line-clamp-3">
            {meal?.strInstructions}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MealCard;
