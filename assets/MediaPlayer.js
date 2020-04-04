// Creamos una clase llamada MediaPlayer
function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

// Esta función ejecuta los plugins
MediaPlayer.prototype._initPlugins = function() {
	const player = {
		play: () => this.play,
		pause: () => this.pause,
		media: this.media,
		get muted() {
			return this.media.muted;
		},

		set muted(value) {
			this.media.muted = value;
		},
	};


	this.plugins.forEach(plugin => {
		// No podemos ejecutar plugin() porque no es un método, es una instancia, necesitamos ejecutar un método, en esta caso run()
		// ¿Por qué coloco this y no this.media?
		// La respuesta es porque le estoy pasando la instancia de MediaPlayer no el video en sí
		// Una vez pasandole la instancia se ejecutan los métodos mute y play
		// Dichos métodos no son de MediaPlayer.media, son de MediaPlayer
		// Cada método se encarga de llamar internamente a media
		plugin.run(this);
	})
}

// Si queremos agregar métodos, estos los tenemos que añadir a prototype
MediaPlayer.prototype.play  = function() {
  this.media.play()
}

MediaPlayer.prototype.pause = function () {
  this.media.pause()
}

MediaPlayer.prototype.paused = function () {
  // El atributo paused regresa un valor booleano dependiendo si está pausado el video o no
  return this.media.paused
}

MediaPlayer.prototype.mute = function () {
	this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
	this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function () {
	if(this.media.muted)
		this.media.muted = false;
	else
		this.media.muted = true;
}

export default MediaPlayer;