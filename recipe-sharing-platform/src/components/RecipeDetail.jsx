import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-8">Recipe not found.</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="mx-auto w-72 h-72 rounded-lg shadow-lg mb-6" />
      <h2 className="text-2xl font-semibold mb-2">Summary</h2>
      <p className="text-gray-700 mb-4">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Preparation Steps</h2>
      <ol className="list-decimal list-inside">
        {recipe.steps?.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
