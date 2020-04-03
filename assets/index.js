import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector('video')
const button = document.querySelector('button')

// Creamos la instancia del objeto MediaPlayer
const player = new MediaPlayer({el: video});

// HTML media element tiene un método llamado play
button.onclick = () => {
  // Si el video esta pausado que lo reproduzca, si no está pausado, que lo pause.
  player.paused() ? player.play():player.pause() 

// console.log(player.paused())
}