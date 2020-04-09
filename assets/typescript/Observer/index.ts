interface Observer {
	update: (data: any) => void;
}

interface Subject {
	subsribe: (observer: Observer) => void;
	unsubsribe: (observer: Observer) => void;
}

// Esta clase simulará newsletter
// Esta clase guardará los subscriptores
class BitcoinPrice implements Subject {
	// Arraglo de Observadores
	observers: Observer[] = [];

	// En el constructor declaramos un elemento de HTML
	// Este elemento estará a la escucha de algún cambio
	// Si hay un cambio se ejecutará la función notify y le pasamos el nuevo valor
	constructor() {
		const el: HTMLElement = document.querySelector("#value");
		el.addEventListener('input', ()=> {
			this.notify(el.value);
		})
	}

	// Agrego un subscriptor a mi lista
	subscribe(observer: Observer) {
		this.observers.push(observer);
	}

	// Quito un subscriptor
	unsubsribe(observer: Observer) {
		// findIndex itera sobre los elementos de observers
		// Regreso el valor que coincida con el deseado
		const index = this.observers.findIndex(obs => {
			return obs === observer;
		});

		// splice recibe el index que queremos sacar y apartir de ahí cuántos elementos quiero sacar
		this.observers.splice(index, 1);
	}

	// Esta función iterará sobre el array de subscriptores
	// Llamará la función update de cada uno y le pasará el valor nuevo
	notify(data: any) {
		this.observers.forEach(obs => obs.update(data));
	}

}

// Esta clase se encargará de cambiar el valor de #price
class PriceDisplay implements Observer {
	// Declaro un elemento privado de tipo HTML
	private el: HTMLElement;

	// Asigno un valor a la propiedad el
	constructor() {
		this.el = document.querySelector("#price");
	}

	// Actualizo el valor data
	update(data: any) {
		this.el.innerText = data;
	}
}

// Declaro una nueva lista de subscriptores
const value = new BitcoinPrice();

// Declaro un usuario
const display = new PriceDisplay();

// Agrego al usuario a mi lista
value.subscribe(display);

// Quito al usuario de mi lista después de 5 segundos
setTimeout(() => value.unsubsribe(display), 5000);
