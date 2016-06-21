Template.Home.rendered = function () {
  $(function(){
    $(".insert_typed").typed({
      strings: typed_statements,
      typeSpeed: 20,
      backSpeed: -27,
      backDelay: 2000,
      cursorChar: '|',
      loop: true,
      showCursor: true
    });
  });
};

Template.myself.helpers({
  'owner' : function () {
    return owner;
  }
});

Template.navigation.helpers({
  'owner' : function () {
    return owner;
  },
  'is_project' : function () {
    var route = Router.current().route.getName();
    return route == 'projects';
  }
});

Template.recaptcha.helpers({
  'email': function () {
    return owner.email;
  }
});

Template.recaptcha.events({
  'submit .email_request_form': function () {
    event.preventDefault();

    var captchaData = grecaptcha.getResponse();

    Meteor.call('getEmail', captchaData, function(error, result) {
      grecaptcha.reset();

      if (error) {
        console.log('There was an error: ' + error.reason);
      } else {
        $("#requestEmailModal").modal('hide');  
        $("#displayEmailModal").modal();      
      }
    });
  }
});

