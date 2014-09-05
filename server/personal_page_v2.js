if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.work_experience.helpers({
    jobs: function() {
      var jobs = [
        {
          company: "Coursera",
          position: "Software Engineering Intern"
        },
        {
          company: "Sailthru",
          position: "Software Engineering Intern"
        }
      ];

      return jobs;
  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
