// Creamos una clase llamada MediaPlayer
function MediaPlayer(config) {
  this.media = config.el;
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

export default MediaPlayer;