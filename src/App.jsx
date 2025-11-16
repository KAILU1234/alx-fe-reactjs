// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '20px 0' }} />
      <RecipeList />
    </div>
  );
}

export default App;
