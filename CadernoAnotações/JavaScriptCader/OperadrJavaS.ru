
Esse é um arquivo de anotações sobre JavaScript

Operadores no JavaScript

##__Aritméticos__##
    + Adição     == 5 + 2  : 7 (O sinal de + é usado para adição)
    - Subtração == 5 - 2  : 3   (O traço é usado para subtração)
    * Multiplicação == 5 * 2  : 10  (O asterisco é usado para multiplicação)
    / Divisão   == 5 / 2  : 2.5 (O resultado é um número decimal)
    ** Potenciação == 5 ** 2  : 25  (5 elevado a 2)
    % Resto da divisão  == 5 % 2  : 1 ( O resto da divisão de 5 por 2 é 1)
    ++ Incremento   == 5++  : 6    -- Decremento   == 5--  : 4 ( O valor é incrementado depois de ser atribuido)
    ++ Incremento   == ++5  : 6    -- Decremento   == --5  : 4 ( O valor é incrementado antes de ser atribuido)
    
##__Atribuição__##
    = Atribuição == var x = 5 ( O sinal de igual é usado para atribuição)
    += Soma e Atribui == x += 5 // x = x + 5 ( O valor de x é incrementado em 5)
    -= Subtrai e Atribui == x -= 5 // x = x - 5 ( O valor de x é decrementado em 5)
    *= Multiplica e Atribui == x *= 5 // x = x * 5 ( O valor de x é multiplicado por 5)
    /= Divide e Atribui == x /= 5 // x = x / 5 ( O valor de x é dividido por 5)
    %= Resto e Atribui == x %= 5 // x = x % 5 ( O valor de x é dividido por 5 e o resto é atribuido a x)

##__Relacionais__##
    > Maior que         == 5 > 2  : true    (O sinal de maior que é usado para verificar se o valor da esquerda é maior que o da direita)
    < Menor que         == 7 < 4  : false   (O sinal de menor que é usado para verificar se o valor da esquerda é menor que o da direita)
    >= Maior ou Igual   == 8 >= 8 : false   (O sinal de maior ou igual é usado para verificar se o valor da esquerda é maior ou igual ao da direita)
    <= Menor ou Igual   == 9 <= 7 : false   (O sinal de menor ou igual é usado para verificar se o valor da esquerda é menor ou igual ao da direita)
    == Igual            == 5 == 5 : true    (O sinal de igual é usado para verificar se o valor da esquerda é igual ao da direita)
    != Diferente        == 4 != 4 : False   (O sinal de diferente é usado para verificar se o valor da esquerda é diferente ao da direita)

    Idendidade
                    5 == 5 : true       (Verifica se os valores são iguais)
                    5 == '5' : true     (Verifica se os valores são iguais)
                    5 === '5' : false   (Verifica se os valores são iguais e se são do mesmo tipo)

##__Lógicos__##

    && E - Conjunção
        true && true = true
        true && false = false
        false && true = false
        false && false = false

    || OU - Disjunção
        true || true = true
        true || false = true
        false || true = true
        false || false = false

    !  NÃO - Negação
        true = false
        false = true
        
##__Atribuição__##

    =   Atribuição
    +=  Soma e Atribui
    -=  Subtrai e Atribui
    *=  Multiplica e Atribui
    /=  Divide e Atribui
    %=  Resto e Atribui

##__Incremento e Decremento__##

    ++ Incremento
    -- Decremento

##__Operador Ternário__##

    (condição) ? valor1 : valor2

    var idade = 18;
    var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
    console.log(podeBeber);

    // retorna: Pode beber

    var media = 6.5;
    var resultado = (media >= 6.5) ? 'aprovado : 'reprovado';

Testes
Teste 01

var num = 12

var testePouI = (num % 2 == 0) ? 'Par' : 'Impar'
console.log(testePouI)

var a = 5 + 3
var b = a % 2
var c = b ** 0
var d = c + a / 2
var e = d * 2
var teste = (e != 8) ? `O Valor é diferente de ${a}` : 'O valor é 8'
console.log(teste)
