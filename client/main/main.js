Template.intro.onRendered = function () {
  alert("rendered");
  console.log("rendered");
  $(function(){
    $(".insert_typed").typed({
      strings: ["studied Computer Science at Columbia", "was a Managing Partner at Dorm Room Fund", "will be an Associate Product Manager at Google"],
      typeSpeed: 0
    });
  });
};

Template.navigation.helpers({
  'owner' : function () {
    return owner;
  }
});
