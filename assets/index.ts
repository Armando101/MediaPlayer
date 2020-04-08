import MediaPlayer from './MediaPlayer.ts'
import AutoPlay from './plugins/AutoPlay.ts';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector('video');
const button: HTMLElement = document.querySelector('button');
const buttonMute: HTMLElement = document.getElementById('muteButton');

// Creamos la instancia del objeto MediaPlayer
const player = new MediaPlayer({el: video, plugins:[new AutoPlay, new AutoPause]});

// HTML media element tiene un método llamado play
button.onclick = () => {
  // Si el video esta pausado que lo reproduzca, si no está pausado, que lo pause.
  player.togglePlay(); 

// console.log(player.paused())
}

buttonMute.onclick = () => {
  player.toggleMute();
}

if ('servicwWorker' in navigator) {
	navigator.servicwWorker.register('/sw.js').catch(error => {
		console.log(error.message);
	});
}