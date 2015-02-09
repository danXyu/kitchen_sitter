/* Template Events: Specifically for user creation, allows the function to grab the parameters
 * in the form, parsing for email and password, which are then passed into the meteor Accounts
 * package to create a new user. Validation of email and password occur in between the steps of
 * grabbing the parameters and creating the user.
 */
Template.createAccountForm.events({

  /* Event: 'submit #register-form' => user creation */
  'submit #register-form': function (event, options) {
    var email = trimInput(options.find('#account-email').value.toLowerCase());
    var password = options.find('#account-password').value;

    if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && isValidPassword(password)) {
      Accounts.createUser({email: email, password : password}, function(err){
        if (err && err.error === 403) {
          Session.set('displayMessage', 'Account Creation Error &' + err.reason);
        } else {
          if (Session.get('createProjectFlow')) createProject();
          Session.set('overlay', null);
        }
      });
    }
    return false;
  }

});