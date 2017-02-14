'use strict';

var tacoIngredients = {tortillas: "1 dozen, small"}

function addIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount
  return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount
  return recipe;
}

function readRecipe(recipe) {
  for (var key in recipe) {
    debugger;
    return console.log("this recipe calls for " + recipe[key] + " of " + key);
  }
}
