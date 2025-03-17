const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const seekBar = document.getElementById('seek-bar');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

let isPlaying = false;

// Play/Pause functionality
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

// Update seek bar and time
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.value = progress;

  // Update current time
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

// Update duration
audio.addEventListener('loadedmetadata', () => {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  duration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

// Seek functionality
seekBar.addEventListener('input', () => {
  const seekTime = (seekBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});
