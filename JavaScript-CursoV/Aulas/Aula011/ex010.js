/* Pegar a velocidade do input da caixa de imput
adicionar o limite máximo 
criar uma função que analise se a velocidade está mais alta que o permitido
se a velocidade estiver mais alta deixar caixa de diálogo vermelha e letras brancas
Se não, dedixar caixa verde e parabenizar
*/



function verificar() {
    var caixa = window.document.getElementById(txtv);
    var velocidade = Number(caixa.value)
    var res = window.document.getElementById(res)
    res.innerHTML = `Sua velocidade atual é de ${vel}`
    if (vel > 60) {
        
    }
}