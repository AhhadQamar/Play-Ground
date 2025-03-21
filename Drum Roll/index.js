const totalDrums = document.querySelectorAll(".drum").length;
const soundMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

for (let i = 0; i < totalDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (event) => {
    const key = event.target.innerHTML;
    playSound(key);
    animation(key);
  });
}

document.addEventListener("keypress", (event) => {
  const key = event.key;
  animation(key);
  playSound(key);
});

function playSound(key) {
  const soundPath = soundMap[key];

  const audio = new Audio(soundPath);
  audio.play();
}
function animation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + key).classList.remove("pressed"), 100;
  });
}
