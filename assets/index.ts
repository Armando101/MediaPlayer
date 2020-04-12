import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const button: HTMLElement = document.querySelector('button');
const buttonMute: HTMLElement = document.getElementById('muteButton');

// Creamos la instancia del objeto MediaPlayer
const player = new MediaPlayer({el: video, plugins:[new AutoPlay, new AutoPause, new Ads]});

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