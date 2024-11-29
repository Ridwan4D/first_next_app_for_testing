import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div>
      <div className="card bg-base-100 w-auto shadow-xl">
        <figure>
          <Image
            src={meal?.strMealThumb}
            alt={meal?.strMealThumb}
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{meal?.strMeal}</h2>
          <p>{meal?.strInstructions.slice(0, 60)}</p>
          <div className="card-actions justify-end">
            <Link href={`/meals/${meal?.idMeal}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
