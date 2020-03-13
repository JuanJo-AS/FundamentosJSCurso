// control + k + c --> comentar
// control + k + u --> descomentar
//**********Clase 12
// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 28,
//     ingeniero: true,
//     cocinero: false,
//     cantante: false,
//     dj: false,
//     guitarrista: false,
//     drone: true
// }

// function imprimirProfesiones(persona)
// {
//     console.log(`${persona.nombre} es:`)
//     if(persona.ingeniero)
//         console.log('Ingeniero')
//     if(persona.cocinero)
//         console.log('cocinero')
//     if(persona.cantante)
//         console.log('Cantante')
//     if(persona.dj)
//         console.log('dj')
//         if(persona.guitarrista)
//         console.log('guitarrista')
//     if(persona.drone)
//         console.log('Piloto de dron')
// }

// imprimirProfesiones(juanjo)

// function imprimirSiEsMayorDeEdad(persona)
// {
//     if(persona.edad > 18)
//         console.log(`${persona.nombre} es mayor de edad`)
//     else
//         console.log(`${persona.nombre} no es mayor de edad`)
// }

// imprimirSiEsMayorDeEdad(juanjo)

//**********Clase 13
// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 28,
//     ingeniero: true,
//     cocinero: false,
//     cantante: false,
//     dj: false,
//     guitarrista: false,
//     drone: true
// }

// var juan = {
//     nombre: 'Juan',
//     apellido: 'Gomez',
//     edad: 13
// }

// const MAYORIA_DE_EDAD = 18

// function esMayorDeEdad(persona)
// {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// function imprimirSiEsMayorDeEdad(persona)
// {
//     if(esMayorDeEdad(persona))
//         console.log( `${persona.nombre} es mayor de edad` )
//     else
//         console.log( `${persona.nombre} no es mayor de edad` )
// }

// imprimirSiEsMayorDeEdad(juanjo)

//**********Clase 14
// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 28,
//     ingeniero: true,
//     cocinero: false,
//     cantante: false,
//     dj: false,
//     guitarrista: false,
//     drone: true
// }

// var juan = {
//     nombre: 'Juan',
//     apellido: 'Gomez',
//     edad: 13
// }

// const MAYORIA_DE_EDAD = 18

// //Funcion anonima ya que no tiene nombre
// // const esMayorDeEdad = function (persona)
// // {
// //     return persona.edad >= MAYORIA_DE_EDAD
// // }

// // const esMayorDeEdad = persona =>
// // {
// //     return persona.edad >= MAYORIA_DE_EDAD
// // }

// const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD


// const imprimirSiEsMayorDeEdad = persona =>
// {
//     if(!esMayorDeEdad(persona))
//         console.log( `${persona.nombre} no es mayor de edad` )
// }

// function permitirAcceso(persona)
// {
//     if(!esMayorDeEdad(persona))
//         console.log("ACCESO DENEGADO")
// }

// imprimirSiEsMayorDeEdad(juanjo)

// // **********Clase 15
// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 28,
//     peso: 50
// }

// console.log(`Al inicio del año ${juanjo.nombre} pesa ${juanjo.peso}kg`)

// const INCREMENTO_PESO = 0.2
// const DIAS_DEL_AÑO = 365

// const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
// const adelagazar = persona => persona.peso -= INCREMENTO_PESO

// for(var i = 1; i <= DIAS_DEL_AÑO; i++)
// {
//     var random = Math.random()

//     if(random < 0.25)
//         //Aumenta de peso
//         aumentarDePeso(juanjo)
//     else if (random < 0.5)
//         //Baja de peso
//         adelagazar(juanjo)

// }

// console.log(`Al final del año ${juanjo.nombre} pesa ${juanjo.peso.toFixed(1)}kg`)

// **********Clase 16
// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 28,
//     peso: 50
// }

// console.log(`Al inicio del año ${juanjo.nombre} pesa ${juanjo.peso}kg`)

// const INCREMENTO_PESO = 0.2
// const DIAS_DEL_AÑO = 365

// const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
// const adelagazar = persona => persona.peso -= INCREMENTO_PESO

// const META = juanjo.peso - 3
// const comeMucho = () => Math.random() < 0.3
// const realizaDeporte = () => Math.random() < 0.6
// var dias = 0
// while(juanjo.peso > META)
// {
//     if(comeMucho())
//         //Aumenta de peso
//         aumentarDePeso(juanjo)
//     if (realizaDeporte())
//         //Baja de peso
//         adelagazar(juanjo)
//     dias++
// }

// console.log(`${juanjo.nombre} tardo ${dias} en adelgazar 3kg`)

// **********Clase 17

// var contador = 0

// const llueve = () => Math.random() < 0.25

// do{
//     contador++
// }while(!llueve())

// console.log(`Fui a ver si llovia ${contador} ${contador > 1 ? "veces" : "vez"}`)

// **********Clase 18

var signo = prompt('¿Cual es tu signo?')

switch(signo)
{
    case "escorpio":
        alert("ey")
    default:
        break;
}
console.log(signo)
