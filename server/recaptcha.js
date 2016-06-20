Meteor.startup(function() {
  reCAPTCHA.config({
    privatekey: Meteor.settings.private.recaptcha.secret
  });
});

Meteor.methods({
  getEmail: function(captchaData) {
    var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);

    if (!verifyCaptchaResponse.success) {
      console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
      throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
    } else {
      console.log('reCAPTCHA verification passed!');
    }

    return true;
  }
});
