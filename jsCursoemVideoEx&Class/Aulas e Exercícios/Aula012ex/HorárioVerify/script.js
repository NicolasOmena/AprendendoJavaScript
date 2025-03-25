

function carregar(){
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")
    let body = window.document.querySelector("body")
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    

    if (hora >= 3 && hora <=8) {
        img.src = "Imagens/ManhaOtimizada.png"
        msg.innerHTML = `São ${hora}:${min}, boa manhã!`
        body.style.background = "#DA7E42"
        
    }else if (hora > 8 && hora <= 12){
        img.src = "Imagens/DiaOtimizado.png"
        msg.innerHTML = `São ${hora}:${min} horas, bom dia!`
        body.style.background = "#7FA5DD"
        
    }else if (hora > 12 && hora <16 ){
        img.src = "Imagens/DiaOtimizado.png"
        msg.innerHTML = `São ${hora}:${min} horas, boa tarde!
        <br> Você já almoçou?`
        body.style.background = "yellow"
        //Boa tarde com imagem 2
    }else if (hora >= 16 && hora < 18){
        img.src = "Imagens/CrepusculoOtimizado.png"
        msg.innerHTML = `São ${hora}:${min} horas, boa tarde! 
        <br> Crepúsculo bonito não?`
        body.style.background = "#5C4A72"
        //Boa tarde
    }else if(hora >=18 && hora <= 24){
        img.src = "Imagens/NoiteOtimizada.png"
        msg.innerHTML = `Boa noite, são ${hora}:${min}.`
        body.style.background = "#283673"
        //Boa noite       
    }else{
        img.src = "Imagens/NoiteOtimizada.png"
        msg.innerHTML = `Boa Madrugada, saõ ${hora}:${min}.`
        body.style.background = "#000229"
    }
}

