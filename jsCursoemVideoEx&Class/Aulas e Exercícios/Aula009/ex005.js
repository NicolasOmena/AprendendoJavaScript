window.document.write(window.document.URL + "<br>");
// Como seleciona por Marga getElementsByTagName()
var p1 = window.document.getElementsByTagName('p')['1']

window.document.write(p1.innerText + "<br>");
var corpo = window.document.body

corpo.style.background = 'cyan'

document.write(p1.innerHTML)

/*Conseguir o elemndo por uma DIv, getElementsById


d.style.background = 'grey'
d.innerText = 'Estou no seu aguardo...'
*/
var f = window.document.getElementById('msg')
var d = window.document.querySelector('div#msg')
var e = window.document.querySelector('div.mensagem')

d.style.background = 'grey'
e.style.background = 'blue'

