var a = window.document.getElementById('area');
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', hover)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Você Clicou!'
    a.style.background = 'red'
}

function hover() {
    a.innerText = 'Você entrou na área!'
    a.style.background = "rgb(0, 39, 5)"
}

function sair() {
    a.innerText = 'Você saiu da área!'
    a.style.background = "rgb(7, 82, 196)"
}


