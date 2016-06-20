Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: Meteor.settings.public.recaptcha.key,
    });
});
