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
    playPauseBtn.classList.remove('glyphicon-pause', 'btn-warning');
    playPauseBtn.classList.add('glyphicon-play', 'btn-success');
  } else {
    playPauseBtn.classList.remove('glyphicon-play', 'btn-success');
    playPauseBtn.classList.add('glyphicon-pause', 'btn-warning');
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
function mute() {audio.volume = 0;}

// Audio events
// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
var lastProgress;
audio.addEventListener('progress', function() {
  lastProgress = new Date();
  errorMsg.hide();
});
audio.addEventListener('stalled', function() {
  errorMsg.show();
  console.error(new Date().toLocaleString(), ' - audio stalled.')
});

function checkProgress() {
  // if time since progress event is too great (ms) and audio is not paused
  if (new Date() - lastProgress > 2000 && !audio.paused) errorMsg.show();
}
setInterval(checkProgress, 2000);

var errorMsg = {
  element: document.getElementById('errorMsg'),
  show: function() {
    this.element.classList.remove('hidden');
  },
  hide: function() {
    this.element.classList.add('hidden');
  }
}
