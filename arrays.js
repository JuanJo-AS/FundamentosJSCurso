// **********Clase 19
// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     altura: 1.62
// }

// var paula = {
//     nombre: 'Paula',
//     apellido: 'Barros',
//     altura: 1.76
// }

// var personas = [juanjo, paula]

// for(var i = 0; i < personas.length; i++)
// {
//     var persona = personas[i];
//     console.log(`${persona.nombre} mide ${persona.altura}m`);
// }

// **********Clase 20

// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     altura: 1.62
// }

// var viky = {
//     nombre: 'Viky',
//     apellido: 'Zapata',
//     altura: 1.56
// }

// var paula = {
//     nombre: 'Paula',
//     apellido: 'Barros',
//     altura: 1.76
// }

// var personas = [juanjo, viky, paula]

// const esAlta = ({ altura }) => altura > 1.6
// const esBaja = ({ altura }) => altura <= 1.6

// //var personasAltas = personas.filter( persona => persona.altura > 1.6 )

// var personasAltas = personas.filter( esAlta )

// console.log(personasAltas)

// **********Clase 21

// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     altura: 1.62
// }

// var viky = {
//     nombre: 'Viky',
//     apellido: 'Zapata',
//     altura: 1.56
// }

// var paula = {
//     nombre: 'Paula',
//     apellido: 'Barros',
//     altura: 1.76
// }

// var personas = [juanjo, viky, paula]

// const esAlta = ({ altura }) => altura > 1.6
// const esBaja = ({ altura }) => altura <= 1.6

// //var personasAltas = personas.filter( persona => persona.altura > 1.6 )

// var personasAltas = personas.filter( esAlta )

// const pasarAlturaACms = persona => 
// ({
//     ...persona,
//     altura: persona.altura *= 100
// })


// var personasCms = personas.map(pasarAlturaACms)

// console.log(personasCms)

// **********Clase 22

var juanjo = {
    nombre: 'Juanjo',
    apellido: 'Andrade',
    altura: 1.62,
    cantidadLibros: 20
}

var viky = {
    nombre: 'Viky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadLibros: 15
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadLibros: 10
}

var personas = [juanjo, viky, paula]

const reducer = (acum, { cantidadLibros }) => acum += cantidadLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)