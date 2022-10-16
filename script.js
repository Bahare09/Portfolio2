// function play() {
//   var audio = document.getElementById("audio");
//   audio.play();
// }

function play() {
  var sound = document.getElementById("sound");
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    sound.classList.remove("fa-music");
    sound.classList.add("fa-pause");

  } else {
    audio.pause();
    audio.currentTime = 0;
    sound.classList.remove("fa-pause");
    sound.classList.add("fa-music");
  }
}