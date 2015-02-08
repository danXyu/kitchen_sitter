/* Publications: This file stores the various publications declared in the app, which includes the exposure
 * of underlying mongo stores for recipes, restaurants, notifcations, and users.
 */

Meteor.publish('recipes', function () {
  return Recipes.find();
});