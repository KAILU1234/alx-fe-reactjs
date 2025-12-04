import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Add New Recipe Button */}
      <div className="text-center mb-6">
        <Link
          to="/add-recipe"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors duration-300"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Recipe Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 block"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-base">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
