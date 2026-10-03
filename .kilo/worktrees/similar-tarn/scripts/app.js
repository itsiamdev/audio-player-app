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