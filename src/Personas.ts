export class Personas {
    nombre: string = "";
    apellido: string = "";
    edad: number = 0;
    apodo: boolean = true;
}

export class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    apodo: boolean;

    constructor(
        nombre1: string,
        apellido1: string,
        edad1: number,
        apodo1: boolean
    ) {
        this.nombre = nombre1;
        this.apellido = apellido1;
        this.edad = edad1;
        this.apodo = apodo1;
    }
}

export class Persona2 {
    private nombre2: string;
    private apellido2: string;
    private edad2: number;
    private apodo2: boolean;

    constructor(
        nombre2: string,
        apellido2: string,
        edad2: number,
        apodo2: boolean
    ) {
        this.nombre2 = nombre2;
        this.apellido2 = apellido2;
        this.edad2 = edad2;
        this.apodo2 = apodo2;
    }

    //Modificadores de acceso | Getters y Setters

    get nombre(): string {
        return this.nombre2;
    }
    set nombre(nuevoNombre: string) {
        this.nombre2 = nuevoNombre;
    } 
}