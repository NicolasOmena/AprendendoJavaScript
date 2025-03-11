function verificar(){
    var data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector("div#res");

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] cheque as informações e tente novamente');

    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let gênero = '';
        res.innerHTML = `Idade Calculada: ${idade}`;

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/BebeH.png')
            }else if (idade >= 10 && idade <16){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/CriancaH.png')
                //Criança
            }else if (idade <30){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/JovemH.png')
                //Jovem
            }else if (idade <54){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/AdultoH.png')
                //Adulto meia idade
            }else{
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/IdosoH.png')
                //Veio
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/BebeH.png')
            }else if (idade >= 10 && idade <16){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/CriancaH.png')
                //Criança
            }else if (idade <30){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/JovemH.png')
                //Jovem
            }else if (idade <54){
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/AdultoH.png')
                //Adulto meia idade
            }else{
                img.setAttribute('src', 'IdadeVerify/ImagensPessoas/IdosoH.png');
                //Veio
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    
}
}