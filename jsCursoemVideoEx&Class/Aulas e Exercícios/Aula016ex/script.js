
let num = document.getElementById(num)
let adc = document.getElementById(adicionar)
let fin = document.getElementById(finalizar)
let tab = document.getElementById(tab)

function adci(){
    numero = Number(num.value)
    tab.innerHTML = ""
    if(numero == 0 || numero > 100){
        window.alert("Adicione um numero de 1 a 100.")
    }else{
        item = document.createElement('option')
        item.text = `numero`
    }
}












































/*
Adicionar numeros de 1 a 100 na lista
Os números não podem se repetir
Caso não haja número indicar um alerta
adicionar um botã de finalizar para analisar os números
Analisar:
O total de numeros
O maior valor informado
A Soma dos numeros
A média dos numeros
*/
