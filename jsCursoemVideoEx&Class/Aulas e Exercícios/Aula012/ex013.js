let agora = new Date()
let diaSemana = agora.getDay()

console.log(diaSemana)

if (diaSemana == 1){
    console.log('Hoje é segunda feira!')
}

switch(diaSemana){
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    default:
    console.log('Dia não cadastrado')
    break
}