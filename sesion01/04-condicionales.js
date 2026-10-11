const edad = 20

if (edad >= 60) {
    console.log("Tu eres mayor edad")
} else if (edad >= 18) {
    console.log("Tu eres un adulto")
} else if (edad >= 5) {
    console.log("Eres un niño")
} else {
    console.log("Eres un infante")
}

const mensaje = edad >= 18 ? "Eres adulto" : "Eres menor de edad"
console.log(mensaje)

// const -> Primero usar
// let   -> Solo cuando necesitamos que la variable cambie su valor
// var   -> no usar