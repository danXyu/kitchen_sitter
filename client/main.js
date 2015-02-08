/* Meteor Startup Code: Code to run upon startup of the meteor client. This will only run once but allows
 * for important application-related data to be configured.
 */
if (Meteor.isClient) {
  Meteor.startup(function () {

    // Set the Session's pageTitle to 'Kitchen Sitter' upon meteor startup.
    Session.set('pageTitle', 'Kitchen Sitter');
  });
}