var idade = 65
if (idade < 16) {
    console.log(`Você tem ${idade} anos, você nao tem idade para votar`)}
else if (idade < 18) {
    console.log(`Você tem ${idade} anos,  seu voto é opcional`)
}
else if (idade < 65) {
    console.log(`Você tem ${idade} anos, seu voto é obrigatorio`)
}
else {
    console.log(`Você tem ${idade} anos, seu voto é opcional`)
}