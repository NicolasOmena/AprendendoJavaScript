let vetor = [76,7,3,4,1,22,55,69,58,47,12,32,54,66,97]
console.log(vetor)
console.log("Vamos organizar estes numeros!")

vetor.sort()

console.log(vetor)
console.log("Bem melhor!")

console.log(`O vetor tem ${vetor.length} posições`)
console.log(`O primeiro valor do Vetor é: ${vetor[0]}.`)

valor = 28

let pos66 = vetor.indexOf(valor)
if (pos66 == -1){
    console.log(`O valor ${valor} não foi encontrado`)
}else{
    console.log(`O número ${vetor[pos66]} está na posição ${pos66++}`)
}


/*for(let pos in vetor){
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}
*/

/*
let vetor = [1,3,4,22,55,69,58,47,12,32,54,66,97]
vetor[5] = 8
vetor.push(6)
console.log(vetor)
console.log(vetor[4])
*/
/*
let c = 0
let qntV = vetor.length
while(c < qntV){
    vetor.sort()
    console.log(`O vetor da ${c+1}° posição é : ${vetor[c]}`)
    c++
}
*/
   
/*let vetor = [1,3,4,22,55,69,58,47,12,32,54,66,97]

for(let posi=0; posi < vetor.length; posi++)
    console.log(`O item "${vetor[posi]}" do Array "Vetor" está na posição ${posi}`)
*/
    

/*let num = [3, 4, 6, 8, 9]
    console.log(num)
    num[5] = 0;
    num.push(9)
    console.log(num)
    console.log(`Seu vetor tem ${num.length} numeros`)
    console.log(`A primeira posição do seu Vetor é ${num[0]}`)
    num.sort()
    console.log(`Seu array foi organizado em ordem crescente! Agora ele está deste jeito: ${num}`)
    console.log(`A primeira posição do seu novo Vetor é ${num[0]}`)
    */