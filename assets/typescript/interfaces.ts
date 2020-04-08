// Interfaces
// Las interfaces nos permiten declarar la forma que tiene un objeto, esto nos ayuda en el autocompletado

enum Color {
	Rojo = "Rojo", 
	Verde = "Verde",
	Azul = "Azul"
}

interface Rectangulo {
	ancho: number,
	alto: number,
	color: Color;
}

// Si me falta un parámetro por definir marcará error
let rect: Rectangulo = {
	ancho: 4,
	alto: 6,
	color: Color.Rojo;
}

console.log(rect);


function area(r: Rectangulo) {
	return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);


rect.toString = function () {
	return this.color ? `Un rectangulo ${this.color}`: `Un rectangulo`;
}

console.log(rect.toString());