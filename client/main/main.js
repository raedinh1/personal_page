Template.intro.onRendered = function () {
  alert("rendered");
  $(function(){
    $(".element").typed({
      strings: ["study Computer Science at Columbia.", "am a Managing Partner at Dorm Room Fund", "will be an Associate Product Manager at Google", "build tech communities at ADI"],
      typeSpeed: 0
    });
  });
};
