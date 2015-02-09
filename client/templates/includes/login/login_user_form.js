// Login Form Events
Template.loginUserForm.events({

  'submit #login-form' : function(e, t) {
    e.preventDefault();
    var email = trimInput(t.find('#login-email').value.toLowerCase())
      , password = t.find('#login-password').value;

    if (isNotEmpty(email, 'loginError')
        && isNotEmpty(password, 'loginError'))
    {
      Meteor.loginWithPassword(email, password, function(err){
        onLogin(err);
      });
    }

    return false;
  },

  'click #forgot-password' : function(e, t) {
    Session.set('formView', 'passwordRecoveryForm');
  },

  'click #create-account' : function(e, t) {
    Session.set('formView', 'createAccountForm');
  },

  'click a.google' : function(e, t){
    Meteor.loginWithGoogle(function(err){
      onLogin(err);
    });
  },

  'click a.facebook' : function(e, t){
    Meteor.loginWithFacebook(function(err){
     onLogin(err);
    });
  },

  'click a.twitter' : function(e, t){
    Meteor.loginWithTwitter(function(err){
      onLogin(err);
    });
  }

});

// Reset our Session variables when the template
// is destroyed.
Template.loginForm.destroyed = function(){
  Session.set('formView', null);
};