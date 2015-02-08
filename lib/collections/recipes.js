/* MongoDB Collection: Recipes, stores the user's starred recipes, that is, after having
 * searched and queried the Pearson Kitchen Manager API for recipes. In a way, this will
 * contain the user's 'favorite' recipes. Will add a recipe to the database with the userID
 * as a reference back to the user.
 */

Recipes = new Mongo.Collection('recipes');