
//Fazendo sozinho e comentando erros depois
function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
//Pegar o valor com número, quase esqueci
    n = Number(num.value)
    c = 1
//agora os If e else.. começar com o caso não tenha numero
    if (n == 0){ //sinto que ta errado
        window.alert('Digite um numero para começar')
        tab.innerHTML = ''

    }else{
           //quase esqueci do while kkk
           while(c < 10){
            //esqueci como criava o elemento tive que pescar
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`

        }
    }

}



//Funcionou!!























































/*function gerar (){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número.')
    }else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }   
    }
}*/