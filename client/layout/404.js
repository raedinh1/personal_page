Template.error404.rendered = function () {
  // Asynchronously load YoutTube IFrame API
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Mute video
  var player;

  onYouTubeIframeAPIReady = function () {
    console.log('called');
    player = new YT.Player('player404', {
      width: 1280,
      height: 720,
      videoId: '_hf6ke1-i3E',
      playerVars: {
        autoplay: 1,
        start: 90,
        controls: 0,
        loop: 1,
        showinfo: 0,
        autohide: 1
      },
      events : {
        'onReady': function(event) {
          event.target.mute();
        }
      }
    });
    console.log(player);
  };

  onPlayerReady = function (event) {
    console.log('player ready called');
    event.target.playVideo();
    player.mute();
  };
};
