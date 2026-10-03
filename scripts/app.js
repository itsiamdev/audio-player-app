const openFileBtn = document.getElementById('openFile');
const playPauseBtn = document.getElementById('playPause');
const timeDisplay = document.getElementById('time');

let audio = new Audio();
let isPlaying = false;

openFileBtn.addEventListener('click', async () => {
    const filePath = await window.electronAPI.openFile();
    if(filePath){
        audio.src = filePath;
        audio.load();
        playPauseBtn.disabled = false;
        timeDisplay.textContent = '00:00 / 00:00';
    }
});

playPauseBtn.addEventListener('click', () => {
    if(isPlaying){
        audio.pause();
    } else {
        audio.play();
    }
});

audio.addEventListener('play', () => {
    isPlaying = true;
    playPauseBtn.textContent = 'Pause';
});

audio.addEventListener('pause', () => {
    isPlaying = false;
    playPauseBtn.textContent = 'Play';
});

audio.addEventListener('timeupdate', () => {
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
