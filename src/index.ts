import { Personas, Persona, Persona2 } from "./Personas";

const persona1 = new Personas();

persona1.nombre = "Alejandro";
persona1.apellido = "Gonzalez";
persona1.edad = 20;
persona1.apodo = true;

console.log(persona1);

const persona = new Persona("Juan", "Perez", 98, false);

console.log(persona);

const persona2 = new Persona2("Juan", "Perez", 98, false);

console.log(persona2);