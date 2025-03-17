const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const songTitle = document.getElementById('song-title');

let isPlaying = false;

function playSong(songFile, title) {
  audio.src = songFile;
  songTitle.textContent = title;
  audio.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
});
