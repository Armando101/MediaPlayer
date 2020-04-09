class Singleton {
	// instance es una variable que guarda la instancia de tipo Singleton
	private static instance: Singleton;

	// Es curioso pero en esta caso el constructor debe ser privado
	private constructor() {
		// inicialización
	}

	// Esta función nos permite hacer una instancia de la clase
	// Comunmente haríamos:
	// a = new Singleton;
	// En este caso si hacemos eso nos marcaría un error ya que el constructor es privado
	// En esta función se crea la instancia si no ha sido creada una antes
	// Aquí si podemos acceder al constructor ya que estamos dentro de la clase
	static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton;
		}

		return Singleton.instance;
	}
}

export default Singleton;