/* Fixtures: This file will run the initial call to load all of the Pearson Kitchen Manager's recipes
 * into the mongo database for quick access. This will run only upon meteor startup for the server,
 * which refers to when the application is initially deployed.
 */
if (Meteor.isServer) {
  Meteor.startup(function () {

    // Only load recipes into the Recipes database if it hasn't yet been loaded.
    if (Recipes.find().count() === 0) {

      /* Meteor Call: getRecipes, calls the Pearson Kitchen Manager API in order to get
       * all of the manager's 500 availabel recipes, then storing all of those recipes in
       * the recipes mongo database for quicker, easier access.
       */
      Meteor.call('getRecipes', function (error, result) {
        var recipes = result.data.results;

        for(var i = 0; i < recipes.length; i++) {
          Recipes.insert({
            name: recipes[i].name,
            recipeId: recipes[i].id,
            recipeUrl: recipes[i].url,
            cuisine: recipes[i].cuisine,
            cookingMethod: recipes[i].cooking_method,
            ingredients: recipes[i].ingredients,
            image: recipes[i].image,
            thumb: recipes[i].thumb
          });
        }
      });
    }
  });
}