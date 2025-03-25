function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    }else {
        return 'Impar'
    }
}
//É necessário de uma chamada

let num = 6598742321
let resto = parimpar(num)
console.log(`O número ${num} é ${resto}!`)

// hehe funcionou agora vamos para a aula