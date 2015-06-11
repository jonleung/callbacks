var enterInput = document.getElementById('enterInput');

enterInput.onkeypress = function() {
  var ding = new Howl({urls: ['sounds/5.wav'] });
  ding.play();
}