Template.intro.onRendered = function () {
  alert("rendered");
  console.log("rendered");
  $(function(){
    $(".insert_typed").typed({
      strings: descriptions,
      typeSpeed: 0
    });
  });
};

Template.intro.helpers({
  'owner' : function () {
    return owner;
  }
});

Template.navigation.helpers({
  'owner' : function () {
    return owner;
  }
});
