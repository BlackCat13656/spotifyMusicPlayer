const songData = [
  {
    name: "Color Out",
    artist: "Alone",
    src: "Color Out - Alone.mp3",
  },
  {
    name: "Do I",
    artist: "Leeona",
    src: "Do I - Leeona.mp3",
  },
  {
    name: "Radio Nowhere",
    artist: "Molotov Heart",
    src: "Radio Nowhere - Molotov Heart.mp3",
  },
];

const container = document.querySelector(".container");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const cover = document.querySelector(".cover");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio");
const songTime = document.querySelector(".song-time");
const songProgress = document.querySelector(".song-progress");
const coverName = document.querySelector(".cover span:nth-child(2)");
const coverArtist = document.querySelector(".cover span:nth-child(1)");

let songIndex = 0;

window.addEventListener("Load", () => {
  loadSong(songIndex);
});

const loadSong = (index) => {
  coverName.textContent = songData[index].name;
  coverArtist.textContent = songData[index].artist;
  songName.textContent = songData[index].name;
  songArtist.textContent = songData[index].artist;
  audio.src = `music/${songData[index].src}.mp3`;
};
