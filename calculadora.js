expression = ['3', 'x', '(', '100', '+', '(', '4', 'x', '(', '10', '/', '5', '+', '2','-', '1', ')', ')', ')', '+',
 '(','4', '+', '(','1','+', '(', '(','14', '+', '6', '+', '1', ')','-','10', ')', ')', ')']
/// (5 + 1)*(10 - (4 + 2))

expression = ['20', '+', '(','10', '+', '(','5', '+', '(', '20', '+', '(','1', '+', '(', '5', '+', '(', '12', '+', '3', ')', '+', '20', '+', '4', ')', ')', ')', ')', ')']


expression = ['(','(','10', '+', '(','50', '+', '100', '+', '(','(','200', '+', '(','(','20', '+', '50', ')', '+', '(', '90', '+', '10', ')',')',')', '+', 
'(', '30', '+', '(', '150', '+', '(', '20', '+', '(', '110', '+', '50',')', '+', '(','40', '+', '2',')',
')',')',')',')',')', '+', '60', '+', '6', '+', '(', '10', '+', '7', ')', ')', '+', '100', ')', '+','500']

console.log(expression, expression.length) 
stop = false

n = 0

console.log('--------------------------PRIMEIRO PASSO--------------------------')
while(n < expression.length) {
    console.log('index: ' + n)
    console.log('number: ' + expression[n])
   // console.log('TAMANHOOOO: ' + expression.length)
    if (expression[n] == 'x' &&  expression[n + 1] != '(' &&  expression[n + 1] != ')' &&  expression[n - 1] != '(' &&  expression[n - 1] != ')') {
        console.log('Multiplicar')
       // console.log(expression[n - 1]*expression[n + 1])
        expression[n + 1] = expression[n - 1]*expression[n + 1]
        expression.splice(n - 1, 2)
        console.log(expression)

    }else if(expression[n] == '/' &&  expression[n + 1] != '(' &&  expression[n + 1] != ')' &&  expression[n - 1] != '(' &&  expression[n - 1] != ')'){
        console.log('Dividir')
       // console.log(expression[n - 1]*expression[n + 1])
        expression[n + 1] = String(expression[n - 1]/expression[n + 1])
        expression.splice(n - 1, 2)
        console.log(expression)

    }else{
        n++
    }
} 

console.log('--------------------------SEGUNDO PASSO--------------------------')

degs = []
parents = 0
for (e = 0; e < expression.length; e++) {

    console.log('NUMBER: ' + expression[e])
    

    if (expression[e] == '(') {
        continuar = false
        stop2 = false
        pares = 0

        console.log('--------PARÊNTESES--------')
        degs.push({})
        console.log('DEEEEEEGS[E] = ' + degs[parents])

        calcular = ''
        for (n = e + 1; stop2 == false && n < expression.length; n++) {
            //console.log(continuar)
            //console.log(continuar == true)
            console.log(expression[n])
            if (expression[n] == '(') {
                console.log('Oh no')
                pares++
                continuar = true
                degs[parents].par = pares
                console.log('DEGS PARES---------: ' + degs[parents].par)

            }else if (continuar == true && expression[n] == ')'){ 
                    console.log('TRUE')
                  
                    if (pares == 1) {
                        continuar = false
                    }
                    pares--
                    console.log('PARES: ' + pares)

            }else if (continuar == false && expression[n] == ')') {

                console.log(degs[parents])
                if (degs[parents].par == undefined) {
                   console.log('TEM ALGO DE ERRADO')
                    degs[parents].par = 0
                }
                console.log('MAIS')
                console.log('PARES: ' + pares)
                console.log('stop2: ' + stop2)
                stop2 = true
                console.log('stop2: ' + stop2)
                console.log('abre parenteses: ' + e + '    fecha parenteses: ' + n )
                degs[parents].start = e
                degs[parents].end = n
            }else{
                console.log('VAMOS LÁ')
                if (expression[n] == '+' && expression[n + 1] != '(' &&  expression[n + 1] != ')' &&  
                expression[n - 1] != '(' &&  expression[n - 1] != ')') {
                    console.log('CONTA AÍ!!!!!!!!!!!!: ' + expression[n - 1] + ' + '+ expression[n + 1])
                    expression[n + 1] = String(Number(expression[n - 1]) + Number(expression[n + 1]))
                    expression.splice(n - 1, 2)
                    console.log('VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI' + expression[n - 2], expression[n])
                    
                    if(expression[n] == ')' && expression[n - 2] == '(') {
                        expression.splice(n, 1)
                        expression.splice(n - 2, 1)
                       // expression.splice(n, 1)
                        
                            if (expression[n - 3] == '+'){
                                console.log('OLHA Aiiiiiiiiiiiiiiiiiiiiii' + expression)
                                console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEE:' + Number(expression[n - 4]), Number(expression[n - 2]))
                                console.log('CONTA AÍ!!!!!!!!!!!!: ' + expression[n - 4] + ' + '+ expression[n - 2])
                                expression[n - 2] = String(Number(expression[n - 4]) + Number(expression[n - 2]))
                                expression.splice(n - 4, 2)
                                console.log('VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI' + expression[n - 5], expression[n])
                                if(expression[n - 3] == ')' && expression[n - 5] == '(') {
                                    expression.splice(n - 3, 1)
                                    expression.splice(n - 5, 1)
                                }
                                n = n - 3
                                
                            }
                    }
                } 
            } 
        }
        console.log('STOP2: ' + stop2)
        console.log('PARES: ', pares)
        
        console.log('EXPRESSION!!!!!!!!!!!!: ' + expression)
        parents++
    }
}


console.log(expression)
console.log(expression.indexOf('('))
if (expression.indexOf('(') != -1) {
console.log('--------------------------------------TECEIRO PASSO--------------------------------------')

console.log(expression.length - 1)
while (expression.length != 1) {
for (n = expression.length - 1; n > 0; n--) {
    console.log(expression[n - 1], expression[n], expression[n + 1])

    console.log(expression)
    
    if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && 
    expression[n + 1] != '(' && expression[n + 1] != ')') {
        console.log('Éé...')
        console.log(n - 1, n + 1)
        expression[n] = Number(expression[n - 1]) + Number(expression[n + 1])
        expression.splice(n + 1, 1)
        expression.splice(n - 1,1)
        if (expression[n - 2] == '(' && expression[n] == ')') {
            expression.splice(n, 1)
            expression.splice(n - 2, 1)
            
        }
    }
}
}
}

if (expression.length > 1) {
for (n = expression.length - 1; n > 0; n--) {
    if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && 
    expression[n + 1] != '(' && expression[n + 1] != ')') {
        console.log('Éé...')
        console.log(n - 1, n + 1)
        expression[n] = Number(expression[n - 1]) + Number(expression[n + 1])
        expression.splice(n + 1, 1)
        expression.splice(n - 1,1)
        if (expression[n - 2] == '(' && expression[n] == ')') {
            expression.splice(n, 1)
            expression.splice(n - 2, 1)
            n--
        }
    }
}
}

degSort = sort(degs)[0]
console.log(degSort)

function sort(n) {
    var maiorparamenor = []
    var posiçõesnumeros = []
    var yposition = n

    for (n in yposition) {
        maiorparamenor.push({ par:-100000000000000000000000000000000000000000000000000000000000000000000000000000000})
        posiçõesnumeros.push(-1)

    }

    for (item in yposition) {
        var volume = 0
        var dn = 0
        for (volume in yposition) {
            if (dn == 0) {
                if (yposition[item].par > maiorparamenor[volume].par) {
                    var itens = yposition.length - (Number(volume) + 1)
                    var leng = yposition.length

                    for (c = 0; c < itens; c++) {
                        maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                        posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                        leng--
                    }
                    maiorparamenor[volume] = yposition[item]
                    posiçõesnumeros[volume] = Number(item)
                    dn = 10


                }
            }
        }
    }
    return [maiorparamenor, posiçõesnumeros]
}
