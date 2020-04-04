import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('button');
const buttonMute = document.getElementById('muteButton');

// Creamos la instancia del objeto MediaPlayer
const player = new MediaPlayer({el: video, plugins:[new AutoPlay]});

// HTML media element tiene un método llamado play
button.onclick = () => {
  // Si el video esta pausado que lo reproduzca, si no está pausado, que lo pause.
  player.paused() ? player.play():player.pause() 

// console.log(player.paused())
}

buttonMute.onclick = () => {
  player.toggleMute();
}