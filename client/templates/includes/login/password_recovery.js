Template.passwordRecoveryForm.helpers({

  resetToken: function(){
    return Session.get('resetPassword');
  }

});

Template.passwordRecoveryForm.events({

  'submit #recovery-form' : function(e, t) {
      var email = trimInput(t.find('#recovery-email').value);
      if (isNotEmpty(email, 'recoveryError') && isEmail(email, 'recoveryError')) {
        Session.set('loading', true);
        Accounts.forgotPassword({email: email}, function(err){
        if (err)
          Session.set('displayMessage', 'Password Reset Error & ' + err.reason);
        else {
          Session.set('displayMessage', 'Email Sent & Please check your email to reset your password.');
          Session.set('passwordView', null);
          Router.navigate('');
        }
        Session.set('loading', false);
      });
      }
      return false;
    },

    'submit #new-password' : function(e, t) {
      var pw = t.find('#new-password-password').value;
      if (isNotEmpty(pw) && isValidPassword(pw)) {
        Session.set('loading', true);
        Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
          if (err)
            Session.set('displayMessage', 'Password Reset Error & '+ err.reason);
          else {
            Session.set('currentView', 'library');
            Session.set('resetPassword', null);
            Router.navigate('library');
          }
          Session.set('loading', false);
        });
      }
    return false;
    }
});