/* API: Pearson Kitchen Manager, implements the necessary api calls to the pearson kitchen manager
 * api in order to grab certain recipes and return them back to the user. This should only be defined
 * on the server, hence the necessary check for the meteor to be run on the server.
 */
if (Meteor.isServer) {

  // Run the query once in order to preload the mongo database with all recipes.
  var BASE_URL = "http://api.pearson.com:80/kitchen-manager/v1/recipes";

  Meteor.methods({

    /* Method: getRecipes, making an http GET request to the Pearson Kitchen Manager API to get
     * all of the recipes and returning them to the caller.
     */
    'getRecipes': function () {
      var result = HTTP.call("GET", BASE_URL, {query: "limit=500"});
      return result;
    }
  });
}