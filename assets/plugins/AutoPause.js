class AutoPause {
	constructor() {
		this.threshold = 0.35;
		// Esta linea es importante para mantener el contexto de la función handleIntersection
		// De lo contrario no encontraria this.player
		this.handleIntersection = this.handleIntersection.bind(this);
		this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
		
		// Esta propiedad nos permite respetar las pausas
		// Si colocamos pausa y después nos cambiamos de tab y regresamos se pone play y no respeta la pausa
		this.pausedByVisibility = false;
	}
	run(player) {
		// Hacemos player una instancia de la clase

		this.player = player;
		// IntersectionObserver recibe dos argumentos, el primero es una función que recibe un anuncio de acuerdo a la intersección del elemento que se está observando(handler)
		// El segundo ese un objeot de configuración
		// Este archivo de configuración tiene un threshold que es el porcentaje de umbral que queremos para que nos avise el handler.
		// Si tengo más del 25% ocupando mi pantalla me avisará
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: this.threshold,
		});

		// nuestro objeto observer lo ponemos a observar
		// Observará el media
		observer.observe(this.player.media)
		
		// Escuchamos el envento visibilitychange
		// Este evento nos permitirá saber si el usuario cambio de pantalla
		document.addEventListener('visibilitychange', this.handleVisibilityChange);

	}

	// Cuando observer llame a handleIntersection le pasará una lista de entries
	// Los entries son objetos que estamos observando
	// En este caso sólo tenemos uno
	handleIntersection(entries) {
		const entry = entries[0];

		// Podemos observar en el navegador la propiedad intersectionRatio
		// Esta propiedad nos dice el porcentaje que el elemento ocupa en la pantalla al momento de que se activo el handler, es decir cuando nos avisó
		console.log(entry);

		const isVisible = entry.intersectionRatio >= this.threshold;
		if (isVisible) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}

	handleVisibilityChange() {
		const isVisible = document.visibilityState === "visible";

		if (isVisible) {
			if (this.pausedByVisibility) {
				this.player.play();
			}
		} else {
			if (!this.player.media.paused) {
				this.player.pause();			
				this.pausedByVisibility = true;
			} else {
				this.pausedByVisibility = false;
			}
		}
	}
}

export default AutoPause;