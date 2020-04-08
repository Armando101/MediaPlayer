console.log("Hello, Typescript");
// Tipos de datos comunes

// Boolean
let muted: boolean = true;
muted = false;

//muted = "off"; // No podemos hacer esto
console.log(muted);

// Números
let age = 6;

let numerador: number = 42;
let denominador: number = age;
let resultado = numerador/denominador;

console.log(resultado);

// Strings
let nombre: string = 'Armando';
let saludo = `Me llamo ${nombre}`;

console.log(saludo);

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];

// people.push(9000); // Esto es inválid

console.log(people);

// Si quiero incluir más de un tipo de dato
let peopleAndNumbers: Array< string | number > = [];

peopleAndNumbers.push('Armando');
peopleAndNumbers.push(9000);

console.log(peopleAndNumbers);

//Enum
enum Color {
	Rojo = "Rojo", 
	Verde = "Verde",
	Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;

console.log(`Mi color favorito es ${colorFavorito}`);

// Any
// Any permite que una valiable pueda cambiar de tipo
let comodin: any = "Joker";
comodin = { type: "Wildcard" };
console.log(comodin);

// Object
let someObject : object = {}
console.log(someObject);

//****************************************//

// Funciones 

// Después del identificador de la variable coloco dos puntos para indicar el tipo de dato
// Le indico después de los paréntesis que el valor de retorno será un number
function add(a: number, b: number): number {
	return a + b;
}

// sum también será un number
const sum = add(2, 3);
console.log(sum);
console.log(typeof(sum));

// Una función puede regresar una función

// Indica que recibe un number y devuelve un number
// (number) => number
function createAdder(a: number): (number) => number {
	return function (b: number) {
		return b + a;
	}
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

console.log(addFour);
console.log(fourPlus6);

// Para indicar que un número sea opcional colco un signo de interrogación, en este caso puede ser undefined o string
// lastName?: string

// Si no queremos un valor undefined sino uno por omisión colocamos despúes del tipo de dato colocamos el valor por default
// lastName: string = ''
function fullName(firstName: string, lastName: string = ''): string {
	return `${firstName} ${lastName}`;
}

const richard = fullName('Armando');

console.log(richard);