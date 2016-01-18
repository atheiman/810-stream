// Audio JS
var audio = document.getElementsByTagName('audio')[0];

// Audio play/pause
function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  setPlayPauseIcon();
}
function setPlayPauseIcon() {
  var playPauseBtn = document.getElementById('playPauseBtn');
  if (audio.paused) {
    playPauseBtn.classList.remove("glyphicon-pause");
    playPauseBtn.classList.add("glyphicon-play");
  } else {
    playPauseBtn.classList.remove("glyphicon-play");
    playPauseBtn.classList.add("glyphicon-pause");
  }
}
// repeatedly set the play pause icon in case it gets messed up
setInterval(setPlayPauseIcon, 500);

// Audio volume
audio.volume = .5;
function changeVol(upOrDown) {
  if (upOrDown === 'up' && audio.volume !== 1) { audio.volume += .1; }
  if (upOrDown === 'down' && audio.volume !== 0) { audio.volume -= .1; }
  audio.volume = Math.round(audio.volume * 100) / 100
}
function mute() { audio.volume = 0; }
