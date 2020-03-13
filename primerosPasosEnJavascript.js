// control + k + c --> comentar
// control + k + u --> descomentar
//**********Clase 5

// var edad = 27

// edad += 1

// var peso = 75

// peso -= 2

// var precioVino = 200.3

// var total = Math.round(precioVino * 3)/100 
// var totalStr = total.toFixed(2)

// var total2 = parseFloat(totalStr)

//**********Clase 6
// var nombre = 'Juanjo', edad = 21

// function imprimirEdad(n, e)
// {
//     console.log(`${n} tiene ${e} año/s`)
// }

// imprimirEdad(nombre, edad)
// imprimirEdad('Vicky', 28)

//**********Clase 7

// var nombre = 'Juanjo'

// function imprimirNombreEnMayusuclas(nombre)
// {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }

// imprimirNombreEnMayusuclas(nombre)

//**********Clase 8

// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 28
// }

// var dario = {
//     nombre: 'Dario',
//     apellido: 'Susnisky',
//     edad: 27
// }

// function imprimirNombreEnMayusuclas({ nombre })
// {
//     console.log(nombre.toUpperCase())
// }

// imprimirNombreEnMayusuclas(juanjo)
// imprimirNombreEnMayusuclas(dario)
// imprimirNombreEnMayusuclas({ nombre: 'Pepito' })

//**********Clase 9

// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 21
// }

// var dario = {
//     nombre: 'Dario',
//     apellido: 'Susnisky',
//     edad: 27
// }

// function imprimirNombreEnMayusuclas(persona)
// {
//     //var nombre = persona.nombre
//     var { nombre } = persona
//     console.log(nombre.toUpperCase())
// }

// imprimirNombreEnMayusuclas(juanjo)
// imprimirNombreEnMayusuclas(dario)
// //imprimirNombreEnMayusuclas({ nombre: 'Pepito' })

// function imprimirNombreYEdad({ nombre, edad })
// {
//     //Hola me llamo juanjo y tengo 21 años
//     console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
// }

// imprimirNombreYEdad(juanjo)

//**********Clase 10

// var juanjo = {
//     nombre: 'Juanjo',
//     apellido: 'Andrade',
//     edad: 21
// }

// imprimirNombreEnMayusuclas(juanjo)
// imprimirNombreEnMayusuclas(dario)

// function cumpleaños(persona)
// {
//     return {
//         ...persona,
//         edad: persona.edad + 1

//     }
// }


//**********Clase 11

var x = 4, y = '4'

var juanjo = {
    nombre: 'Juanjo'
}

var otraPersona = {
    ...juanjo
}