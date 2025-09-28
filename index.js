const songData = [
  {
    name: "Color Out",
    artist: "Alone",
    src: "Alone_-_Color_Out.mp3",
  },
  {
    name: "Do I",
    artist: "Leeona",
    src: "LEEONA_-_LEEONA_-_Do_I.mp3",
  },
  {
    name: "Radio Nowhere",
    artist: "Molotov Heart",
    src: "Molotov_Heart_-_radionowhere.mp3",
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

window.addEventListener("load", () => {
  loadSong(songIndex);
});

const loadSong = (index) => {
  coverName.textContent = songData[index].name;
  coverArtist.textContent = songData[index].artist;
  songName.textContent = songData[index].name;
  songArtist.textContent = songData[index].artist;
  audio.src = `music/${songData[index].src}`;
};

const playSong = () => {
  container.classList.add("pause");
  playPauseBtn.firstElementChild.className = "fa-solid fa-pause";
  audio.play();
  cover.classList.add("rotate");
};

const pauseSong = () => {
  container.classList.remove("pause");
  playPauseBtn.firstElementChild.className = "fa-solid fa-play";
  audio.pause();
  cover.classList.remove("rotate");
};

playPauseBtn.addEventListener("click", () => {
  if (container.classList.contains("pause")) {
    pauseSong();
  } else {
    playSong();
  }
});

const prevSongPlay = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songData.length - 1;
  }
  loadSong(songIndex);
  playSong();
};

const nextSongPlay = () => {
  songIndex++;
  if (songIndex > songData.length - 1) {
    songIndex = 0;
  }
  loadSong(songIndex);
  playSong();
};

prevBtn.addEventListener("click", prevSongPlay);
nextBtn.addEventListener("click", nextSongPlay);
