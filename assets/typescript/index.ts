console.log("Hello, Typescript");

// Después del identificador de la variable coloco dos puntos para indicar el tipo de dato
function add(a: number, b: number) {
	return a + b;
}

// sum también será un number
const sum = add(2, 3);
console.log(sum);
console.log(typeof(sum));

//****************************************//
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