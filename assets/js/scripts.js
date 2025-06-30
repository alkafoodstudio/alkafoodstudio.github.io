function filterRecipes(category) {
  const recipes = document.querySelectorAll('.recipe-card');
  recipes.forEach(recipe => {
    if (category === 'all' || recipe.classList.contains(category)) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });
}

window.onload = function () {
  filterRecipes('all');
};
