//expression = ['x','^','3', '+', 'x', '-', '2','x','y', '+', 'x','^','2','y', '-', '2','x','^','2', '+', 'y']

//expression = ['x','^','3', '+', 'x', '-', '2','x','y', '-', '2','x','^','2', '+', 'y', '+', 'x','^','2','y']


//expression = ['6','x','^','2','b', '+', '42','x','^','2','-', 'y','^','2','b', '-', '7','y','^','2']

//expression = ['3', 'x', 'y', '-', '8','x', '+', '4','x','y', '-','6','x','+','2','x','y', '-','4','x']

//expression = ['7','x', '+', '14','x','^','2', '+', '35', '+', '2','x', '+', '4','x','^','2', '+', '10', '+', '3','x', '+', '6','x','^','2', '+', '15','+','5','x','+','10','x','^','2','+','25']

expression = ['12','xx','+','30', '+', '10', '+', '15','+','7','x', '+', '3','x', '+', '35', '+', '4','x','^','2','+','9','x','+','18','x','^','2','+','45','+','4','x', '+', '6','x','+','6','x','^','2','+', '2','x','+','10','x','^','2','+','25','+','8','x','^','2','+','20','+','5','x','+', '14','x','^','2']

//expression = ['-3*3', '-', '2*3*3', '+', '2*3', '+', '2*2']

//expression = ['3*3xy', '-', '2*3*3x']

//FAZENDO AS CONTAS COM NÚMEROS

        
// FATORANDO OS NÚMEROS 


for (n = 0; n < expression.length; n++) {
    if (ehprimo(expression[n]) == false && String(expression[n]).search('[0-9]') != -1) {
    fatorado = ''

    first = 1

    div = 0
    //////console.log(exp[n], div)

    stop = false
    fator = 1
    
    for (e = 2; stop == false; e++) {
        //////console.log('')
        //////console.log(e)
        //////console.log('')
    
        sob = Number(expression[n])
      
           if (ehprimo(e) == true) {
            while (sob%e == 0) {
            if (sob%e == 0) {
                //////console.log(sob + '/' + e + ': ' + sob/e)
                
                
            }

            sob = sob/e
            
            ////console.log('SIM')
            ////console.log(fator + ' x ' + e + ': ' + fator*e)

            fator = fator*e

            st = false
            
            if (fator == expression[n]) {
            stop = true
            fatorado += `${e}`
            }else{
                fatorado += `${e}*`
            }
           }
        }
    }
    expression[n] = fatorado
}
}
////console.log(expression)


// FAZENDO AS POTÊNCIAS COM LETRAS 

////console.log('FAZENDO AS POTÊNCIAS COM LETRAS')
for (y in expression) {
  //  ////console.log(expression[y])

    if (expression[y] == '^') {
        ////console.log('expression[y - 1]: ' + expression[Number(y) - 1])
        ////console.log('expression[y]: ' + expression[y])
        ////console.log('expression[y + 1]: ' + expression[Number(y) + 1])

       ad =  expression[Number(y) - 1] 
        for (h = 0; h < Number(expression[Number(y) + 1]) - 1; h++) {
            ////console.log(h)
            expression[Number(y) - 1]+= ad
        }

        expression.splice(Number(y) + 1, 1)
        expression.splice(y, 1)
        ////console.log(expression[Number(y) - 1])
        ////console.log(expression)
    }
}

// SEPARANDO OS MONÔMIOS

monomios = [{numero: ''}]
obnum = 0
for (n = 0; n < expression.length; n++) {
////console.log(expression[n], monomios[obnum])

if (String(expression[n]).search('[\\-\\+]') != -1 && n != 0) {
////console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
monomios.push({numero: ''})
obnum++
}

monomios[obnum].numero += expression[n]
}


//monomios = [{numero: ['11','x']},{numero: ['11','*','3','x']}]

// SEPARAR CORRETAMENTE OS NÚMEROS
for (bye in monomios) {
    ////console.log(monomios[bye])

    comofica = []
    ground = ''

    for (misery in monomios[bye].numero) { 
      //  //console.log(monomios[bye].numero[misery])
        
        carac = monomios[bye].numero[misery]
       // //console.log('CARACTER' + carac)
      //  //console.log(ground.length)

       // //console.log('OH COME ON',ground, String(ground.search('[0-9]')))
            if (ground.length == 0) {
                //console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                //console.log('É UM NÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                if (misery == monomios[bye].numero.length - 1) {
                    comofica.push(ground)
                }
            }
    }

    ////console.log('COMOFICA', comofica)
    ////console.log('NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',monomios[bye].numero)
    monomios[bye].numero = comofica
}


for (huh in monomios) {
    console.log(monomios[huh].numero)

    partlet = ''
    for (y in monomios[huh].numero) {
     console.log(monomios[huh].numero[y])
     if (String(monomios[huh].numero[y]).search('[a-z]') != -1) {
        console.log('EEEEEE')
        partlet+= String(monomios[huh].numero[y])
     }
    }
    monomios[huh].partletral = partlet
}


ji = []
for (huh in monomios) {
    console.log(monomios[huh], monomios[huh].partletral)
    
    if (ji.find(function (ji) {
        return ji.que == monomios[huh].partletral
       }) == undefined) {
           console.log('ARRRRRROZ')
    ji.push({quais: [Number(huh)], que:  monomios[huh].partletral})
       }else{
        ji.find(function (ji) {
            return ji.que == monomios[huh].partletral
           }).quais.push(Number(huh))
       }
    
}


// SEPARANDO/JUNTANDO OS NÚMEROS

exp = []
for (bye in ji) {
    console.log(ji[bye])

    for (misery in ji[bye].quais) { 
        console.log(monomios[ji[bye].quais[misery]].numero)

        ground = ''

        comofica = []
        for (b in monomios[ji[bye].quais[misery]].numero) {

           carac =  monomios[ji[bye].quais[misery]].numero[b]
           console.log(carac)
            
            if (ground.length == 0) {
                console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                console.log('É UM NÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                if (b == monomios[ji[bye].quais[misery]].numero.length - 1) {
                    comofica.push(ground)
                }
            }
        }
        console.log(comofica)
        monomios[ji[bye].quais[misery]].numero = comofica
    }
}


console.log('COMEÇAR A DIVIDIR')
// COMEÇAR A DIVIDIR
for (chuva in ji) {
    console.log('')
    console.log('')
    console.log('')

    conta = []
for (da in ji[chuva].quais) {



divisor = []
for (flowers in ji[chuva].que) {

divisor.push(ji[chuva].que[flowers])
}

//console.log(monomios[ji[chuva].quais[da]].numero, '/',divisor)

resultadoDaDivisão = DIVIDIR( divisor, monomios[ji[chuva].quais[da]].numero)
//console.log('A DIVISÃ É IGUAL A ', resultadoDaDivisão)

plan = []
add = ''

for (past in resultadoDaDivisão) {
   
 //console.log(resultadoDaDivisão[past])

 if (resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {
//console.log('ADICIONAR')

if (add.length == 0) {
    add+= resultadoDaDivisão[past]

}else if (resultadoDaDivisão[past].search('[0-9]') != -1 && add.search('[0-9]') != -1) {
    console.log('OK')
add+= resultadoDaDivisão[past]
}else{
    plan.push(add)
    add = ''
    add+= resultadoDaDivisão[past]
    
}
//console.log('ADD', add)
//console.log('PLAN É:', plan)

if (plan.length == 3) {
//console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
//console.log(Number(plan[0])*Number(plan[2]))
plan = [String(Number(plan[0])*Number(plan[2]))]
}
 }

}
plan.push(add)
//console.log('PLAN', plan)

if (plan.length == 3) {
    //console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
    //console.log(Number(plan[0])*Number(plan[2]))
    plan = [String(Number(plan[0])*Number(plan[2]))]
   // console.log('É ISSO!!', plan)
    }

    if (monomios[ji[chuva].quais[da]].numero[0] == '+' || monomios[ji[chuva].quais[da]].numero[0] == '-') {
   // console.log('O SINAL É: ', monomios[ji[chuva].quais[da]].numero[0])

    sinal = monomios[ji[chuva].quais[da]].numero[0]

    if (conta.length != 0) {
    conta.push(monomios[ji[chuva].quais[da]].numero[0])
    }
    }

    if (conta.length == 0 && monomios[ji[chuva].quais[da]].numero[0] == '-') {

 entao = '-'
 entao+= plan[0]
 //console.log(entao)
 conta.push(entao)
    }else{
       
        conta.push(plan[0])
    }
   
    
}


console.log('OK, FICOU ASSIM:', conta)

comehome = fazerConta(conta)
console.log('E RESOLVENDO FICA ASSIM:', comehome)



if (comehome[0][0] == '-') {
    t = ''
   for (b in comehome[0]) {
   if (comehome[0][b] != '-') {
     t+= comehome[0][b]
   }
   }
   console.log(t)
   fat = FATORARSINGULAR(t)
   oop = '-'
   oop+= fat
console.log(oop)

exp.push('-')
fat += ji[chuva].que
exp.push(fat)

}else{
fat = FATORARSINGULAR(comehome)
console.log(fat)

if (exp.length == 0) {
    fat += ji[chuva].que
    exp.push(fat)
    console.log('PARTE LETRAL:', ji[chuva].que)
   
    }else {
        exp.push('+')
        fat += ji[chuva].que
        exp.push(fat)
        console.log('PARTE LETRAL:', ji[chuva].que)
    }
}



}

console.log(exp)
expression = exp
console.log('--------------------------------------------------')
//console.log(DIVIDIR(['11','x'],['11','11','x','y']))


// SEPARANDO OS MONÔMIOS DENOVO
monomios = [{numero: ''}]
obnum = 0


for (n = 0; n < exp.length; n++) {
//console.log(exp[n], monomios[obnum])

if (String(exp[n]).search('[\\-\\+]') != -1 && n != 0) {
//console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
monomios.push({numero: ''})
obnum++
}

monomios[obnum].numero += exp[n]
}
//

// DIVIDINDO MONÔMIOS
function DIVIDIR(T, qual) {
    
    Tfix = []
for (h in T) {
    Tfix.push(T[h])
}
eg = qual

takeout = []

for (n in eg) {

if (T.indexOf(eg[n]) != -1) {



T.splice(T.lastIndexOf(eg[n]), 1)
takeout.push(Number(n))
}
}



depois = ''
for (n in eg) {
    if (takeout.indexOf(Number(n)) == -1) {
        depois += String(eg[n])
    }
}

return depois


}
//


//console.log('OK, VAMOS DAR UMA PARADINHA')

// FATORAR SÓ UM NÚMERO
//console.log(FATORARSINGULAR('20'))

function FATORARSINGULAR(potn) {
if (ehprimo(potn) == false && String(potn).search('[0-9]') != -1) {
    fatorado = ''

    first = 1

    div = 0

    stop = false
    fator = 1
    
    for (e = 2; stop == false; e++) {
        ////console.log('')
        ////console.log(e)
        ////console.log('')
    
        sob = Number(potn)
      
           if (ehprimo(e) == true) {
            while (sob%e == 0) {
            if (sob%e == 0) {
                ////console.log(sob + '/' + e + ': ' + sob/e)
                
                
            }

            sob = sob/e
            
            //console.log('SIM')
            //console.log(fator + ' x ' + e + ': ' + fator*e)

            fator = fator*e

            st = false
            
            if (fator == potn) {
            stop = true
            fatorado += `${e}`
            }else{
                fatorado += `${e}*`
            }
           }
        }
    }
    return fatorado
}
}
//



// FAZER CONTA COM NÚMEROS
function fazerConta(anterior) {

    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
    //console.log('POTENCIALIZAÇÃO')
    anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //console.log('TIRAR')
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //console.log(anterior)
    }else{
        //console.log(anterior)
    }
}else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
    //console.log('RAIZ')
    anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
    anterior.splice(n, 1)
    //console.log(n)
    n = n - 2
    //console.log(n)
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //console.log('TIRAR')
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //console.log(anterior)
    }else{
        //console.log(anterior)
    }
}
}

// Segundo multiplicações e divisões
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('MULTIPLICAÇÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])

if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //console.log('TIRAR')
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //console.log(anterior)
}else{
    //console.log(anterior)
}
}else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('DIVISÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //console.log('TIRAR')
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //console.log(anterior)
}else{
    //console.log(anterior)
}
}
}


if (anterior.length > 1) {

// while(anterior.length != 1 && anterior.indexOf('NaN') == -1) {
    for (n = 0; n < anterior.length && anterior.length != 1; n++) {
        //console.log(anterior[n])
        if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //console.log('ADIÇÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
          
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //console.log('SUBTRAÇÃO') 
            anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //console.log('MULTIPLICAÇÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //console.log('DIVISÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
            //console.log('DIVISÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
            //console.log('RAIZ')
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
            anterior.splice(n, 1)
            
            n = n - 2
            //console.log(n)
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3
        
                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }
    }
// }
}

    
}
return anterior
}
//





////console.log('--------------------------------------------MONOMIOS--------------------------------------')
reps = []
segs = []
let  = []

for (m = 0; m < monomios.length; m++) { // CADA MONÔMIO
    repetido = []
    
    col = false
    repetido = []

   numerosrep = []
    ////console.log('BURRO')
 ////console.log('--------------------')
    ////console.log(monomios[m].numero)
    
 
    for (oc = 0; oc < monomios[m].numero.length; oc++) { // CADA LETRA DE CADA MONÔMIO
        

        if (monomios[m].numero[oc].search('[\\*\\+\\/]') == -1) {
       // //console.log('LETRA OU NÚMERO ISOLADO: ' + monomios[m].numero[oc])

       ////console.log('NUMEROS REPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP', numerosrep.indexOf(monomios[m].numero[oc]))
        if (numerosrep.indexOf(monomios[m].numero[oc]) == -1) {
        numerosrep.push(monomios[m].numero[oc])

        for (u = 0; u < monomios.length; u++) { // OUTROS MONÔMIOS
            ocs2 = []

            if(u != m) {
        //  //console.log(`monomio ${u}: `)
         // //console.log(monomios[u])   
            

          // OCAS
          if(ocs2.find(function(ocs2) {
            return ocs2.ed == monomios[m].numero[oc]
            }) == undefined) {
              //  //console.log('====================')
                ocs2.push({ed: monomios[m].numero[oc], el: 0})

                ocs = 0
          for (ao = 0; ao < monomios[m].numero.length; ao++) {
           // //console.log('AAAAAAAAAA' + monomios[m].numero[ao])
            if (monomios[m].numero[ao] == monomios[m].numero[oc]) {
                ocs++
            }
          }
        }
          ////console.log('OOOOOOOOOOOOOOCS-------!!!!!!', ocs)
          
          for (e = 0; e < monomios[u].numero.length; e++) { // CADA LETRA DE CADA MONÔMIO
          //  //console.log(monomios[u].numero[e])
            
            if (monomios[u].numero[e] == monomios[m].numero[oc]) {
              //  //console.log(monomios[m].numero[oc] + ' é igual a ' + monomios[u].numero[e])

                if (repetido.find(function(repetido) {
                    return repetido.monum == u
                    }) === undefined) {

                        ocs2.find(function(ocs2) {
                            return ocs2.ed == monomios[m].numero[oc]
                            }).el++

                    

                     

                            if (ocs2.find(function(ocs2) {
                                return ocs2.ed == monomios[m].numero[oc]
                                }).el <= ocs) {

                repetido.push({monum: u, wc: [m], letr: monomios[u].numero[e]})

               

                            }

                //reps.push({mns: [u, m],alg: monomios[u].numero[e])
               // reps.push(monomios[u].numero[e])
                    }else{
                        ////console.log('OOOOOBABAOBABEI')
                       // if (repetido.find(function(repetido) {
                           // return repetido.monum == u
                           // }).letr.indexOf(monomios[u].numero[e]) == -1) {

                                ocs2.find(function(ocs2) {
                                    return ocs2.ed == monomios[m].numero[oc]
                                    }).el++

                             
                                   

                                        if (ocs2.find(function(ocs2) {
                                            return ocs2.ed == monomios[m].numero[oc]
                                            }).el <= ocs) {
                                   
                                repetido.find(function(repetido) {
                                    return repetido.monum == u
                                    }).letr += `.${monomios[u].numero[e]}`
                                   
                                }
                                    //reps.push(monomios[u].numero[e])
    
              
                           // }else{
                                //////console.log('DO NOT ADD')
                          // }
                    }
                
                ////console.log('REPETIDO: ', repetido)
                ////console.log('OCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS34246352645263546345:', ocs2)
            }else{
                
            }
            ////console.log('')
          }
        }
        }
        ////console.log('------------------------------------------------------------------------------------------')
    }
    }
    }
   
    reps.push(repetido)

    
    ////console.log('OALAALODLOALDAODLADOLADAOLAODLaaaaaaaaaaaa000000000000000OOOOOOooooooooooooooooooooIIIIIIIIIIIIIIAODALDLAOLDAO')
        for (moe in repetido) {
            ////console.log(repetido[moe])
            if (segs.find(function(segs) {
                return segs.car == repetido[moe].letr
                }) == undefined) {

                segs.push({car: repetido[moe].letr, mons: [m]})
               

            }else if(segs.find(function(segs) {
                return segs.car == repetido[moe].letr
                }).mons.indexOf(m) == -1){
              

                    segs.find(function(segs) {
                        return segs.car == repetido[moe].letr
                        }).mons.push(m)

                        
            }
        }
}


////console.log('RELAÇÃO ENTRE OS MONÔMIOS')
////console.log(segs)


for (nl = 0; nl < segs.length; nl++) {
    ////console.log('-----------------------------------------------------------------------------------------')
    
    ////console.log(segs[nl])

    ////console.log('ANALISAR CADA ITEM')
    ////console.log('NUMERO: ', segs[nl].car)
    for (n = 0; n < segs.length; n++) {

        ////console.log('---------------------------------------------------------------------')
        if (n != nl) {
        ////console.log(`${segs[n].car}.search('${segs[nl].car}')`)
        if (String(segs[n].car).search(String(segs[nl].car)) != -1) {
           
            ////console.log(`${segs[n].car}: ${segs[n].mons}`)
            ////console.log(`${segs[nl].car}: ${segs[nl].mons}`)

            for (u in segs[n].mons) {
                ////console.log(segs[n].mons[u])
                if (segs[nl].mons.indexOf(segs[n].mons[u]) != -1) {
                    ////console.log('TEM')
                }else{
                    ////console.log('NÃO TEM')
                 //   console.log('O DEVTOOLS É A PIOR COISA QUE JÁ EXISTIU NESSE MUNDO', segs[nl].mons)
                    segs[nl].mons.push(segs[n].mons[u])
                  
                }
            }
        }
        }
    
    }

}


function ehprimo(number) {
    parar = false
    for (t = 2; t < number && parar == false; t++) {
    
        if (number%t == 0) {
            parar = true
        }
    }
    if (parar) 
    return false
    else
    return true
}


//////console.log('------------------------------ORDENANDO DO MAIOR PARA O MENOR----------------------------')


grtols = []


for (hi in segs) {
    //////console.log(segs[hi], segs[hi].mons.length)
    segs[hi].length = segs[hi].mons.length

    grtols.push(segs[hi])
}

//////console.log('grtols: ', segs)
//////console.log(sortob(grtols, 'length'))
organizado = sortob(grtols, 'length')[1]

grtols = []
for (ah in organizado) {
   // ////console.log(segs[organizado[ah]])
    grtols.push(segs[organizado[ah]])
   
}

//////console.log('LISTA ORDENADA PELO TAMANHO', grtols)
segs = grtols


//DIVS
ml = monomios.length
//////console.log(ml)

divs = ehprimo2(ml)
//////console.log(divs)

for (n in divs) {
    //////console.log(divs[n])
    
}

if (divs.length == 0) {
divs = [monomios.length]
}


//////console.log('AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIÓÓOÓÓÓÓÓOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
//////console.log(segs)


    //////console.log(segs, divs)

    ////console.log(segs)

 //console.log(segs)

    //const HATEYOU = []
    //for (HATEDEVTOOLS in segs) {
       
      //  console.log(segs[HATEDEVTOOLS].mons)
        //HATEYOU.push(segs[HATEDEVTOOLS])
   // }
    
   //console.log(segs)
   for (tie in segs) {
   // console.log(segs[tie])
    segs[tie].godhelpme = [...segs[tie].mons]
   }
  
    for (n in divs) {
        //const vi = 0


       // console.log('YEHAAAAAAAAAA')
       console.log(divs[n],'grupos')
    int = doit(segs)
   //console.log(int[0], int[1])
    ////console.log(int[1])

    outro = []
    enemy = 0
    for (ish = int[0].length - 1; ish >= 0; ish--) {
        
        if (int[0][ish].fix.length > 0) {
         //  console.log('ALL WE ARE IS EVERYTHING WE\'VE DONE')
         
           console.log(int[0][ish].car, int[0][ish].fix)
           //console.log(outro)
          
           enemy++

        }else{
            int[0].splice(ish, 1)
        }
        
    }

    if (ehprimo(monomios.length) == true) {
      //  console.log('TEMOS UM PROBLEMA')
        for (ish in segs) {
        
            //   console.log(segs[ish].car, segs[ish].mons)
            if (segs[ish].mons.length == monomios.length) {
                console.log('É ESSE')
                relation = [{car: segs[ish].car, fix: [...segs[ish].mons]}]
            }
        }
        console.log('FICA ASSIM')
        console.log(relation)
    }

    }

    


// Vendo se o número é primo
function ehprimo(number) {
    parar = false
    for (t = 2; t < number && parar == false; t++) {
    
        if (number%t == 0) {
            parar = true
        }
    }
    if (parar) 
    return false
    else
    return true
}

// Achando todos os divisores da quantidade de monômios
// Ex: 12: 4, 3, 2, 6
function ehprimo2(number) {
    divisores = []
    for (t = 2; t < number && parar == false; t++) {
    
        if (number%t == 0) {
           divisores.push(t)
        }
    }
   return divisores
}

function sortob(n, pam) {
    var maiorparamenor = []
    var posiçõesnumeros = []
    var yposition = n

    for (n in yposition) {
        maiorparamenor.push(-100000000000000000000000000000000000000000000000000000000000000000000000000000000)
        posiçõesnumeros.push(-1)

    }

    for (item in yposition) {
        var volume = 0
        var dn = 0
        for (volume in yposition) {
            if (dn == 0) {
                if (yposition[item][pam] > maiorparamenor[volume]) {
                    var itens = yposition.length - (Number(volume) + 1)
                    var leng = yposition.length

                    for (c = 0; c < itens; c++) {
                        maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                        posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                        leng--
                    }
                    maiorparamenor[volume] = yposition[item][pam]
                    posiçõesnumeros[volume] = Number(item)
                    dn = 10


                }
            }
        }
    }
    return [maiorparamenor, posiçõesnumeros]
 }





















function doit(par) {

    segs2 = []

    for (uf in par) {
    
       // console.log(segs[uf].godhelpme)
       // segs2.push(segs[uf])
      //  segs[tie].godhelpme = [...segs[tie].mons]
      segs2[uf] = {}
        segs2[uf].mons = [...par[uf].mons]
        segs2[uf].car = par[uf].car

 }

 relation = []


 quanto = Number(monomios.length)/Number(divs[n])


 numapars = []




 util = []
 for (t in segs2) {



     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 ////console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
     ////console.log(m)
     for (t in util) {
         ////console.log('util[t].mons', util[t].mons)
         ////console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
     ////console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 //console.log('numapars',numapars)
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
         ////console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIONAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
     ////console.log('present', present)
     ////console.log('--------------------------------------VENDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
         ////console.log('')
        //console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
           //  console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
     //console.log('FALTAM OS NÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
       //  console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 ////console.log('RELATION!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
     ////console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
     ////console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     ////console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
         ////console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
        ////console.log('ANTES: ', relation[c].falt)
        relation[c].falt[f] = -10

        ////console.log('DEPOIS: ', relation[c].falt)
     }
     ////console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
         ////console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
         ////console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
             ////console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             ////console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

                 ////console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                     ////console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                     ////console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 ////console.log('SERÁ QUE DEU CERTO?')

//////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
////console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 ////console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}

////console.log('divs é igual a ', divs[n])
////console.log('groups é igual a', groups)


if (groups < divs[n]) {
 //console.log('DEU CERTO!!!EBAAAAAA')

 ////console.log('SERÁ QUE DEU CERTO?')

////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
////console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 ////console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
////console.log('IF LIFE AIN\'T JUST A JOKE THEN WHY ARE WE LAUGHING?', divs[n], 'and', groups)
if (divs[n] != groups) {
//console.log('SÓ QUE NÃO')
////console.log('I\'VE TRIED TO PUT THIS ALL BEHIND ME')

tirados = []
for (wish in relation) {
 ////console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
    ////console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
////console.log('NÚMEROS QUE SERÃO TIRADOS', tirados)



for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
   // console.log(segs[die].mons[tirar[far]])
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
//console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
        //console.log('TIRADOS')
        //console.log(segs2[sorrow].mons[imor])

       //console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
               ob.problem = true
           }
            //console.log('PLEASE DONT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    //console.log('IN THE END', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temNaLista(ob.fix))
    if (ob.problem == false || temNaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}
males = []
for (nah = relation.length - 1; nah >= 0; nah--) {
     // if (relation[nah].fix.length > 0) {
          
 // console.log('fix',relation[nah].fix)

  //console.log('---VENDO TODA A LISTA---')
  for (nop in relation) {
    if (relation[nop].fix.length > 0 && nop != nah) {
//console.log(relation[nop].fix, relation[nop].car)

igual = true
for (uh in relation[nop].fix) {
//console.log(relation[nop].fix[uh])
if (relation[nah].fix.indexOf(relation[nop].fix[uh]) == -1) {
igual = false
}
}
//console.log(igual)
if (igual == true) {
if (relation[nah].car.length > relation[nop].car.length) {
//console.log('ESSE É UM MAL QUE PRECISA SER RETIRADO DA SOCIEDADE')
males.push(Number(nop))
}
//}

    }

}else if(relation[nop].fix.length == 0) {
    males.push(Number(nop))
}
      }
  
  }

  for (nah = relation.length - 1; nah >= 0; nah--) {
      //console.log('dream',nah, relation[nah])
     // console.log(males)
    if (males.indexOf(nah) != -1) {
      //  console.log('HEY')
        relation.splice(nah, 1)
    }
  }

  numerosquetem = []
  for (nah in relation) {
      if (relation[nah].fix.length > 0) {
    //  console.log(relation[nah].fix)

      for (nop in relation[nah].fix) {
       //   console.log(relation[nah].fix[nop])
          numerosquetem.push(relation[nah].fix[nop])
      }
      }
  }
  console.log('----------------------------------------------------------------')

  segs2 = []

  for (uf in par) {
  
     // console.log(segs[uf].godhelpme)
     // segs2.push(segs[uf])
    //  segs[tie].godhelpme = [...segs[tie].mons]
    segs2[uf] = {}
      segs2[uf].mons = [...par[uf].mons]
      segs2[uf].car = par[uf].car

}

for (pose in segs2) {
//console.log(segs2[pose].mons)
for (me = segs2[pose].mons.length - 1; me >= 0; me--) {
//console.log(segs2[pose].mons[me])
if (numerosquetem.indexOf(segs2[pose].mons[me]) != -1) {
//console.log('tirar')
segs2[pose].mons.splice(me, 1)
}
}
}

fireonfire = []

    for (uf in relation) {
    
       // console.log(segs[uf].godhelpme)
       // segs2.push(segs[uf])
      //  segs[tie].godhelpme = [...segs[tie].mons]
      fireonfire[uf] = {}
        fireonfire[uf].mons = [...relation[uf].fix]
        fireonfire[uf].car = relation[uf].car

 }

 console.log('OK, AGORA PRECISAMOS ENCONTRAR O RESTO')
 console.log(doit2(segs2)[0])
 console.log(fireonfire)

 //console.log('relation', relation)
 for (red in fireonfire) {
   // console.log(fireonfire[red])
    relation.push({fix: fireonfire[red].mons, car: fireonfire[red].car})
 }

}else if(groups > divs[n]){
    
console.log('NÃO DEU CERTO! BUÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ')
 ////console.log('números que têm: ', conts)
 ////console.log(segs)

 mia = []
for (idk in segs2) {
//////console.log('---------------------------------------------------------------------')
////console.log('aqui ó',segs[idk].mons)


for (mcr in segs2) {
if (mcr != idk) {

    //////console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
   // //console.log('outro',segs[mcr].mons)
   
   // //console.log(segs[idk].mons.length)
    if (segs2[mcr].mons.length <= segs2[idk].mons.length) {

        sames = []
   for(y = 0; y < segs2[mcr].mons.length; y++) {
    //  //console.log(segs[idk].mons, segs[mcr].mons[y], segs[idk].mons.indexOf(segs[mcr].mons[y]))
        if (segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
          ////console.log('igual')
            sames.push('igual')
        }else{
          // //console.log('diferente')
            sames.push('diferente')
        }
   }
 // //console.log(sames)
   if (sames.indexOf('diferente') == -1){
  // //console.log('TIRAR', segs[mcr])

    if (mia.indexOf(mcr) == -1) {
    mia.push(mcr)
    }
    
    ////console.log(segs)
    
   }
}
    
}
}

}

for (f = mia.length - 1; f >= 0; f--) {
    //segs2.splice(mia[f],1)
    
   }

   
 numapars = []
 
relation = []

 //////console.log('--------------------------------------------------------------------------------------------------------------------------------')


 util = []
 for (t in segs2) {

    ////console.log(segs[n],'.mons: ',segs[t].mons,'.length: ', segs[t].mons.length)
  //  //console.log(`${segs[t].mons.length} é maior que ou igual a ${quanto}? ${segs[t].mons.length >= quanto}`)

     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 //console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
    ////console.log(m)
     for (t in util) {
      //   //console.log('util[t].mons', util[t].mons)
      //   //console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
    // //console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
      //   //console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIONAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
    // //console.log('present', present)
     ////console.log('--------------------------------------VENDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
        // //console.log('')
        // //console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
          //   //console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
   //  //console.log('FALTAM OS NÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
       //  //console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 //console.log('RELATION!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
    // //console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
    // //console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     ////console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
      //   //console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
    //    //console.log('ANTES: ', relation[c].falt)
        relation[c].falt[f] = -10

    //    //console.log('DEPOIS: ', relation[c].falt)
     }
   //  //console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
       //  //console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
       //  //console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
          //   //console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             ////console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

              ///   //console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                 //    //console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                  //   //console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 console.log('SERÁ QUE DEU CERTO?')

//console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
////console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 ////console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
//console.log('IF LIFE AIN\'T JUST A JOKE THEN WHY ARE WE LAUGHING?', divs[n], 'and', groups)
if (divs[n] != groups) {
//console.log('THEN WHY ARE WE LAUGHING?')
//console.log('I\'VE TRIED TO PUT THIS ALL BEHIND ME')

tirados = []
for (wish in relation) {
 //console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
    //console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
//console.log('NÚMEROS QUE SERÃO TIRADOS', tirados)


for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
    
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
//console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
        //console.log('TIRADOS')
        //console.log(segs2[sorrow].mons[imor])

       //console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                ob.problem = true
           }
            //console.log('PLEASE DONT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    //console.log('IN THE END', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temNaLista(ob.fix))
    if (ob.problem == false || temNaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}
}
return [relation, segs2]
}





function temNaLista(h) {
//console.log('THIS IS HOW I DISAPPEAR, THIS IS HOW I DISAPPEAR, THIS IS HOW I DISAPPEAR')

for (t in relation) {

    if (relation[t].fix.length > 0) {
    //console.log(relation[t].fix)

    home = 0
    for (fear in relation[t].fix) {
        if (relation[t].fix[fear] == h[fear]) {
            //console.log('WOW')
            home++
        }
    }

    if (home == h.length) {
        //console.log('É IGUAL')
        return true 
    }

    }
}
}



function doit2(par) {

    segs2 = []

    for (uf in par) {
    
       // console.log(segs[uf].godhelpme)
       // segs2.push(segs[uf])
      //  segs[tie].godhelpme = [...segs[tie].mons]
      segs2[uf] = {}
        segs2[uf].mons = [...par[uf].mons]
        segs2[uf].car = par[uf].car

 }

 relation = []


 quanto = Number(monomios.length)/Number(divs[n])


 numapars = []




 util = []
 for (t in segs2) {



     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 ////console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
     ////console.log(m)
     for (t in util) {
         ////console.log('util[t].mons', util[t].mons)
         ////console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
     ////console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 //console.log('numapars',numapars)
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
         ////console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIONAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
     ////console.log('present', present)
     ////console.log('--------------------------------------VENDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
         ////console.log('')
         ////console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
             ////console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
     ////console.log('FALTAM OS NÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
         ////console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 ////console.log('RELATION!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
     ////console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
     ////console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     ////console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
         ////console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
        ////console.log('ANTES: ', relation[c].falt)
        relation[c].falt[f] = -10

        ////console.log('DEPOIS: ', relation[c].falt)
     }
     ////console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
         ////console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
         ////console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
             ////console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             ////console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

                 ////console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                     ////console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                     ////console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 ////console.log('SERÁ QUE DEU CERTO?')

//////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
////console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 ////console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}

////console.log('divs é igual a ', divs[n])
////console.log('groups é igual a', groups)
if (groups < divs[n]) {
 //console.log('DEU CERTO!!!EBAAAAAA')

 ////console.log('SERÁ QUE DEU CERTO?')

////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
console.log('IF LIFE AIN\'T JUST A JOKE THEN WHY ARE WE LAUGHING?', divs[n], 'and', groups)
if (divs[n] != groups) {
console.log('THEN WHY ARE WE LAUGHING?')
console.log('I\'VE TRIED TO PUT THIS ALL BEHIND ME')

tirados = []
for (wish in relation) {
// console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
//    console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
console.log('NÚMEROS QUE SERÃO TIRADOS', tirados)



for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
   // console.log(segs[die].mons[tirar[far]])
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
//console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
        //console.log('TIRADOS')
        //console.log(segs2[sorrow].mons[imor])

       //console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
               // ob.problem = true
           }
            //console.log('PLEASE DONT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    //console.log('IN THE END', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temNaLista(ob.fix))
    if (ob.problem == false || temNaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}
}else if(groups > divs[n]){
    
//console.log('NÃO DEU CERTO! BUÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ')
 //console.log('números que têm: ', conts)
 ////console.log(segs)

 mia = []
for (idk in segs2) {
//////console.log('---------------------------------------------------------------------')
//console.log('aqui ó',segs[idk].mons)


for (mcr in segs2) {
if (mcr != idk) {

    //////console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
  // console.log('outro',segs[mcr].mons)
   
   //console.log(segs[idk].mons.length)
    if (segs2[mcr].mons.length <= segs2[idk].mons.length) {

        sames = []
   for(y = 0; y < segs2[mcr].mons.length; y++) {
    //  //console.log(segs[idk].mons, segs[mcr].mons[y], segs[idk].mons.indexOf(segs[mcr].mons[y]))
        if (segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
       //   console.log('igual')
            sames.push('igual')
        }else{
        //  console.log('diferente')
            sames.push('diferente')
        }
   }
// console.log(sames)
   if (sames.indexOf('diferente') == -1){
 //console.log('TIRAR', segs[mcr])

    if (mia.indexOf(mcr) == -1) {
    mia.push(mcr)
    }
    
 //  console.log(segs)
    
   }
}
    
}
}

}

for (f = mia.length - 1; f >= 0; f--) {
    //segs2.splice(mia[f],1)
    
   }

   
 numapars = []
 
relation = []

 //////console.log('--------------------------------------------------------------------------------------------------------------------------------')


 util = []
 for (t in segs2) {

    ////console.log(segs[n],'.mons: ',segs[t].mons,'.length: ', segs[t].mons.length)
  //  //console.log(`${segs[t].mons.length} é maior que ou igual a ${quanto}? ${segs[t].mons.length >= quanto}`)

     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 //console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
    ////console.log(m)
     for (t in util) {
      //   //console.log('util[t].mons', util[t].mons)
      //   //console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
    // //console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
      //   //console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIONAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
    // //console.log('present', present)
     ////console.log('--------------------------------------VENDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
        // //console.log('')
        // //console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
          //   //console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
   //  //console.log('FALTAM OS NÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
       //  //console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 //console.log('RELATION!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
    // //console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
    // //console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     ////console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
      //   //console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
    //    //console.log('ANTES: ', relation[c].falt)
        relation[c].falt[f] = -10

    //    //console.log('DEPOIS: ', relation[c].falt)
     }
   //  //console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
       //  //console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
       //  //console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
        // console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             ////console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

              ///   //console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                 //    //console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                  //console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 console.log('SERÁ QUE DEU CERTO?')

//console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
//console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 //console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
//console.log('IF LIFE AIN\'T JUST A JOKE THEN WHY ARE WE LAUGHING?', divs[n], 'and', groups)
if (divs[n] != groups) {
//console.log('THEN WHY ARE WE LAUGHING?')
//console.log('I\'VE TRIED TO PUT THIS ALL BEHIND ME')

tirados = []
for (wish in relation) {
 //console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
   // console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
console.log('NÚMEROS QUE SERÃO TIRADOS', tirados)


for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
    
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
      //  console.log('TIRADOS')
     //   console.log(segs2[sorrow].mons[imor])

    //   console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                //ob.problem = true
           }
         //   console.log('PLEASE DONT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    //console.log('IN THE END', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temNaLista(ob.fix))
    if (ob.problem == false || temNaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}
}

console.log('HELLO')


return [relation, segs2]
}