var idade = 66
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log(`Você não pode votar. `)
} else if (idade <18 || idade > 65) {
    console.log(`O seu voto é opcional`) 
} else {
    console.log(`Você é maior de idade, o seu voto é obrigatório`)
}
