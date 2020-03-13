//************* Clase 23
//En Javascript se utilizan prototipos
//Constructor
// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.altura = altura
// }
// Persona.prototype.saludar = function () 
// {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
// Persona.prototype.soyAlto = function ()
// {
//     if(this.altura > 1.8)
//         console.log("Soy alto")
// }
// var juanjo = new Persona('Juanjo', 'Andrade')
// var erika = new Persona('Erika', 'Luna')
// var arturo = new Persona('Arturo', 'Martinez')
//************* Clase 24
//En Javascript se utilizan prototipos
// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.altura = altura
// }
// Persona.prototype.saludar = function () 
// {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
// Persona.prototype.soyAlto = function ()
// {
//     return this.altura > 1.8
// }
// var juanjo = new Persona('Juanjo', 'Andrade', 1.62)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez',1.89)
//************* Clase 26
//En Javascript se utilizan prototipos
// function heredaDe(prototipoHijo, prototipoPadre){
//     var fn = function () {}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }
// function Persona(nombre, apellido, altura) {
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.altura = altura
// }
// Persona.prototype.saludar = function () 
// {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
// Persona.prototype.soyAlto = function ()
// {
//     return this.altura > 1.8
// }
// function Desarrollador(nombre, apellido){
//     this.nombre = nombre,
//     this.apellido = apellido
// }
// heredaDe(Desarrollador, Persona)
// Desarrollador.prototype.saludar = function()
// {
//     console.log(`Hola, me llamo ${ this.nombre } ${this.apellido} y soy desarrollador/a`)
// }
// var juanjo = new Persona('Juanjo', 'Andrade', 1.62)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez',1.89)
//************* Clase 27
//En Javascript se utilizan prototipos
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

// var juanjo = new Persona('Juanjo', 'Andrade', 1.62)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez',1.89)