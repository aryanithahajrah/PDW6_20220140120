const coverEl = document.getElementById('cover');
const musicTitleEl = document.getElementById('music_title');
const musicArtistEl = document.getElementById('music_artist');
const currentTimeEl = document.getElementById('current_time');
const durationEl = document.getElementById('duration');
const playBtn = document.querySelector('.play');
const audioPlayer = document.querySelector('.song_track');
const bgVideo = document.getElementById('bg_video');

const song = {
    path: "assets/music.mp3",
    displayName: "Meant It",
    cover: "assets/1.jpeg",
    artist: "Lauv & LANY"
};

audioPlayer.src = song.path;
coverEl.src = song.cover;
musicTitleEl.textContent = song.displayName;
musicArtistEl.textContent = song.artist;

let isPlaying = false;

function playMusic() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        audioPlayer.play();
        bgVideo.play();
        isPlaying = true;
    }
}

function pauseMusic() {
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    audioPlayer.pause();
    bgVideo.pause();
    isPlaying = false;
}

audioPlayer.addEventListener('timeupdate', updateProgress);

function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
