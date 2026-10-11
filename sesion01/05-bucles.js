const limite = 20

console.log("BUCLE FOR")
for (let numero = 0; numero < limite; numero++) {
    if (numero % 2 === 1) {
        console.log("Es impar")
        continue
    }
    if (numero === 14) {
        break
    }

    console.log(numero)
}

console.log("BUCLE WHILE")
let contador = 0
while (contador < 20) {
    if (contador % 2 === 1) {
        console.log("Es impar")
        contador++
        continue
    }
    if (contador === 14) {
        break
    }
    console.log(contador)
    contador++
}
