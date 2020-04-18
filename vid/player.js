var vidPlayer = document.getElementById("vp");

function reset() {
  vidPlayer.currentTime = 0;
  vidPlayer.pause();
  document.activeElement.blur();
}
