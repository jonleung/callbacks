var enterInput = document.getElementById('enterInput');
var soundFileInput = document.getElementById('sound');

enterInput.onkeypress = function() {
  var soundFile = soundFileInput.value;
  var soundFilePath = 'sounds/' + soundFile;
  var sound = new Howl({urls: [soundFilePath] });
  sound.play();
}