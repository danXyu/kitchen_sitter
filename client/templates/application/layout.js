/* Layout: Helpers, defines necessary helpers for layout template. */
Template.layout.helpers({

  // Function: pageTitle, gets the value of 'pageTitle' from Session store.
  pageTitle: function () {
    return Session.get('pageTitle');
  }
});