import Singleton from './Singleton'

const a = Singleton.getInstance()
const b = Singleton.getInstance()

// Con esto comprbamos que si creamos dos instancias en realidad son las mismas
console.log("A es igual a B?", a===b);