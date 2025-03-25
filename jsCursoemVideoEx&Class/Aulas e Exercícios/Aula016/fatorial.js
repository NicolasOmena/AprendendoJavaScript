// 6! = 6*5*4*3*2*1


//recursividade
function fatupgrade(n){
   if (n == 1){
    return 1
   }else {
    return n * fatupgrade(n-1)
   }
}

let num = 6
console.log(`O fatorial de ${num} é ${fatupgrade(num)}`)

/*
function fatorial(n){
    let gordo = 1
    for(let c = n; c > 1; c--){
        gordo *= c
    }
    return gordo
}
let num = 6
console.log(`O fatorial de ${num} é ${fatorial(num)}`)
*/