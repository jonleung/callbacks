var enterInput = document.getElementById('enterInput');

enterInput.onkeypress = function() {
  var ding = new Howl({urls: ['sounds/Ding.wav'] });
  ding.play();
}