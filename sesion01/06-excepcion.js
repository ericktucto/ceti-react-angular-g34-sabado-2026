//const noexisto = true

try {
    console.log(noexisto)
} catch (e) {
    console.log("Existe un error")
} finally {
    console.log("Yo siempre me ejecuto")
}



let spinner = true

try {
    // codigo que tal vez falle
} catch (e) {
    console.log("hubo un error")
} finally {
    spinner = false
}