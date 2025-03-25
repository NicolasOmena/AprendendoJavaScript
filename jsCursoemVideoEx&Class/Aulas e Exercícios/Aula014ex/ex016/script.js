


// Serio programação é legal demais (*^ -^)

function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('Fim')
    let pass = document.getElementById('Passos')
    let res = document.getElementById('resultado')

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
            // Ocorrendo Inçamento de acordo com oo Guanabara.. vou procurar saber o que é
        window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        //let textocont = res.innerHTML += `${i} \u{1F449} `

        if(p <= 0){
            window.alert('Passo Inválido! COndiseranto passo 1')
            p = 1

        }

        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p ){
            //for(let c = i; c <= f; c += p ){
                
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else{
            for(let c = i; c >= f; c -= p){
                
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}







/*

Codigo que testei, talvez não tenha funcionado pois não coloquei para ativar
a função click no HTML.. achei qu eo problema tava no JavaSscript kkk.. talvez esteja também.
24/03/2025

let inicio = window.document.getElementById('inicio')
let fim = window.document.getElementById('Fim')
let passos = window.document.getElementById('Passos')

let resultado = window.document.getElementById('resultado')

let num1 = Number(inicio.value)
let num2 = Number(fim.value)
let distancia = Number(passos.value)
let numpassos = distancia / passos.value

let valor = num2 - num1

    if (distancia<=0 ){
        resultado.textContent = ("Você não pode dar nenhum passo.")


    }else {
        resultado.textContent = ""
        while(num1 < num2)

         //----OBSERVAÇÃO-----//
         //Aqui eu em vez de colocar o sinal de ponto e vírgula coloquei vírgulas ";" =/ ","//

       // while(num1, num1 < num2, num1+passos.value)
            resultado.textContent += `${num1}`
        num1 += distancia
        
    }

    document.getElementById('botao').addEventListener('click', contar)

     Valor final - Inicial
    Somar valor inicial + num de passoa até chegar no valor final
    criando um novo texto um embaico do outro
    Resultado dividido pelos passos
    */