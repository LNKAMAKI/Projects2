//expression = ['x','^','3', '+', 'x', '-', '2','x','y', '+', 'x','^','2','y', '-', '2','x','^','2', '+', 'y']


//expression = ['6','x','^','2','b', '-', '42','x','^','2', '+', '7','y','^','2','-','y','^','2','b']

//expression = [ '-', '8','x','+','3', 'x', 'y', '+', '4','x','y', '-','6','x','+','2','x','y', '-','4','x','-','169','h','^','4','k','^','2']

//expression = ['7','x', '+', '14','x','^','2', '+', '35', '+', '2','x', '+', '4','x','^','2', '+', '10', '+', '3','x', '+', '6','x','^','2', '+', '15','+','5','x','+','10','x','^','2','+','25']

//expression = ['12','xx','+','30', '+', '10', '+', '15','+','7','x', '+', '3','x', '+', '35', '+', '4','x','^','2','+','9','x','+','18','x','^','2','+','45','+','4','x', '+', '6','x','+','6','x','^','2','+', '2','x','+','10','x','^','2','+','25','+','8','x','^','2','+','20','+','5','x','+', '14','x','^','2']


//expression = ['2','y','+','4','y','+','2','x','+','4','x']

//expression = ['6','x','+','15','x','^','2','+','6','a','x','+','15','a','x','^','2','+','6','x','y','+','15','x','^','2','y','+','6','x','z','+','15','x','^','2','z','+','6','x','b','+','15','x','^','2','b']

//expression = ['6','x','+','15','x','^','2','+','6','a','x','+','15','x','^','2','a']

//expression = ['3aa', '+','3ac', '-', 'ab', '-', 'bc']

//expression = ['ab','+','ac','+','bb','+','bc','+','xa','+','xc','+','7a','+','7b','+','5t','+','5y','+','x','^','3', '+', 'x', '-', '2','x','y', '-', '2','x','^','2', '+', 'x','^','2','y']

//expression = ['ab','+','ac','+','bb','+','bc','+','xa','+','xc']
//expression = ['3x','+','3a','+','3','z','+','5xy']

//expression = ['+','10','y','-','338','x','y','+','20','y','^','2','-','169','x','+','ab','+','bb','+','ac','+','bc']


//expression = ['3','-','6','x','^','3','+','14','x','^','3','y','^','2','-','7','y','^','2']

//expression = ['+','ab','-','ac','-','bb','+','bc','-','ad','-','bd']

//expression = ['2yy','-','6','y','-','2xyy','+','6','x','y','-','2ay','-','6','a','+','2aby','+','6','a','b','+','5ty','+','15','t']
//expression = ['2yy','-','6','y','-','2xyy','+','6','x','y','-','2ay','-','6','a']

//expression = ['-','5x','+','xy','+','5y','-','y','^','2','+','ab','-','ac','-','bb','+','bc','-','55','w','^','3','+','7t','+','7j','-','13','h','^','4','k','^','2']

//expression = ['55','w','^','3','+','13','h','^','4','k','^','2']
//expression = ['-','11','x','-','121','y','+','11yz','+','xz']

//expression = ['26','a','x','+','169','x','b','+','4','a','y','+','26','b','y']
//expression = ['-','37','x','^','2','+','74','x','-','42','y','+','21','x','y']
//expression = ['2xx','+','30','xx']
//expression = ['-','5x','+','10x','+','2x','+','4','y','+','10','y']
//expression = ['37','x','+','21','x','^','4']
//expression = ['13*2y','+','13xy']
//expression = ['-','50','x','x','y','-','60','x','x','-','40','x','x','-','30','x','x','y']
expression = ['+','5x','+','3x','-','7','x','+','4','y','+','10','y']
//expression = ['-','2y','-','5y','+','4','x','+','10','x','-','6','y','-','15','y','+','49','+','63','+','ab','+','bb']
//expression = ['-','3x','-','5x','+','4','x','x','+','3y','+','5y','-','4','x','y']
//expression = ['a','^','2','+','a','-','5a','-','5']

// BIOLOGIA, FÍSICA, QUÍMICA

File
                   
                   
               }
   
               sob = sob/e
               
             //  console.log('SIM')
             //  console.log(fator + ' x ' + e + ': ' + fator*e)
   
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
   //
   
   
   // FAZEnDO AS POTÊnCIAS COM LETRAS 
   
   //
   for (y in expression) {
     
   
       if (expression[y] == '^') {
          // console.log('expression[y - 1]: ' + expression[Number(y) - 1])
          // console.log('expression[y]: ' + expression[y])
           
   
          ad =  expression[Number(y) - 1] 
           for (h = 0; h < Number(expression[Number(y) + 1]) - 1; h++) {
              // console.log(h)
               expression[Number(y) - 1]+= ad
           }
   
           expression.splice(Number(y) + 1, 1)
           expression.splice(y, 1)
          // console.log(expression[Number(y) - 1])
          // console.log(expression)
       }
   }
   
   // SEPARAnDO OS MOnÔMIOS
   
   monomios = [{numero: ''}]
   obnum = 0
   for (n = 0; n < expression.length; n++) {
   
   
   if (String(expression[n]).search('[\\-\\+]') != -1 && n != 0) {
   
   monomios.push({numero: ''})
   obnum++
   }
   
   monomios[obnum].numero += expression[n]
   
   }
   
   for (surprise in monomios) {
      // console.log(monomios[surprise].numero)
   }
   //monomios = [{numero: ['11','x']},{numero: ['11','*','3','x']}]
   
   // TRANSFORMA  O MONOMIOS.NUMERO(STRING) EM UM ARRAY
   /*
   for (bye in monomios) {
       
   
       comofica = []
       ground = ''
   
       for (misery in monomios[bye].numero) { 
        // console.log(monomios[bye].numero[misery])
           
           carac = monomios[bye].numero[misery]
          
         
   
         // console.log('OH COME On',ground, String(ground.search('[0-9]')))
               if (ground.length == 0) {
                  // console.log('LISTA VAZIA')
                   ground+= carac
               }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                  // console.log('É UM nÚMERO')
                   ground+= carac
               }else{
                   comofica.push(ground)
                   ground = ''
                   ground += carac
                   
               }
               if (misery == monomios[bye].numero.length - 1) {
                   comofica.push(ground)
               }
       }
   
      // console.log('COMOFICA', comofica)
       //
       monomios[bye].numero = comofica
   }
   */

   for (huh in monomios) {
       
   
       partlet = ''
       for (y in monomios[huh].numero) {
        
        if (String(monomios[huh].numero[y]).search('[a-z]') != -1) {
           
           partlet+= String(monomios[huh].numero[y])
        }
       }
       monomios[huh].partletral = partlet
       
   }
   
   
   ji = []
   // JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
   for (huh in monomios) {
       
       
       if (ji.find(function (ji) {
           return ji.que == monomios[huh].partletral
          }) == undefined) {
              
       ji.push({quais: [Number(huh)], que:  monomios[huh].partletral})
          }else{
           ji.find(function (ji) {
               return ji.que == monomios[huh].partletral
              }).quais.push(Number(huh))
          }
       
   }
   
   
   // SEPARAnDO/JUnTAnDO OS nÚMEROS
   
   exp = []
   
   for (bye in ji) {
      // console.log(ji[bye])
   
       for (misery in ji[bye].quais) { 
           
   
           ground = ''
   
           comofica = []
           for (b in monomios[ji[bye].quais[misery]].numero) {
   
              carac =  monomios[ji[bye].quais[misery]].numero[b]
             // console.log(carac)
               
               if (ground.length == 0) {
                  // console.log('LISTA VAZIA')
                   ground+= carac
               }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                   console.log('É UM nÚMERO')
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
           
           monomios[ji[bye].quais[misery]].numero = comofica
       }
   }
   
   
   
   //
   
   // SEPARAR CORRETAMEnTE OS nÚMEROS
   
   
   for (bye in monomios) {
       //
   
       comofica = []
       ground = ''
   
       for (misery in monomios[bye].numero) { 
         //  
           
           carac = monomios[bye].numero[misery]
          // 
         //  
   
          // 
               if (ground.length == 0) {
                   
                   ground+= carac
               }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                   
                   ground+= carac
               }else{
                   comofica.push(ground)
                   ground = ''
                   ground += carac
                  
               }
               if (misery == monomios[bye].numero.length - 1) {
                   comofica.push(ground)
               }
       }
   
       //
       //
       monomios[bye].numero = comofica
    }
 
   
   
   // FATORAR SÓ UM nÚMERO
   
   
   function FATORARSInGULAR(potn) {
   if (ehprimo(potn) == false && String(potn).search('[0-9]') != -1) {
       fatorado = ''
   
       first = 1
   
       div = 0
   
       stop = false
       fator = 1
       
       for (e = 2; stop == false; e++) {
           //
           //
           //
       
           sob = Number(potn)
         
              if (ehprimo(e) == true) {
               while (sob%e == 0) {
               if (sob%e == 0) {
                   //
                   
                   
               }
   
               sob = sob/e
               
               
               
   
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
   

   
   // FAZER COnTA COM nÚMEROS
   function fazerConta(anterior) {
   
       if(0 == 0) {// falta == false
   //Primeiro raizes e potências
   for (n = 0; n < anterior.length; n++) {
   if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
       
       anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
       anterior.splice(n - 1, 2)
       
       n = n - 3 // n = n - 3
       
       if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
           
           anterior.splice(n + 3, 1)
           anterior.splice(n + 1, 1)
           n = n - 3
   
           
       }else{
           
       }
   }else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
       
       anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
       anterior.splice(n, 1)
       
       n = n - 2
       
       if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
           
           anterior.splice(n + 3, 1)
           anterior.splice(n + 1, 1)
           n = n - 3
   
           
       }else{
           
       }
   }
   }
   
   // Segundo multiplicações e divisões
   for (n = 0; n < anterior.length; n++) {
   if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
   
   anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
   anterior.splice(n - 1, 2)
   
   n = n - 3
   
   
   if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
       
       anterior.splice(n + 3, 1)
       anterior.splice(n + 1, 1)
       n = n - 3
   
       
   }else{
       
   }
   }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
   
   anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
   anterior.splice(n - 1, 2)
   
   n = n - 3
   
   if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
       
       anterior.splice(n + 3, 1)
       anterior.splice(n + 1, 1)
       n = n - 3
   
       
   }else{
       
   }
   }
   }
   
   
   if (anterior.length > 1) {
   
   // while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
       for (n = 0; n < anterior.length && anterior.length != 1; n++) {
           
           if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
               
               anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
               anterior.splice(n - 1, 2)
             
               n = n - 3
               
               if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                   
                   anterior.splice(n + 3, 1)
                   anterior.splice(n + 1, 1)
                   n = n - 3
   
                   
               }else{
                   
               }
           }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
               
               anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
               anterior.splice(n - 1, 2)
               
               n = n - 3
               
               if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                   
                   anterior.splice(n + 3, 1)
                   anterior.splice(n + 1, 1)
                   n = n - 3
   
                   
               }else{
                   
               }
           }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
               
               anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
               anterior.splice(n - 1, 2)
               
               n = n - 3
               
               if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                   
                   anterior.splice(n + 3, 1)
                   anterior.splice(n + 1, 1)
                   n = n - 3
   
                   
               }else{
                   
               }
           }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
               
               anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
               anterior.splice(n - 1, 2)
               
               n = n - 3
               
               if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                   
                   anterior.splice(n + 3, 1)
                   anterior.splice(n + 1, 1)
                   n = n - 3
   
                   
               }else{
                   
               }
           }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
               
               anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
               anterior.splice(n - 1, 2)
               
               n = n - 3
               
               if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                   
                   anterior.splice(n + 3, 1)
                   anterior.splice(n + 1, 1)
                   n = n - 3
   
                   
               }else{
                   
               }
           }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
               
               anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
               anterior.splice(n, 1)
               
               n = n - 2
               
               if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                   
                   anterior.splice(n + 3, 1)
                   anterior.splice(n + 1, 1)
                   n = n - 3
           
                   
               }else{
                   
               }
           }
       }
   // }
   }
   
       
   }
   return anterior
   }
   //
   
   
   
   function DIVIDIR(T, qual) {
       
   
       Tfix = []
   for (h in T) {
       Tfix.push(T[h])
       
   }
   //egs = [...qual]
   
   
   egs = []
   for (norte in qual) {
   
   if (qual[norte] == '*') {
       
   }else{
   
   
   egs.push(qual[norte])
   
   }
   
   }
   
   
   takeout = []
   
   for (n in egs) {
   
   if (T.indexOf(egs[n]) != -1) {
   
      // console.log('TAKE OUT', egs[n])
   T.splice(T.lastIndexOf(egs[n]), 1)
   takeout.push(Number(n))
   }
   
   }
   
   
   
   
   
   for (giro = egs.length - 1; giro >= 0; giro--) {
       if (takeout.indexOf(Number(giro)) == -1) {
      // console.log(egs[giro],'egs[giro]')
       }else{
          // console.log('SPLICE')
           egs.splice(giro,1)
       }
   }
   
   
   depois = ''
   for (n in egs) {
      // console.log('yo',egs[n])
           depois += String(egs[n])
   
        if (String(egs[Number(n) + 1]).search('[0-9]') != -1 && egs[n].search('[//-//+]') == -1) {
         //  console.log('HUmm')
           depois+= '*'
        }
   }
   
   return depois
   
   
   }
   //expression = exp
   
   //
   reps = []
   segs = []
   let  = []
   
   for (m = 0; m < monomios.length; m++) { // CADA MOnÔMIO
       repetido = []
       
       col = false
       repetido = []
   
      numerosrep = []
       //
    //
       
       
    
       for (oc = 0; oc < monomios[m].numero.length; oc++) { // CADA LETRA DE CADA MOnÔMIO
           
   
           if (monomios[m].numero[oc].search('[\\*\\+\\/]') == -1) {
         // console.log('LETRA OU nÚMERO ISOLADO: ' + monomios[m].numero[oc])
   
          
           if (numerosrep.indexOf(monomios[m].numero[oc]) == -1) {
           numerosrep.push(monomios[m].numero[oc])
   
           for (u = 0; u < monomios.length; u++) { // OUTROS MOnÔMIOS
               ocs2 = []
   
               if(u != m) {
           
           
               
   
             // OCAS
             if(ocs2.find(function(ocs2) {
               return ocs2.ed == monomios[m].numero[oc]
               }) == undefined) {
                // console.log('====================')
                   ocs2.push({ed: monomios[m].numero[oc], el: 0})
   
                   ocs = 0
             for (ao = 0; ao < monomios[m].numero.length; ao++) {
             // console.log('AAAAAAAAAA' + monomios[m].numero[ao])
               if (monomios[m].numero[ao] == monomios[m].numero[oc]) {
                   ocs++
               }
             }
           }
             
             
             for (e = 0; e < monomios[u].numero.length; e++) { // CADA LETRA DE CADA MOnÔMIO
             
               
               if (monomios[u].numero[e] == monomios[m].numero[oc]) {
                 //  
   
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
                           //
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
                                   ////
                             // }
                       }
                   
                   //
                   //
               }else{
                   
               }
               //
             }
           }
           }
           //
       }
       }
       }
      
       
       reps.push(repetido)
   
       
       for (nope in repetido) {
       if (repetido[nope].letr[0] == '-') {
           
           la = ''
           for (u in repetido[nope].letr) {
               if (u != 0 && u != 1) {
                   la+= repetido[nope].letr[u]
               }
           }
           
           if (repetido.find(function(repetido){
               return repetido.letr == la
           })) {
               
               repetido.splice(nope, 1)
               
           }
       }
   }
   
   
       //
       
           for (moe = repetido.length - 1; moe >= 0; moe--) {
              
               if (segs.find(function(segs) {
                   return segs.car == repetido[moe].letr
                   }) == undefined) {
   
                    // console.log('WHAT YOU HAVE IN YOUR MIND?????????????????????huh????????',repetido[moe].letr)
                      if (repetido[moe].letr == '-' || repetido[moe].letr == '1') {
                          console.log('ARE YOU SERIOUS?')
                       }else{
                           segs.push({car: repetido[moe].letr, mons: [m]})
                       }
                 
                  
   
               }else if(segs.find(function(segs) {
                   return segs.car == repetido[moe].letr
                   }).mons.indexOf(m) == -1){
                 
                       
                       segs.find(function(segs) {
                           return segs.car == repetido[moe].letr
                           }).mons.push(m)
   
                           
               }
           }
           
   }
   
   
   //
   //
   
   
   for (nl = 0; nl < segs.length; nl++) {
       
       
       
   
      // console.log('AnALISAR CADA ITEM')
       
       for (n = 0; n < segs.length; n++) {
   
           
           if (n != nl) {
          // console.log(`${segs[n].car}.search('${segs[nl].car}')`)
           if (String(segs[n].car).search(String(segs[nl].car)) != -1) {
              
             //  console.log(`${segs[n].car}: ${segs[n].mons}`)
              // console.log(`${segs[nl].car}: ${segs[nl].mons}`)
   
               for (u in segs[n].mons) {
                  // console.log(segs[n].mons[u])
                   if (segs[nl].mons.indexOf(segs[n].mons[u]) != -1) {
                      // console.log('TEM')
                   }else{
                     
                    // console.log('O DEVTOOLS É A PIOR COISA QUE JÁ EXISTIU nESSE MUnDO', segs[nl].mons)
                       segs[nl].mons.push(segs[n].mons[u])
                     
                   }
               }
           }
           }
       
       }
   
   }
   

   function ehprimo(Number) {
       parar = false
       for (t = 2; t < Number && parar == false; t++) {
       
           if (Number%t == 0) {
               parar = true
           }
       }
       if (parar) 
       return false
       else
       return true
   }
   
   
   ////
   
   
   grtols = []
   
   
   for (hi in segs) {
       ////
       segs[hi].length = segs[hi].mons.length
   
       grtols.push(segs[hi])
   }
   
   ////
   ////
   organizado = sortob(grtols, 'length')[1]
   
   grtols = []
   for (ah in organizado) {
      // //
       grtols.push(segs[organizado[ah]])
      
   }
   
   ////
   segs = grtols
   
  
   //DIVS
   ml = monomios.length
   ////
   
   divs = ehprimo2(ml)
   ////
   
   for (n in divs) {
       ////
       
   }
   
   if (divs.length == 0) {
   divs = [1]
   }
   

   goaway = []
   for (nah in segs) {
    
       console.log(segs[nah].car)
       if (segs[nah].car[0] == '-') {
        console.log('NEGATIVO')
        semmenos = ''
        for (memories in segs[nah].car) {
            console.log(segs[nah].car[memories])
            if (memories != 0 && memories!= 1){
             semmenos+= segs[nah].car[memories]
            }
        }
        console.log('pesquisar:', semmenos)
        console.log(segs.find(function(segs) {return segs.car == semmenos}))
        if (segs.find(function(segs) {return segs.car == semmenos}) != undefined) {
            goaway.push(Number(nah))
        }
       }
   }
   console.log('TIRAR TUDO')
   console.log(goaway)

   for (time = segs.length - 1; time >= 0; time--) {
    console.log(time, segs[time])
    if (goaway.indexOf(time) != -1) {
        console.log('TIRAR')
        segs.splice(time, 1)
        }
   }

   //divs = [2,3]
   
   ////
   ////
   
   
       ////
   
       //
   
    
   
       //const HATEYOU = []
       //for (HATEDEVTOOLS in segs) {
          
         //  console.log(segs[HATEDEVTOOLS].mons)
           //HATEYOU.push(segs[HATEDEVTOOLS])
      // }
       
      
      for (tie in segs) {
      // console.log(segs[tie])
       segs[tie].godhelpme = [...segs[tie].mons]
      }
     
      okentao = 0
      // for (okentao in divs) {
           roll = [] 
   
          // console.log('nAOOOOOOOOOOOOOOOOOOOOOOsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', n)
           //const vi = 0
           scarecrow = []
           for(anchor in segs) {
              // console.log('i feel the light betrayed me', segs[anchor].mons)
               
           
               army = []
               lpisthebest = ''
                   for (fall in segs[anchor].car) {
                   if (lpisthebest.length == 0) {
                       
                       lpisthebest = segs[anchor].car[fall]
                       
                   }else if(lpisthebest.search('[0-9]') != -1 && segs[anchor].car[fall].search('[0-9]') != -1) {
                       
                       lpisthebest += segs[anchor].car[fall]
                   }else{
                       
                       army.push(lpisthebest)
                       if(segs[anchor].car[fall] != '.') {
                       lpisthebest = segs[anchor].car[fall]
                       }else{
                           if (segs[anchor].car[Number(fall) + 1].search('[0-9]') != -1) {
                           lpisthebest = '*'
                           }else{
                               lpisthebest = ''
                           }
                       }
                  //
                   }
                   if (fall == segs[anchor].car.length - 1) {
                       army.push(lpisthebest)
                   }
               }
               bell = [...army]
              // console.log('OAHAHA', army)
   
              // console.log(army, '_____________YOU HAVE TO FIX WHAT YOU DID WRONG!_______________')
               
               for (pahh in army) {
                  // console.log(army[pahh])
                   if (army[pahh] == '*') {
                       army[pahh] = '.'
                   }
               }
               scarecrow.push({divididos: [], outrodiv: [], poss: [...segs[anchor].mons], divisor: [...army], positions: [...segs[anchor].mons]})
               for (high in segs[anchor].mons) {
                   
                  
                   army = [...bell]
            
                //   console.log(monomios[segs[anchor].mons[high]].numero,army)
           
               
                lightson = [...army]
                   pain = DIVIDIR(army,monomios[segs[anchor].mons[high]].numero)
                   
   
                   if (pain.length == 0 || pain.search('([0-9]|[a-z)])') == -1) {
                  
                  if (lightson.indexOf('-') != -1 && monomios[segs[anchor].mons[high]].numero.indexOf('-') == -1) {
   
                      pain = '-1'
                     // console.log('opa')
                      scarecrow[anchor].divididos.push('1')
                       scarecrow[anchor].outrodiv.push(pain)
                  }else if(lightson.indexOf('-') == -1 && monomios[segs[anchor].mons[high]].numero.indexOf('-') != -1) {
                      
                       pain = '-1'
                     //  console.log('opa')
                       scarecrow[anchor].divididos.push('1')
                       scarecrow[anchor].outrodiv.push(pain)
                  }else{
                   pain = '1'
                   scarecrow[anchor].divididos.push(pain)
                       scarecrow[anchor].outrodiv.push(pain)
                  }
                   
   
                   }else{
           
                       right = ''
                       for (feet in pain) {
                         //  console.log(pain[feet])
                           if (pain[feet] != '+') {
                               right+= pain[feet]
                           }
                       }
                    //   console.log('É ESSE:', right)
                      
                       uy = ''
                     //  console.log(right, 'RIGHT') 
   
                      for (xarope in right) {
                    //   console.log(right[xarope])
                       if (xarope == 0 && right[xarope] == '*') { // *2
                      //   console.log('ERRADO!', '*2')
                       }else if(xarope == right.length - 1 && right[xarope] == '*'){ // 2*
                     // 
                       }else if(right[xarope] == '*' && String(right[Number(xarope) + 1]).search('[0-9]') == -1){ // 2*x
                    //  
                       }else if(right[xarope] == '*' && String(right[Number(xarope) - 1]).search('[0-9]') == -1){ // x*2
                      //
                       }else{
                           uy+= right[xarope]
                       }
                      }
                      
                      scarecrow[anchor].outrodiv.push(uy)
   
                      if (uy[0] == '-') {
                       holdon = ''
                       for (qual in uy) { 
                           if (uy[qual] != '-')
                           holdon+= uy[qual]
                       }
                       
                       uy = holdon
                      }
                      scarecrow[anchor].divididos.push(uy)
                   }
                  
               }
           }
      
          miss = []
   
          for (ah in scarecrow) {
              
              for (é in scarecrow[ah].divididos) {
                  
              if (miss.find(function(miss){return miss.dividido == scarecrow[ah].divididos[é]}) == undefined) {
               miss.push({dividido: scarecrow[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow[ah].divisor})
              }else{
               miss.find(function(miss){return miss.dividido == scarecrow[ah].divididos[é]}).aparicoes.push(Number(ah))
              }
           }
          }
   
          
          quantosfatores = Number(monomios.length)/Number(divs[okentao])
          quantasposições = Number(monomios.length)/Number(quantosfatores)
   
         // console.log('número de fatoes:', quantosfatores, '     número de posições:', quantasposições)
   
   // ORDEnAnO O MISS DE ACORDO COM O TAMAnHO DO APARIÇÕES
   
          grtols = []
   for (hi in miss) {
       ////
       miss[hi].length = miss[hi].aparicoes.length
   
       grtols.push(miss[hi])
   }
   organizado = sortob(grtols, 'length')[1]
   
   grtols = []
   for (ah in organizado) {
      // //
       grtols.push(miss[organizado[ah]])
      
   }
   miss = [...grtols]
   //
   deucerto = false
   java = 0
   
   
   
   
   while(java < miss.length && deucerto == false) {
              
             // if (miss[java].aparicoes.length >= quantasposições) {
           //    console.log('')
        //   console.log('SEnDO AnALISADO nO MOMEnTO', miss[java].aparicoes)
   
           podeser = []
           for (outro in miss) {
              // console.log('')
               if (outro != java /*&& miss[outro].aparicoes.length >= quantasposições*/) {
               //   console.log(miss[outro], outro)
   
                   presentes = []
                   for (quecoisa in miss[outro].aparicoes) {
                       fatorzinho = miss[outro].aparicoes[quecoisa]
                    //   console.log('FATORZINHO', fatorzinho, 'MISS[JAVA]', miss[java].aparicoes)
   
                       if (miss[java].aparicoes.indexOf(fatorzinho) != -1) {
                    //   console.log('TEM', fatorzinho)
                           presentes.push(fatorzinho)
                       }
                   }
                 //  console.log('OLHA', presentes)
   
                   adicionou = false
                   for (idk in podeser) {
                    //   console.log(podeser[idk])
                       esigual = true
                       for (denovo in podeser[idk].opl) {
                          // console.log(podeser[idk].opl[denovo], presentes[denovo])
                           if (podeser[idk].opl[denovo] == presentes[denovo]) {
                              // console.log('É IGUAL')
                           }else{
                               esigual = false
                           }
                       }
                       if (esigual == true) {
                           podeser[idk].position.push(outro)
                           adicionou = true
                       }
                   }
                   if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                       podeser.push({opl: presentes, position: [outro]})
                   }
                   
               }
              }
              
              
              
              for (belief in podeser) {
                  if (podeser[belief].position.indexOf(java) == -1) {
                  podeser[belief].position.push(String(java))
                  }
   
               
   
               shot = ''
               for (gun in podeser[belief].opl) {
                   
                   shot+= podeser[belief].opl[gun] + ','
               }
              // console.log('THAT WE LET IT GO:', shot)
   
               if (roll.length == 0) {
                  // console.log('ADICIONAR(LISTA VAZIA)')
                   roll.push({repetidos: [...podeser[belief].opl], way: shot, posições: [...podeser[belief].position]})
               }else if(roll.find(function(roll){return roll.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
                   
                  
   
                   for (capital in podeser[belief].position) {
                       
   
                     // console.log(roll.find(function(roll){return roll.way == shot}).posições, roll.find(function(roll){return roll.way == shot}).posições.indexOf(podeser[belief].position[capital]),podeser[belief].position[capital])
   
                   if (roll.find(function(roll){return roll.way == shot}).posições.indexOf(podeser[belief].position[capital])== -1) {
                      
                      roll.find(function(roll){return roll.way == shot}).posições.push(podeser[belief].position[capital])
                   }
                   }
   
               }else{
                   
                   roll.push({repetidos: [...podeser[belief].opl], way: shot, posições: [...podeser[belief].position]})
               }
              }
   
              
              whyis = java
              if (podeser.length > 0) {
                  
                  
   
                  for(cold in podeser) {
              if (podeser[cold].position.length == quantosfatores && podeser[cold].opl.length == quantasposições && miss[whyis].aparicoes.length == quantasposições) {
              // console.log('É ISSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
               deucerto = true
   
               ficaassim = ''
              // podeser[cold].position.push(whyis)
   
               for (yehaa in podeser[cold].position) {
                 //  console.log(podeser[cold])
                  // console.log(miss[podeser[cold].position[yehaa]].dividido)
                   if (miss[podeser[cold].position[yehaa]].dividido[0] == '-') {
                       
                       fi = ''
                       for (ohjesus in miss[podeser[cold].position[yehaa]].dividido) {
                           if (miss[podeser[cold].position[yehaa]].dividido[ohjesus] != '-') {
                               fi+= miss[podeser[cold].position[yehaa]].dividido[ohjesus]
                           }
                       }
                     //  console.log(fi)
                       if (yehaa != 0) {
                            ficaassim += ` - ${fi}`
                       }else{
                           ficaassim += `-${fi}`
                       }
                   }else if(yehaa != 0){
                       ficaassim += ' + '
                       ficaassim+= miss[podeser[cold].position[yehaa]].dividido
                   }else{
                       ficaassim+= miss[podeser[cold].position[yehaa]].dividido 
                   }
                   
               
               }
              // console.log('FICA ASSIM', `(${ficaassim})`)
              for (ruin in podeser[cold].opl) {
             //  console.log(scarecrow[podeser[cold].opl[ruin]].divisor)
               emotion = ''
               for (scream in scarecrow[podeser[cold].opl[ruin]].divisor ) {
              //
                   emotion+= scarecrow[podeser[cold].opl[ruin]].divisor[scream]
               }
             //  console.log(`${emotion}(${ficaassim})`)
             }
              }
           }
   
           }
   
            //  }
              
            //  console.log('continuar', miss[java])
   
              java++
          }
          okentao++
   
   
          
          for (nao in roll) {
             // console.log('-------------------------------------------------------------------')
          // console.log('esse é o negócio',roll[nao].repetidos)
           
          // console.log('---------------------------------------------')
         //  console.log('ANALISANDO O MISS')
   
          
               shot = ''
               for (gun in roll[nao].repetidos) {
                   
                   shot+= roll[nao].repetidos[gun] + ','
               }
   
           for (whyso in miss) {
               
               igual = 0
               for (heat in miss[whyso].aparicoes) {
                   
                   if (roll[nao].repetidos.indexOf(miss[whyso].aparicoes[heat]) != -1) {
                     //  console.log('TEM')
                       igual++
                   }
               }
              // console.log('HÁ', igual, 'numero repetidos')
               if (igual == roll[nao].repetidos.length) {
                  // console.log('TEM SIMMMMMMMMMMMMMMM', whyso)
                     // console.log(roll.find(function (roll){return roll.way == shot}).posições)
   
                      if (roll.find(function (roll){return roll.way == shot}).posições.indexOf(whyso) != -1) {
                       
                   }else{
                     //  console.log('ADICIONAR EFETIVAMENTE')
                       roll.find(function (roll){return roll.way == shot}).posições.push(whyso)
                   }
               }
                 // console.log('THAT WE LET IT GO:', shot)
                  
               }
           }
           
          
         //  console.log('ROOLLLLLLLLLLLLLLLLLLLLLLLLLLL', roll)
   
   
         
         for (ne in roll) {
          //for (ne = 0; ne < 1; ne++) {
             
           
           
           
   
           arranjar = []
           for (pq in roll[ne].repetidos) {
               gosto = roll[ne].repetidos[pq], scarecrow[roll[ne].repetidos[pq]].divididos
               
               arranjar.push({pos: pq, ocupa: [], origin: gosto})
   
           for (moon in roll[ne].posições) {
   
              
               vaiir = scarecrow[gosto].outrodiv[scarecrow[gosto].divididos.indexOf(miss[roll[ne].posições[moon]].dividido)]
               
   
              arranjar[pq].ocupa.push(vaiir)
           }
       }
       
       
       
       jafoi = []
       
       perfectwave = []
       for (tosse in arranjar) {
   
           if (jafoi.indexOf(tosse) == -1) {
               organizer = {agrupar: [tosse], referencia: arranjar[tosse].ocupa}
          // console.log('___________________________________________')
          // console.log(tosse, arranjar[tosse].ocupa)
         //  console.log('')
         
           for (calor in arranjar) {
       
               if (calor != tosse) {
                  // console.log('------------------------------')
                   
   
                   equals = true
                   igualar =[]
                   for (boring in arranjar[calor].ocupa) {
                       sendocomparado = arranjar[calor].ocupa[boring]
                       comparador= arranjar[tosse].ocupa[boring]
                     //  console.log(sendocomparado, '=>', comparador)
                      // console.log(sendocomparado[0],'==', comparador[0])
                       if (sendocomparado[0] != comparador[0]) {
                         //  console.log(true)
                           igualar.push(true)
                       }else{
                          // console.log(false)
                           igualar.push(false)
                       }
                   }
                  // console.log('igualar:', igualar)
                   if (igualar.indexOf(false) == -1 || igualar.indexOf(true) == -1) {
                       
                       jafoi.push(calor)
                       organizer.agrupar.push(calor)
   
                   }
               }
           }
           perfectwave.push(organizer)
       }
       }
       
      // console.log(roll[ne].posições)
       for (youchoose in perfectwave) {
           
           
           ficarassim =  perfectwave[youchoose].referencia
   
           for (catraca in perfectwave[youchoose].agrupar) {
               
               presa = perfectwave[youchoose].agrupar[catraca]
             
              // console.log(perfectwave[youchoose].agrupar[catraca], arranjar[presa].origin)
              // console.log(scarecrow[arranjar[presa].origin].divisor)
   
               diferente = false
               for (moon in roll[ne].posições) {
   
                  // console.log(roll[ne].posições[moon], miss[roll[ne].posições[moon]].dividido, scarecrow[arranjar[presa].origin].divididos)
                   vaiir = scarecrow[arranjar[presa].origin].outrodiv[scarecrow[arranjar[presa].origin].divididos.indexOf(miss[roll[ne].posições[moon]].dividido)]
                  // console.log(vaiir, ficarassim[moon])
                   if (vaiir != ficarassim[moon]) {
                       diferente = true
   
                       
                      
   
                      scarecrow[arranjar[presa].origin].outrodiv[scarecrow[arranjar[presa].origin].divididos.indexOf(miss[roll[ne].posições[moon]].dividido)] = ficarassim[moon]
                   }
       
                 
               }
              // console.log('SOME LIKE TO PLAY, I LIKE TO CODE')
               if (diferente == true) {
                   
   
                   lista = scarecrow[arranjar[presa].origin].divisor
                   if (lista != '-') {
                       
                       modificar = ['-','.']
                       for (saved in lista) {
                          // console.log(lista[saved])
                           modificar.push(lista[saved])
                       }
                      // console.log(modificar)
                       scarecrow[arranjar[presa].origin].divisor = modificar
                   }else{
                       lista.splice(0,2)
                   }
               }
           }
       }
         }
   
        // console.log('OKAY, LET\'S DO IT!')
         for (sei in scarecrow) {
           
           
           for (ai in scarecrow[sei].divididos) {
               
               scarecrow[sei].divididos[ai] = scarecrow[sei].outrodiv[ai]
           }
         }
   
         miss = []
   
         for (ah in scarecrow) {
             
             for (é in scarecrow[ah].divididos) {
                 
             if (miss.find(function(miss){return miss.dividido == scarecrow[ah].divididos[é]}) == undefined) {
              miss.push({dividido: scarecrow[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow[ah].divisor})
             }else{
              miss.find(function(miss){return miss.dividido == scarecrow[ah].divididos[é]}).aparicoes.push(Number(ah))
             }
          }
         }
         
   
         java = 0
         roll = []
         deucerto = false
   
         while(java < miss.length && deucerto == false) {
           
   
         podeser = []
         for (outro in miss) {
            // console.log('')
             if (outro != java /*&& miss[outro].aparicoes.length >= quantasposições*/) {
                
   
                 presentes = []
                 for (quecoisa in miss[outro].aparicoes) {
                     fatorzinho = miss[outro].aparicoes[quecoisa]
                    
   
                     if (miss[java].aparicoes.indexOf(fatorzinho) != -1) {
                     
                         presentes.push(fatorzinho)
                     }
                 }
                 
   
                 adicionou = false
                 for (idk in podeser) {
                    // console.log(podeser[idk])
                     esigual = true
                     for (denovo in podeser[idk].opl) {
                         
                         if (podeser[idk].opl[denovo] == presentes[denovo]) {
                            // console.log('É IGUAL')
                         }else{
                             esigual = false
                         }
                     }
                     if (esigual == true) {
                         podeser[idk].position.push(outro)
                         adicionou = true
                     }
                 }
                 if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                     podeser.push({opl: presentes, position: [outro]})
                 }
                 
             }
            }
           // console.log('ESSE É O PODESERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', podeser)
            
            
            for (belief in podeser) {
                if (podeser[belief].position.indexOf(java) == -1) {
                podeser[belief].position.push(String(java))
                }
   
             
   
             shot = ''
             for (gun in podeser[belief].opl) {
                 
                 shot+= podeser[belief].opl[gun] + ','
             }
            // console.log('THAT WE LET IT GO:', shot)
   
             if (roll.length == 0) {
                // console.log('ADICIONAR(LISTA VAZIA)')
                 roll.push({repetidos: [...podeser[belief].opl], way: shot, posições: [...podeser[belief].position]})
             }else if(roll.find(function(roll){return roll.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
                 
                
   
                 for (capital in podeser[belief].position) {
                     
   
                   // console.log(roll.find(function(roll){return roll.way == shot}).posições, roll.find(function(roll){return roll.way == shot}).posições.indexOf(podeser[belief].position[capital]),podeser[belief].position[capital])
   
                 if (roll.find(function(roll){return roll.way == shot}).posições.indexOf(podeser[belief].position[capital])== -1) {
                    
                    roll.find(function(roll){return roll.way == shot}).posições.push(podeser[belief].position[capital])
                 }
                 }
   
             }else{
                 
                 roll.push({repetidos: [...podeser[belief].opl], way: shot, posições: [...podeser[belief].position]})
             }
            }
   
            
            whyis = java
            if (podeser.length > 0) {
                
                
   
                for(cold in podeser) {
            if (podeser[cold].position.length == quantosfatores && podeser[cold].opl.length == quantasposições && miss[whyis].aparicoes.length == quantasposições) {
            // console.log('É ISSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
             deucerto = true
   
             ficaassim = ''
             podeser[cold].position.push(whyis)
   
             for (yehaa in podeser[cold].position) {
                // console.log(podeser[cold])
                 
                 if (miss[podeser[cold].position[yehaa]].dividido[0] == '-') {
                     
                     fi = ''
                     for (ohjesus in miss[podeser[cold].position[yehaa]].dividido) {
                         if (miss[podeser[cold].position[yehaa]].dividido[ohjesus] != '-') {
                             fi+= miss[podeser[cold].position[yehaa]].dividido[ohjesus]
                         }
                     }
                    // console.log(fi)
                     if (yehaa != 0) {
                          ficaassim += ` - ${fi}`
                     }else{
                         ficaassim += `-${fi}`
                     }
                 }else if(yehaa != 0){
                     ficaassim += ' + '
                     ficaassim+= miss[podeser[cold].position[yehaa]].dividido
                 }else{
                     ficaassim+= miss[podeser[cold].position[yehaa]].dividido 
                 }
                 
             
             }
             
            for (ruin in podeser[cold].opl) {
            // console.log(scarecrow[podeser[cold].opl[ruin]].divisor)
             emotion = ''
             for (scream in scarecrow[podeser[cold].opl[ruin]].divisor ) {
           // console.log(scarecrow[podeser[cold].opl[ruin]].divisor[scream])
                 emotion+= scarecrow[podeser[cold].opl[ruin]].divisor[scream]
             }
            // console.log(`${emotion}(${ficaassim})`)
           }
            }
         }
   
         }
   
          //  }
   
            java++
        }
   
   
   
   
   
   
   
   
          youdumb = []
   
           aswillbe2 = []
           for (raging = 0; raging < roll.length; raging++) {
   
               asitwas = [] 
           
               obe = {what:[]}
   
             //  console.log('')
              // console.log(roll[raging].repetidos, roll[raging].posições)
   
              
           
              for (still in roll[raging].repetidos) {
               asitwas2 = []
               aswillbe = []
   
              //    console.log('')
            //   console.log(scarecrow[roll[raging].repetidos[still]].divisor, still)
   
               mylife = '('
               for (still2 in roll[raging].posições) {
   
                   if (still != 0) {
                   mylife+= ' + ' + miss[roll[raging].posições[still2]].dividido
                   }else{
                       mylife+= miss[roll[raging].posições[still2]].dividido
                   }
   
                 
                 //  console.log(miss[roll[raging].posições[still2]].dividido)
   
                   conseguiu = false
                   older = 0
                   while (older < monomios.length && conseguiu == false) {
                   DESFATORAR(monomios[older].numero, scarecrow[roll[raging].repetidos[still]].divisor, miss[roll[raging].posições[still2]].dividido)
                   
                   
                   // correto == ['2','*','10','x'] (NÚMERO QUE VAI SER COMPARADO)
                   // eg2 == ['10'] (NÚMERO QUE VAI MULTIPLICAR)
                   // eg == '2x' (NÚMERO QUE VAI SER MULTIPLICADO)
                   
                   function DESFATORAR(correto, eg2, eg) {
   
                   //    console.log('eg', eg)
   
                   eassim = []
                   solo = ''
                   for (ne in eg) {
                       
                       if (eg[ne] != '.') {
                   if (solo.length == 0) {
                       
                       solo+= eg[ne]
                   }else if(String(solo.search('[0-9]')) != -1 && String(eg[ne]).search('[0-9]') != -1){
                       
                       solo+= eg[ne]
                   }else{
                       eassim.push(solo)
                       solo = ''
                       solo += eg[ne]
                       
                   }
                   if (ne == eg.length - 1) {
                       eassim.push(solo)
                   }
                       }else{
                      
                       }
                   }
                   
                   eg = eassim
                   
                   
                   whythat = [...eg]
                 //  console.log(correto)
                 /*
                   for (ponto in eg2) {
                     //  console.log(eg2[ponto])
                       if (eg2[ponto] != '.') {
                       whythat.push(eg2[ponto])
                     //  console.log('I FOLLOW YOu')
                       }
                   }
                   */
                  teri = false
                   juntar = ''
                   for (estudar in eg2) {
                  
                       if (eg2[estudar] == '.') {
                           teri = true
                           if (eg2[Number(estudar) + 1].search('[0-9]') != -1) {
                             
                               whythat.push(juntar)
                               juntar = ''
                           whythat.push('*')
                          
                           }
                       }else{
                          
                      
                    
                           if (juntar.length == 0) {
                               juntar = eg2[estudar]
                         
                               if (estudar == eg2.length - 1) {
                                   whythat.push(juntar)
                              
                               }
   
                           }else if(eg2[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                          
                               juntar+= eg2[estudar]
                          
                               if (estudar == eg2.length - 1) {
                              
                                   whythat.push(juntar)
                               
                               }
                           }else{
                               whythat.push(juntar)
                               juntar= eg2[estudar]
                               if (estudar == eg2.length - 1) {
                                   whythat.push(juntar)
                               }
                           }
                       }
                         
                    }
                    if (teri == false) {
                     whythat = []
                  
                       for (t in eg2) {
                       whythat.push(eg2[t])
                       }
                       for (t in eg) {
                           whythat.push(eg[t])
                       }
                   }
   
         // console.log('MULTIPLICAR', eg2,'*',eg)
          // console.log('YOU ARE YES AND YOU ARE NO---------',whythat)
                   
                   numerinhos = []
                   for (decisao in correto) {
                       if (correto[decisao] != '*' && correto[decisao] != '.' && correto[decisao] != '+' && correto[decisao] != '-') {
                          numerinhos.push(correto[decisao])
                          
                           }
                  
                   }
                  
                       thatway = [...numerinhos]
   
   
                       for (poder in whythat){
                           if (whythat[poder] != '*' && whythat[poder] != '.' && whythat[poder] != '+' && numerinhos.indexOf(whythat[poder]) != -1) {
                      
                      
                           numerinhos.splice(numerinhos.indexOf(whythat[poder]),1)
   
                           }
                       }
   
                       for (pombo = whythat.length - 1; pombo >= 0; pombo--){
                      
                           if (whythat[pombo] == '*' || whythat[pombo] == '1') {
                          
                               whythat.splice(pombo,1)
                         
                           }
                           
                       }
   
                  
                  
                  
   
                
                     
                
   
                     for (pray = whythat.length - 1; pray>=0 ; pray--) {
                  
                       if (whythat[pray] == '-')
                       whythat.splice(pray, 1)
                     }
   
                       if (numerinhos.length == 0 && thatway.length == whythat.length) {
                      
                           conseguiu = true
                       }
                   }
                   older++
                   }
             
             
          
                  asitwas.push(older - 1)
                  asitwas2.push(older - 1)
                  aswillbe.push(older - 1)
                  
              }
           
   
         
             // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', asitwas)


              obe.what.push({ar: asitwas2, indice: still})
              aswillbe2.push({oque:aswillbe, onde:raging})
              
           }
           
           youdumb.push({mons: asitwas, rag: raging, w: obe, polen: raging})
      
          }
   
    
          
           dontworry = []
           for (behappy in youdumb) {
   
          
          
   
               
               for (armenia in youdumb) {
                   
                   if (armenia != behappy) {
              
   
                   doeshave = true
                   for (sofar in youdumb[armenia].mons) {
                  
                       if (youdumb[behappy].mons.indexOf(youdumb[armenia].mons[sofar]) == -1) {
                           doeshave = false
                          
                       }
                   }
              
                   if (doeshave == true) {
              
                  if (dontworry.indexOf(behappy) == -1) {
                   dontworry.push(armenia)
                  }
                   }
               }
   
               }
             
           }
   
           
           for (da = youdumb.length - 1; da >= 0; da--) {
               if (dontworry.indexOf(String(da)) != -1) {
              
                  // youdumb.splice(da,1)
               }
           }
           
   
           grtols = []
   
   
       
   for (hi in youdumb) {
      // console.log(segs[hi], segs[hi].mons.length)
       youdumb[hi].length = youdumb[hi].mons.length
   
       grtols.push(youdumb[hi])
   }
   
   
   
   
   
   organizado = sortob(grtols, 'length')[1]
   
   grtols = []
   for (ah in organizado) {
      
       grtols.push(youdumb[organizado[ah]])
      
   }
        
   
   
   youdumb = []
   for (erro in grtols) {
      
       youdumb.push(grtols[erro])
   }
   
   
   
   
   /*
   for (yourlife in grtols) {
   
       console.log(grtols[yourlife].w.what)
   
       for (bolinho in grtols[yourlife].w.what) {
      
   
           vagem = grtols[yourlife].w.what[bolinho]
           for (ahnao in vagem) {
          
           }
       }
   }
   */
   
   pans = []
   numerospresentes = []
   
   
   for (AH in youdumb) {
       
   }
   for (wrecked in youdumb) {
       
       initial = youdumb[wrecked].w.what
       for (agg in initial) {
      
       }
   }
   
   heya = [...youdumb]
   for (imback in youdumb) {
      // console.log('AAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', imback)
   
       sticky = []
       initial = youdumb[imback].w.what
   
     
   
       if (initial.length > 0) {
       inside = {which: [], numberyoudumb: youdumb[imback].polen}
      
       
   
   
       
       
       
       for (agg in initial) {
      
   
           taai = false
            for (eng in initial[agg].ar) {
              // console.log(initial[agg].ar[eng])
               if (numerospresentes.indexOf(initial[agg].ar[eng]) == -1) {
              
                  
               }else{
          
                   taai = true
               }
            }
        
            if (taai == false) {
          
               inform = {monos: initial[agg].ar, numberwhat: initial[agg].indice} 
              
          
               inside.which.push(inform)
          
               for (darkening in inform.monos) {
                  
                   sticky.push(inform.monos[darkening])
               }
          
   
               for (eng in initial[agg].ar) {
               
                   numerospresentes.push(initial[agg].ar[eng])
                  
                }
           
            }
       }
   
       
       if (inside.which.length > 0) {
           inside.todos = sticky
    pans.push(inside)
       }
   
       //youdumb.splice(imback, 1)
       
       /*
       for (invest in pans) {
      
           for (plat in pans[invest].which) {
          
           }
       }
       */
       
      // youdumb.splice(imback, 1)
       for (h in youdumb) {
   
           if (h != imback) {
               if (youdumb[h].w.what.length > 0) {
         //  console.log(youdumb[h].w.what, h)
               }
   
           
           for (tempo = youdumb[h].w.what.length - 1; tempo >= 0; tempo--) {
           //  console.log(youdumb[h].w.what[tempo].ar, tempo)
               
               dulu = false
               
              for (and in youdumb[h].w.what[tempo].ar) {
              // console.log(youdumb[h].w.what[tempo].ar[and])
               if (numerospresentes.indexOf(youdumb[h].w.what[tempo].ar[and]) != -1) {
                 //  console.log('ESTÁ EM: ', numerospresentes)
                   dulu = true
               }
              }
              if (dulu == false) {
             //  console.log('PODE FICAR :)', h, tempo)
              }else{
            //
             // youdumb[h].w.what.splice(tempo, 1)
             //imback++
         //    console.log('IMBAACK',imback)
              }
          }
       }
       }
       
       
   
     
    
      // console.log('OLHA, eu tentei...', youdumb.length)
       for (vixi in youdumb) {
        
        // if (youdumb[vixi].w.what.length > 0) {
          // console.log('aaa',youdumb[vixi].w.what)
           for (ainao in youdumb[vixi].w.what) {
           // console.log('AI NÃO',youdumb[vixi].w.what[ainao].ar)
           
             
       }
   //}
   }
   
   for (força in youdumb) {
      // console.log(força, youdumb[força],youdumb[força].w.what.length)
       entao = []
       for (areo in youdumb[força].w.what) {
          // console.log(areo,youdumb[força].w.what[areo].ar)
           for (paris in youdumb[força].w.what[areo].ar) {
              // console.log(paris,youdumb[força].w.what[areo].ar[paris])
               entao.push(Number(youdumb[força].w.what[areo].ar[paris]))
           }
       }
      // console.log(entao)
       youdumb[força].t = entao
      // console.log(youdumb[força].t)
    }
   
   
   
   
   grtols = []
   
   
       
   for (hi in youdumb) {
       ////
       youdumb[hi].length = youdumb[hi].t.length
   
       grtols.push(youdumb[hi])
   }
   
   ////
   ////
   
   
   organizado = sortob(grtols, 'length')[1]
   
   grtols = []
   for (ah in organizado) {
      // //
       grtols.push(youdumb[organizado[ah]])
      
   }
   
   youdumb = []
   for (erro in grtols) {
      // console.log('RAINY DAY',grtols[erro])
       youdumb.push(grtols[erro])
   }
   
   
   
   }
   
   }
   console.log('pans é', pans)
   concatenar = ''
   numsdesfat = []
   newexpress = []

   for (bababa in pans) {
      
       
       edge = []
       naonao = ''
       amount = []
   
     
      
      
    
   
         tobreak = ''
         realife = []
         amontoado = []
         for (quassao in roll[pans[bababa].numberyoudumb].posições) {
      
   
           el = miss[roll[pans[bababa].numberyoudumb].posições[quassao]].dividido
   
      
   
           gates = []
   
           quase = []
         
           teri = false
           juntar = ''
         //  console.log('NADAAAAAAAAAA')
           for (estudar in el) {
          
               if (el[estudar] == '*') {
                   teri = true
                   if (el[Number(estudar) + 1].search('[0-9]') != -1) {
                     
                       quase.push(juntar)
                       juntar = ''
                   quase.push('*')
              
                   }
               }else{
                  
              
            
                   if (juntar.length == 0) {
                       juntar = el[estudar]
                  
   
                       if (estudar == el.length - 1) {
                           quase.push(juntar)
                       }
   
                   }else if(el[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                  
                       juntar+= el[estudar]
                  
                       if (estudar == el.length - 1) {
                      
                           quase.push(juntar)
                       }
                   }else{
                       quase.push(juntar)
                       juntar= el[estudar]
                       if (estudar == el.length - 1) {
                           quase.push(juntar)
                       }
                   }
               }
                 
            }
       
   
            if (teri == false) {
               
               quase = []
             //  console.log('SEM ASTERISCO')
               for (t in el) {
               quase.push(el[t])
               }
           }
           aconta = ''
           friend = ''
   
          elevar = 1
          aster = false
          
          
           for (patience in quase) {
               
              
               if (quase[patience] == '*') {
                   aster = true
                  // console.log('AND THE CLSDADWDWD', patience)
                  // console.log(quase[Number(patience) - 1], quase[Number(patience) + 1])
                   gates.push(quase[Number(patience) - 1])
                   gates.push('x')
                   gates.push(quase[Number(patience) + 1])
                   
   
                  
                   quase[Number(patience) + 1] = fazerConta(gates)[0]
                   aconta = fazerConta(gates)[0]
                   friend = fazerConta(gates)[0]
                   
                 
                   gates = []
               }else if(quase[patience].search('[a-z]') != -1)  {
                  
                  friend+= quase[patience]
                   if (quase[patience] == quase[Number(patience) - 1]) {
                  
                       elevar++
   
                       if (patience == quase.length - 1) {
                         //  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                           aconta+= `^${elevar}`
                          // console.log(aconta)
                       }
   
                   }else{
                     
                       if (elevar > 1) {
                          // console.log('UEPA')
                           aconta+= `^${elevar}`
                           
                       }
   
                       aconta+= quase[patience]
                   
                      // console.log(aconta)
                     
                       elevar = 1
                   }
                 //  console.log(elevar)
                  
               } 
           }
         
           
           if (aster == false) {
           // console.log('<<<<<<<<<<<<<',quase)
            direitando = ''
            for (h in quase) {
                    direitando+= quase[h]
            }
            friend = direitando
           }


       if (aster == false) {
        //   console.log('SEM ASTERISCO',aconta)
           antes = ''
           for (eyes in quase) {
               
              // console.log(quase[eyes])
               if (quase[eyes].search('[0-9]') != -1) {
                  // console.log('CRY')
                   antes+= quase[eyes]
               }
           }
           antes+= aconta
          // console.log('ANTEEEES:', antes)
           
           aconta = antes
        
       }
       
   
       realife.push(aconta)
           if (tobreak.length == 0) {
              
              
               if(quase[0]== '-'){
               
                  negativo = true
               if (aconta[0] == '-') {
                //   console.log('PROBLEM')
                   mood = ''
                   for (member in aconta) {
                       
                       if (aconta[member] != '-') {
                          // console.log('PUSHAR')
                           mood+= aconta[member]
                       }
                   }
                   
                   tobreak+= `-${mood}`
               }else{
                   tobreak += `-${aconta}`
                   
               }
   
               }else{
                   negativo = false
                   tobreak+= aconta
                  // console.log('THIS IS ACONTA||||||||||||||||||||||||||||||||||||||||||', aconta)
                   for (now in aconta) {
                   // console.log(aconta[now])
                   }
               }
           }else if(quase[0]== '-'){
            
            negativo = true
               correct = ''
               for (okay in aconta) {
                  // console.log(el[okay])
                   if (aconta[okay]!= '-'){
                       correct+= aconta[okay]
                     //  console.log('MESS', aconta[okay])
                   }
               }
              // console.log('ASSIM: ', correct)
               tobreak+= ` - ${correct}`
               
           }else{
               negativo = false
             //  console.log(el)
               tobreak+= ` + ${aconta}`
               
           }
          // console.log('THE COLOURS THAT I SAW', tobreak)


         // console.log('CERTINHO?????vaaaaaaaaaaaaaaaaaaai', friend, negativo)
          // console.log(amontoado)
           
           if (negativo == true) {
          
           uh = ''
           for (i in friend) {
               if (friend[i] != '-') {
                   uh+= friend[i]
               }
           }
           amontoado.push('-')
           amontoado.push(uh)
           }else{
               amontoado.push('+')
               amontoado.push(friend)
           }
           
         }
         
   
       for (repr in pans[bababa].which) {
           
        //  console.log(' ')
           
            
   
            triste = scarecrow[roll[pans[bababa].numberyoudumb].repetidos[pans[bababa].which[repr].numberwhat]].divisor
            
   
            quase = []
           // console.log(quase, 'k')
            juntar = ''
            teri = false
            for (estudar in triste) {
             //  console.log('O QUE ESTÁ ACONTECENDO?', triste[estudar])
               
               ohjeez = triste[Number(estudar) - 1] != '-'
             //  console.log(ohjeez)
               if (triste[estudar] == '.') {
                   teri = true
                   if (triste[Number(estudar) + 1].search('[0-9]') != -1 && ohjeez == true) {
                     
                       quase.push(juntar)
                       juntar = ''
                   quase.push('*')
                 //  console.log(quase)
                   }
               }else{
                  
                   //quase.push(triste[estudar])
                // console.log('juntar',juntar)
                   if (juntar.length == 0) {
                       juntar = triste[estudar]
                      // console.log('LISTA VAZIA', juntar)
   
                       if (estudar == triste.length - 1) {
                           quase.push(juntar)
                       }
                      // console.log('MENMEN',quase)
   
                   }else if(triste[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
   
                    //  console.log('I\'M NEVER WHAT I LIKE')
                       juntar+= triste[estudar]
                    //   console.log('juntar', juntar)
                       if (estudar == triste.length - 1) {
                        //  console.log('UAISO')
                           quase.push(juntar)
                        //   console.log(quase)
                       }
                   }else{
                       quase.push(juntar)
                       juntar= triste[estudar]
                       if (estudar == triste.length - 1) {
                           quase.push(juntar)
                         //  console.log(quase)
                       }
                   }
               }
                 
            }
           // console.log('MAIS RÁPIDO',quase)
   
            if (teri == false) {
               
               quase = []
            //  console.log('SEM ASTERISCO')
               for (t in triste) {
               quase.push(triste[t])
               }
           }
   
            aconta = ''
            friend = ''
            aster = false
            elevar = 1
            
   
            for (patience in quase) {
               
   
               if (quase[patience] == '*') {
                   aster = true
                   
                   
                   gates.push(quase[Number(patience) - 1])
                   gates.push('x')
                   gates.push(quase[Number(patience) + 1])
                   
   
                   
                   quase[Number(patience) + 1] = fazerConta(gates)[0]
                   aconta = fazerConta(gates)[0]
                   friend = fazerConta(gates)[0]
                   
                 
                   gates = []
               }else if(quase[patience].search('[a-z]') != -1)  {
                  // console.log('É LETRA', quase[patience])
                    friend+= quase[patience]
                   if (quase[patience] == quase[Number(patience) - 1]) {
                       
                       elevar++
   
                       if (patience == quase.length - 1) {
                           
                           aconta+= `^${elevar}`
                           
                       }
   
                   }else{
                       if (elevar > 1) {
                         
                           aconta+= `^${elevar}`
                           
                       }
   
                       aconta+= quase[patience]
                      
                     
                       elevar = 1
                   }
                   
                  
               } 
           }
           

           if (aster == false) {
            // console.log('<<<<<<<<<<<<<',quase)
             direitando = ''
             for (h in quase) {
                     direitando+= quase[h]
             }
             friend = direitando
            }

           if (aster == false) {
             
              // console.log('SEM ASTERISCO2', aconta, quase)
   
               antes = ''
           for (eyes in quase) {
               
              // console.log(quase[eyes])
               if (quase[eyes].search('[0-9]') != -1) {
                  // console.log('CRY')
                   antes+= quase[eyes]
               }
           }
           antes+= aconta
          // console.log('ANTEEEES:', antes)
              // for (t in quase) {
              // aconta+= quase[t]
             //  }
             aconta = antes
           }
          // console.log(quase[0],'VAIIIIIIIIIIIIIIIIIIIIIIIIIIII', aconta)
   
          edge.push(aconta)

          if (quase[0] == '-') {
            uh = ''
            for (i in friend) {
                if (friend[i] != '-') {
                    uh+= friend[i]
                }
            }
            amount.push('-')
            amount.push(uh)
            
        }else{
            amount.push('+')
            amount.push(friend)
            
        }

           if (naonao.length == 0) {
               
               if (quase[0] == '-') {
                   naonao+= `-${aconta}`
                  
               }else{
                   naonao+= aconta
                   
               }
           }else{
               if (quase[0] == '-') {
                   naonao+= ` - ${aconta}`
                  
               }else{
                   naonao+= ` + ${aconta}`
                  
               }
           }
       }
   
       if (concatenar.length > 0) {
           concatenar+= ' + '
       }
       if (edge.length > 1) {
       console.log('                                ','( ',naonao,' )','( ',tobreak,' )','                         ')
       concatenar+= `( ${naonao} )( ${tobreak} )`
       }else{
           console.log('                            ',naonao,'( ',tobreak,' )','                          ')
           concatenar+= `${naonao}( ${tobreak} )`
       }

       console.log('ESSE É O AMONTOADO', amontoado)
       console.log('ESSE É O AMOUNT', amount)

     
   // FAZENDO A CONTA
      primeirocaso = SOMANDOMONOMIOS(amount)
      segundocaso = SOMANDOMONOMIOS(amontoado)

      mudou = false
      if (primeirocaso[1] == primeirocaso[2]) {
        console.log(primeirocaso[0], 'continua igual')
        
      }else{

          mudou = true
          console.log(amount,'=>',primeirocaso[0])
         
      }
   

      if (segundocaso[1] == segundocaso[2]) {
        console.log(segundocaso[0], 'continua igual')
      }else{

          mudou = true
        console.log(amontoado,'=>',segundocaso[0])
        
      }



      if (mudou == true) {
        naonao = primeirocaso[0]
        tobreak = segundocaso[0] 

      console.log('')
      console.log('SOMANDO FICA ASSIM:')

      console.log('')

      reason = []
      for (k in naonao) {
      // console.log(k, naonao[k])
        if (k != 0 && naonao[k] != '-' && naonao[k] != '+') {
            deserve = naonao[k - 1]
            reason.push(k - 1)
            deserve+= naonao[k]
            
            naonao[k] = deserve
        }
      }

    //  console.log('reason')
     
   for (time = naonao.length - 1; time >= 0; time--) {
    
    if (reason.indexOf(time) != -1) {
        
        naonao.splice(time, 1)
        }
   }
      

   reason = []
      for (k in tobreak) {
        
        if (k != 0 && tobreak[k] != '-' && tobreak[k] != '+') {
            deserve = tobreak[k - 1]
            deserve+= tobreak[k]
            reason.push(k - 1)
           // console.log('anterior:',deserve)
           tobreak[k] = deserve
        }
      }

     // console.log('reason')
      for (time = tobreak.length - 1; time >= 0; time--) {
      //  console.log(time, tobreak[time])
        if (reason.indexOf(time) != -1) {
           // console.log('TIRAR')
            tobreak.splice(time, 1)
            }
       }
      

      console.log('____________________','( ',naonao,' )','( ',tobreak,' )','___________________________')

      console.log('ESSA É A HORA DECISIVA: MULTIPLICAR OS MONÔMIOS! DEUS ME AJUDE!!')
      for (roberto in naonao) {
          console.log('---------------------------------------------------------------______')
        console.log(naonao[roberto])
        
        for (vaidarcerto in tobreak) {
            console.log(tobreak[vaidarcerto])
            novomon = MULTIPLICARDIREITO(naonao[roberto], tobreak[vaidarcerto])
            console.log(naonao[roberto], 'multiplicado por',tobreak[vaidarcerto],'=',novomon)
            console.warn(newexpress)
            if (novomon[0] == '-') {
                miya = ''
                for (n in novomon) {
                    if (novomon[n] != '-') {
                        miya+= novomon[n]                 
                       }
                }
                console.log(miya)
                newexpress.push('-')
                newexpress.push(miya)
            }else{
                newexpress.push('+')
                newexpress.push(novomon)
            }
        }


    }
    
       
       for (e in pans[bababa].todos) {
        numsdesfat.push(pans[bababa].todos[e])
       }
       
      }

   }
   
   //ESSE DAQUI!!! OLHE! VAI! EEEEEEEE
   if (numsdesfat.length > 0) {
    console.warn('VAI TER QUE FATORAR DE NOVO')
    todososnumeros = []
    for (acaba in monomios) {
       // console.log(acaba)
        todososnumeros.push(acaba)
    }

    for (feliz = todososnumeros.length - 1; feliz >= 0; feliz--) {
        // console.log(todososnumeros[feliz])
         if (numsdesfat.indexOf(Number(todososnumeros[feliz])) != -1) {
            todososnumeros.splice(feliz, 1)
         }
 }
    console.log('tirando', sort(numsdesfat)[0], 'dos outros monomios( tem', monomios.length, 'ao todo):',todososnumeros)
    for (eh in todososnumeros) {
        console.log(todososnumeros[eh], monomios[todososnumeros[eh]].numero)

        join = ''
        for (sempresei in monomios[todososnumeros[eh]].numero) {
            if (monomios[todososnumeros[eh]].numero[sempresei] != '+' && monomios[todososnumeros[eh]].numero[sempresei] != '-') {
            ter = monomios[todososnumeros[eh]].numero[sempresei]
            console.log(ter)
            join+= ter
            }
        }
        if (monomios[todososnumeros[eh]].numero[0] == '+') {
            console.log('MAIS')
            newexpress.push('+')
            newexpress.push(join)
        }else if(monomios[todososnumeros[eh]].numero[0] == '-') {
            console.log('MENOS')
            newexpress.push('-')
            newexpress.push(join)
        }else{
            console.log('MAIS')
            newexpress.push('+')
            newexpress.push(join)
        }
        console.log('PREPARADO PARA ENTRAR NA LISTA:', join)
    }

    console.log('_____________________________________________newexpression:_____________________________________________ ')
        console.log(newexpress)
        console.log('_______________________________________________________________________________________   _______________')

        FATORAR(newexpress)
   }else{

   console.log('VENDO OS QUE FALTAM:')
   console.log(numerospresentes)
   todososnumeros = []
   for (acaba in monomios) {
      // console.log(acaba)
       todososnumeros.push(acaba)
   }
   cancelar = []
   for (feliz = todososnumeros.length - 1; feliz >= 0; feliz--) {
          // console.log(todososnumeros[feliz])
           if (numerospresentes.indexOf(Number(todososnumeros[feliz])) != -1) {
              todososnumeros.splice(feliz, 1)
   }
   }
   console.log(todososnumeros)
   
   for (bye in todososnumeros) {
       
   
       quase = monomios[todososnumeros[bye]].numero
       aconta = ''
       elevar = 1
       aster = false
       friend = ''
       
       
       gates = []
   
        for (patience in quase) {
            
           
            if (quase[patience] == '*') {
                aster = true
               // console.log('AND THE CLSDADWDWD', patience)
               // console.log(quase[Number(patience) - 1], quase[Number(patience) + 1])
                gates.push(quase[Number(patience) - 1])
                gates.push('x')
                gates.push(quase[Number(patience) + 1])
              //  console.log(gates, fazerConta(gates))
   
             //  console.log(quase, Number(patience) + 1)
                quase[Number(patience) + 1] = fazerConta(gates)[0]
                aconta = fazerConta(gates)[0]
              
                gates = []
            }else if(quase[patience].search('[a-z]') != -1)  {
               
              
                if (quase[patience] == quase[Number(patience) - 1]) {
               
                    elevar++
   
                    if (patience == quase.length - 1) {
                      //  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        aconta+= `^${elevar}`
                       // console.log(aconta)
                    }
   
                }else{
                    if (elevar > 1) {
                       // console.log('UEPA')
                        aconta+= `^${elevar}`
                        
                    }
   
                    aconta+= quase[patience]
                   // console.log(aconta)
                  
                    elevar = 1
                }
              //  console.log(elevar)
               
            } 
        }
        
        if (aster == false) {
            // console.log('<<<<<<<<<<<<<',quase)
             direitando = ''
             for (h in quase) {
                     direitando+= quase[h]
             }
             friend = direitando
            }
    if (aster == false) {
     //   console.log('SEM ASTERISCO',aconta)
        antes = ''
        for (eyes in quase) {
            
           // console.log(quase[eyes])
            if (quase[eyes].search('[0-9]') != -1) {
               // console.log('CRY')
                antes+= quase[eyes]
            }
        }
        antes+= aconta
       // console.log('ANTEEEES:', antes)
        
        aconta = antes
    }
    console.log('A CONTA',aconta, quase)
   
    if (bye == 0) {
       console.log('PRIMEIRO')
       if (concatenar.length > 0) {
           if (quase[0] == '-') {
               concatenar+= ` - ${aconta}`
           }else{
               concatenar+= ` + ${aconta}`
           }
       }else{
           if (quase[0] == '-') {
               concatenar+= `-${aconta}`
           }else{
               concatenar+= `${aconta}`
           }
       }
    }else{
       if (quase[0] == '-') {
           concatenar+= ` - ${aconta}`
       }else{
           concatenar+= ` + ${aconta}`
       }
    }
   }
}
   
   console.log('FINALMENTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: ', concatenar)
   //}
   
   
   // Vendo se o número é primo
   function ehprimo(Number) {
       parar = false
       for (t = 2; t < Number && parar == false; t++) {
       
           if (Number%t == 0) {
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
   function ehprimo2(Number) {
       divisores = []
       for (t = 2; t < Number && parar == false; t++) {
       
           if (Number%t == 0) {
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
   
   
    quanto = Number(monomios.length)/Number(divs[okentao])
   
   
    numapars = []
   
   
   
   
    util = []
    for (t in segs2) {
   
   
   
        if (segs2[t].mons.length >= quanto) {
            util.push(segs2[t])
        }
        //
    }
   
    //
    
    for (m in monomios) {
        aparic = 0
        //
        for (t in util) {
            //
            //
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
        //
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    
    //
    for (r in util) {
   
        //
       lista = util[r].mons
        present = {fix: [], falt: []}
        //
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
            //
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                //
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
        //
        //
   
        if (present.fix.length < quanto) {
        for (g in lista) {
            //
           
            if (present.fix.indexOf(lista[g]) == -1) {
              //  console.log('FALTA')
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
        
   
        
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
    console.log('RELATIOn!!!!!!!!!!!!!!!!!', relation)
    for (c in relation) {
        //
        if (relation[c].fix.length > 0) {
   
   
        faltam = Number(quanto) - Number(relation[c].fix.length)
   
   
        for (f = 0; f < faltam; f++) {
       
           relation[c].fix.push(relation[c].falt[f])
          
      
           relation[c].falt[f] = -10
   
      
        }
   
   
        for (tel = 0; tel < c; tel++){
   
            if (relation[tel].fix.length > 0) {
       
            }
            
            outrorel = relation[tel]
            
        for (hu in outrorel.fix) {
       
            if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
           
           
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
               
                    if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                   
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                   
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    //
   
   ////
   
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
   
   console.log('divs é igual a ', divs[okentao])
   console.log('groups é igual a', groups)
   
   
   if (groups < divs[okentao]) {
    
   
    console.log('SERÁ QUE DEU CERTO?')
   
   //
   
   groups = 0
   conts = []
   for (yougo in relation) {
   if (relation[yougo].fix.length > 0) {
   console.log(relation[yougo].fix)
   
   for (pals in relation[yougo].fix) {
    //
    conts.push(relation[yougo].fix[pals])
   }
   groups++
   }
   }
   //
   if (divs[okentao] != groups) {
   
   //
   
   tirados = []
   for (wish in relation) {
    //
    for (edge in relation[wish].fix) {
       //
       tirados.push(relation[wish].fix[edge])
    }
   }
   //
   
   
   
   for (die in segs2) {
       tirar = []
   
   
   for (h in segs2[die].mons) {
   console.log(segs2[die].mons[h])
   if (tirados.indexOf(segs2[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }

   console.log('tirar de ',segs2[die].mons, tirar)

   for (far = tirar.length - 1; far >= 0; far--) {
       console.log(segs[die].mons[tirar[far]])
   segs2[die].mons.splice(tirar[far], 1)
   
   }
   console.log('ficou assim:', segs2[die].mons)
   }
   
   for (sorrow in segs2) {
   
   grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
   
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       
      
       ob = {car: segs2[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
           
      
   
       console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 
   
              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                  ob.problem = true
              }
               
           ob.fix.push(segs2[sorrow].mons[imor])
           tirados.push(segs2[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       console.log('In THE EnD', ob)
   
       
       
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation.push(ob)
       }
   }
   
   }
   
   
   
   }
   
   males = []
   for (nah = relation.length - 1; nah >= 0; nah--) {
        // if (relation[nah].fix.length > 0) {
             
    // console.log('fix',relation[nah].fix)
   
     
     for (nop in relation) {
       if (relation[nop].fix.length > 0 && nop != nah) {
   
   
   igual = true
   for (uh in relation[nop].fix) {
   
   if (relation[nah].fix.indexOf(relation[nop].fix[uh]) == -1) {
   igual = false
   }
   }
   
   if (igual == true) {
   if (relation[nah].car.length > relation[nop].car.length) {
   
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
   
   for (me = segs2[pose].mons.length - 1; me >= 0; me--) {
   
   if (numerosquetem.indexOf(segs2[pose].mons[me]) != -1) {
   
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
   
    console.log('OK, AGORA PRECISAMOS EnCOnTRAR O RESTO')
    console.log(doit2(segs2)[0])
    console.log(fireonfire)
   
    
    for (red in fireonfire) {
      // console.log(fireonfire[red])
       relation.push({fix: fireonfire[red].mons, car: fireonfire[red].car})
    }
   
   }else if(groups > divs[okentao]){
       
   console.log('nÃO DEU CERTO! BUÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ')
    //
    //
   
    mia = []
   for (idk in segs2) {
   ////
   //
   
   
   for (mcr in segs2) {
   if (mcr != idk) {
   
       ////
      // 
      
      // 
       if (segs2[mcr].mons.length <= segs2[idk].mons.length) {
   
           sames = []
      for(y = 0; y < segs2[mcr].mons.length; y++) {
       //  
           if (segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
             //
               sames.push('igual')
           }else{
             // 
               sames.push('diferente')
           }
      }
    // 
      if (sames.indexOf('diferente') == -1){
     // 
   
       if (mia.indexOf(mcr) == -1) {
       mia.push(mcr)
       }
       
       //
       
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
   
    ////
   
   
    util = []
    for (t in segs2) {
   
       //
     //  
   
        if (segs2[t].mons.length >= quanto) {
            util.push(segs2[t])
        }
        //
    }
   
    
    
    for (m in monomios) {
        aparic = 0
       //
        for (t in util) {
         //   
         //   
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
       // 
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    //
    for (r in util) {
   
        //
       lista = util[r].mons
        present = {fix: [], falt: []}
        //
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
         //   
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                //
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
       // 
        //
   
        if (present.fix.length < quanto) {
        for (g in lista) {
           // 
           // 
            if (present.fix.indexOf(lista[g]) == -1) {
             //   
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
      //  
   
        
        if (present.fix.length == 0) {
        for (ti in present.falt) {
          //  
   
           
   
                numapars.find(function(numapars) {
                    return numapars.num == present.falt[ti]
                    }).vezes--
   
                 
        }
    }
        
   
    }
    relation[r] = present
    relation[r].car = segs2[r].car
    
    }
    
    for (c in relation) {
       // 
        if (relation[c].fix.length > 0) {
       // 
   
        faltam = Number(quanto) - Number(relation[c].fix.length)
        //
   
        for (f = 0; f < faltam; f++) {
         //   
           relation[c].fix.push(relation[c].falt[f])
          
       //    
           relation[c].falt[f] = -10
   
       //    
        }
      //  
   
        for (tel = 0; tel < c; tel++){
   
            if (relation[tel].fix.length > 0) {
          //  
            }
            
            outrorel = relation[tel]
            
        for (hu in outrorel.fix) {
          //  
            if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
             //   
                //
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
                 ///   
                    if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                    //    
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                     //   
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    console.log('SERÁ QUE DEU CERTO?')
   
   
   
   groups = 0
   conts = []
   for (yougo in relation) {
   if (relation[yougo].fix.length > 0) {
   //
   
   for (pals in relation[yougo].fix) {
    //
    conts.push(relation[yougo].fix[pals])
   }
   groups++
   }
   }
   
   if (divs[okentao] != groups) {
   
   
   
   tirados = []
   for (wish in relation) {
    
    for (edge in relation[wish].fix) {
       
       tirados.push(relation[wish].fix[edge])
    }
   }
   
   
   
   for (die in segs2) {
       tirar = []
   
   
   for (h in segs2[die].mons) {
   
   if (tirados.indexOf(segs2[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }
   
   for (far = tirar.length - 1; far >= 0; far--) {
       
   segs2[die].mons.splice(tirar[far], 1)
   
   }
   
   }
   
   for (sorrow in segs2) {
   
   grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
   
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       
      
       ob = {car: segs2[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
           
           
   
          
   
              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                   ob.problem = true
              }
               
           ob.fix.push(segs2[sorrow].mons[imor])
           tirados.push(segs2[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       
   
       
       
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation.push(ob)
       }
   }
   
   }
   
   
   
   }
   }
   return [relation, segs2]
   }
   
   
   
   
   
   function temnaLista(h) {
   
   
   for (t in relation) {
   
       if (relation[t].fix.length > 0) {
       
   
       home = 0
       for (fear in relation[t].fix) {
           if (relation[t].fix[fear] == h[fear]) {
               
               home++
           }
       }
   
       if (home == h.length) {
           
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
   
   
    quanto = Number(monomios.length)/Number(divs[okentao])
   
   
    numapars = []
   
   
   
   
    util = []
    for (t in segs2) {
   
   
   
        if (segs2[t].mons.length >= quanto) {
            util.push(segs2[t])
        }
        //
    }
   
    //
    
    for (m in monomios) {
        aparic = 0
        //
        for (t in util) {
            //
            //
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
        //
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    
    //
    for (r in util) {
   
        //
       lista = util[r].mons
        present = {fix: [], falt: []}
        //
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
            //
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                //
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
        //
        //
   
        if (present.fix.length < quanto) {
        for (g in lista) {
            //
            //
            if (present.fix.indexOf(lista[g]) == -1) {
                //
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
        //
   
        
        if (present.fix.length == 0) {
        for (ti in present.falt) {
            //
   
           
   
                numapars.find(function(numapars) {
                    return numapars.num == present.falt[ti]
                    }).vezes--
   
                 
        }
    }
        
   
    }
    relation[r] = present
    relation[r].car = segs2[r].car
    
    }
    //
    for (c in relation) {
        //
        if (relation[c].fix.length > 0) {
        //
   
        faltam = Number(quanto) - Number(relation[c].fix.length)
        //
   
        for (f = 0; f < faltam; f++) {
            //
           relation[c].fix.push(relation[c].falt[f])
          
           //
           relation[c].falt[f] = -10
   
           //
        }
        //
   
        for (tel = 0; tel < c; tel++){
   
            if (relation[tel].fix.length > 0) {
            //
            }
            
            outrorel = relation[tel]
            
        for (hu in outrorel.fix) {
            //
            if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                //
                //
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
                    //
                    if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                        //
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                        //
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    //
   
   ////
   
   groups = 0
   conts = []
   for (yougo in relation) {
   if (relation[yougo].fix.length > 0) {
   //
   
   for (pals in relation[yougo].fix) {
    //
    conts.push(relation[yougo].fix[pals])
   }
   groups++
   }
   }
   
   //
   //
   if (groups < divs[okentao]) {
    
   
    //
   
   //
   
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
   console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs[okentao], 'and', groups)
   if (divs[okentao] != groups) {
   console.log('THEn WHY ARE WE LAUGHInG?')
   console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')
   
   tirados = []
   for (wish in relation) {
   // console.log(relation[wish].fix)
    for (edge in relation[wish].fix) {
   //    console.log(relation[wish].fix[edge])
       tirados.push(relation[wish].fix[edge])
    }
   }
   console.log('nÚMEROS QUE SERÃO TIRADOS', tirados)
   
   
   
   for (die in segs2) {
       tirar = []
   
   
   for (h in segs2[die].mons) {
   
   if (tirados.indexOf(segs2[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }
   
   for (far = tirar.length - 1; far >= 0; far--) {
      // console.log(segs[die].mons[tirar[far]])
   segs2[die].mons.splice(tirar[far], 1)
   
   }
   
   }
   
   for (sorrow in segs2) {
   
   grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
   
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       
      
       ob = {car: segs2[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
           
           
   
          
   
              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                  // ob.problem = true
              }
               
           ob.fix.push(segs2[sorrow].mons[imor])
           tirados.push(segs2[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       
   
       
       
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation.push(ob)
       }
   }
   
   }
   
   
   
   }
   }else if(groups > divs[okentao]){
       
   
    
    //
   
    mia = []
   for (idk in segs2) {
   ////
   
   
   
   for (mcr in segs2) {
   if (mcr != idk) {
   
       ////
     // console.log('outro',segs[mcr].mons)
      
      
       if (segs2[mcr].mons.length <= segs2[idk].mons.length) {
   
           sames = []
      for(y = 0; y < segs2[mcr].mons.length; y++) {
       //  
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
   
    ////
   
   
    util = []
    for (t in segs2) {
   
       //
     //  
   
        if (segs2[t].mons.length >= quanto) {
            util.push(segs2[t])
        }
        //
    }
   
    
    
    for (m in monomios) {
        aparic = 0
       //
        for (t in util) {
         //   
         //   
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
       // 
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    //
    for (r in util) {
   
        //
       lista = util[r].mons
        present = {fix: [], falt: []}
        //
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
         //   
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                //
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
       // 
        //
   
        if (present.fix.length < quanto) {
        for (g in lista) {
           // 
           // 
            if (present.fix.indexOf(lista[g]) == -1) {
             //   
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
      //  
   
        
        if (present.fix.length == 0) {
        for (ti in present.falt) {
          //  
   
           
   
                numapars.find(function(numapars) {
                    return numapars.num == present.falt[ti]
                    }).vezes--
   
                 
        }
    }
        
   
    }
    relation[r] = present
    relation[r].car = segs2[r].car
    
    }
    
    for (c in relation) {
       // 
        if (relation[c].fix.length > 0) {
       // 
   
        faltam = Number(quanto) - Number(relation[c].fix.length)
        //
   
        for (f = 0; f < faltam; f++) {
         //   
           relation[c].fix.push(relation[c].falt[f])
          
       //    
           relation[c].falt[f] = -10
   
       //    
        }
      //  
   
        for (tel = 0; tel < c; tel++){
   
            if (relation[tel].fix.length > 0) {
          //  
            }
            
            outrorel = relation[tel]
            
        for (hu in outrorel.fix) {
          //  
            if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
           // console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
                //
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
                 ///   
                    if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                    //    
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                     
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    console.log('SERÁ QUE DEU CERTO?')
   
   
   
   groups = 0
   conts = []
   for (yougo in relation) {
   if (relation[yougo].fix.length > 0) {
   
   
   for (pals in relation[yougo].fix) {
    
    conts.push(relation[yougo].fix[pals])
   }
   groups++
   }
   }
   
   if (divs[okentao] != groups) {
   
   
   
   tirados = []
   for (wish in relation) {
    
    for (edge in relation[wish].fix) {
      // console.log(relation[wish].fix[edge])
       tirados.push(relation[wish].fix[edge])
    }
   }
   console.log('nÚMEROS QUE SERÃO TIRADOS', tirados)
   
   
   for (die in segs2) {
       tirar = []
   
   
   for (h in segs2[die].mons) {
   
   if (tirados.indexOf(segs2[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }
   
   for (far = tirar.length - 1; far >= 0; far--) {
       
   segs2[die].mons.splice(tirar[far], 1)
   
   }
   
   }
   
   for (sorrow in segs2) {
   console.log(segs2[sorrow].mons)
   grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
   
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       
      
       ob = {car: segs2[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
         //  console.log('TIRADOS')
        //   console.log(segs2[sorrow].mons[imor])
   
       //   console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 
   
              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                   //ob.problem = true
              }
            //   console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
           ob.fix.push(segs2[sorrow].mons[imor])
           tirados.push(segs2[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       
   
       
       
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation.push(ob)
       }
   }
   
   }
   
   
   
   }
   }
   
   console.log('HELLO')
   
   
   return [relation, segs2]
   }
   
   
   //DESFATORAR(['-','3'],['3'],['1'])
   
   
 function SOMANDOMONOMIOS(list) {
        
particles = [{numero: ''}]
obnum = 0
for (n = 0; n < list.length; n++) {


if (String(list[n]).search('[\\-\\+]') != -1 && n != 0) {

particles.push({numero: ''})
obnum++
}

particles[obnum].numero += list[n]

}



for (huh in particles) {
   // console.log('HUH',particles[huh].numero)

    partlet = ''
    for (y in particles[huh].numero) {
     
     if (String(particles[huh].numero[y]).search('[a-z]') != -1) {
        
        partlet+= String(particles[huh].numero[y])
     }
    }
    particles[huh].partletral = partlet
   // console.log('PARTLETRAL',particles[huh].partletral)
}


exp = []
for (bye in particles) {
    

    comofica = []
    ground = ''

    for (misery in particles[bye].numero) { 
     // console.log(particles[bye].numero[misery])
        
        carac = particles[bye].numero[misery]
       
      

      // console.log('OH COME On',ground, String(ground.search('[0-9]')))
            if (ground.length == 0) {
               // console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
               // console.log('É UM nÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                
            }
            if (misery == particles[bye].numero.length - 1) {
                comofica.push(ground)
            }
    }

   // console.log('COMOFICA', comofica)
    //
    particles[bye].numero = comofica
}


agruparsoma = []
// JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
for (huh in particles) {
    
    
    if (agruparsoma.find(function (agruparsoma) {
        return agruparsoma.que == particles[huh].partletral
       }) == undefined) {
           
    agruparsoma.push({quais: [Number(huh)], que:  particles[huh].partletral})
       }else{
        agruparsoma.find(function (agruparsoma) {
            return agruparsoma.que == particles[huh].partletral
           }).quais.push(Number(huh))
       }
    
}


          





for (chuva in agruparsoma) {
    
   // console.log('')
    

    conta = []
for (da in agruparsoma[chuva].quais) {



divisor = []
for (flowers in agruparsoma[chuva].que) {

divisor.push(agruparsoma[chuva].que[flowers])
}


tu = [...divisor]
resultadoDaDivisão = DIVIDIR( divisor, particles[agruparsoma[chuva].quais[da]].numero)



plan = []
add = ''

for (past in resultadoDaDivisão) {
   
 

 if (resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {


if (add.length == 0) {
    if (resultadoDaDivisão[past - 1] != '-') {
    add+= resultadoDaDivisão[past]
    }

}else if (resultadoDaDivisão[past].search('[0-9]') != -1 && add.search('[0-9]') != -1) {
    
add+= resultadoDaDivisão[past]
}else{
    plan.push(add)
    add = ''
    
   
    add+= resultadoDaDivisão[past]
    
    
}
// console.log('ADD', add)


if (plan.length == 3) {



plan = [String(Number(plan[0])*Number(plan[2]))]
}
 }

}


if (add == '' && agruparsoma[chuva].quais.length > 1) {
    add = '1'
   
}
plan.push(add)


if (plan.length == 3) {
    
    
    plan = [String(Number(plan[0])*Number(plan[2]))]
    
    }

    if (particles[agruparsoma[chuva].quais[da]].numero[0] == '+' || particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {
   

    sinal = particles[agruparsoma[chuva].quais[da]].numero[0]

    if (conta.length != 0) {
    conta.push(particles[agruparsoma[chuva].quais[da]].numero[0])
    }
    }

    if (conta.length == 0 && particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {

 entao = '-'
 entao+= plan[0]
 
 conta.push(entao)
    }else{
       
        conta.push(plan[0])
    }
   
    
}




comehome = fazerConta(conta)




if (comehome[0][0] == '-') {
    t = ''
   for (b in comehome[0]) {
   if (comehome[0][b] != '-') {
     t+= comehome[0][b]
   }
   }
  // console.log(t)
   
   at = t
   if (ehprimo(t) == false) {
      
   fat = FATORARSInGULAR(at)
  // console.log(String(fat))
   }else{
     // console.log('É PRIMOOOOOOOOOOOOOOOOO')
    fat = at
   }
   oop = '-'
   oop+= String(fat)


exp.push('-')
fat += agruparsoma[chuva].que
exp.push(fat)

}else{
    
    if (ehprimo(comehome) == false) {
fat = FATORARSInGULAR(comehome)
    }else{
        fat = comehome
    }
    


if (exp.length == 0) {
    fat += agruparsoma[chuva].que
    exp.push(fat)
    
   
    }else {
        exp.push('+')
        fat += agruparsoma[chuva].que
        exp.push(fat)
      //  console.log('PARTE LETRAL:', agruparsoma[chuva].que)
    }
}




}

return[exp, agruparsoma.length, particles.length]
 }


 function REDONUMFACTORING(storer) {

    if (typeof storer === 'string') {
        other = []
        for (h in storer) {
            other.push(storer[h])
        }
        storer = other
    }

resultobtained = ''

elevar = 1
wasmultiplicated = false


operation = []
for (patience in storer) {
    
   
    if (storer[patience] == '*') {
        wasmultiplicated = true
        
        
        operation.push(storer[Number(patience) - 1])
        operation.push('x')
        operation.push(storer[Number(patience) + 1])
        

        storer[Number(patience) + 1] = fazerConta(operation)[0]
        resultobtained = fazerConta(operation)[0]
        
      
        operation = []
    }else if(storer[patience].search('[a-z]') != -1)  {
       
        if (storer[patience] == storer[Number(patience) - 1]) {
       
            elevar++

            if (patience == storer.length - 1) {
                
                resultobtained+= `^${elevar}`
                
            }

        }else{
          
            if (elevar > 1) {
                
                resultobtained+= `^${elevar}`
                
            }

            resultobtained+= storer[patience]
        
            
          
            elevar = 1
        }
        
       
    } 
}

if (wasmultiplicated == false) {
    //   
       addingnumber = ''
       for (eyes in storer) {
           
          // 
           if (storer[eyes].search('[0-9]') != -1) {
              // 
               addingnumber+= storer[eyes]
           }
       }
       addingnumber+= resultobtained
      // 
       
       resultobtained = addingnumber
    
   }
if(storer[0] == '-') {
    confirmedresult = '-'
    for (caracter in resultobtained) {
        confirmedresult+= resultobtained[caracter]
    }
    return confirmedresult
}else{
    return resultobtained
}
   
}


function MULTIPLICARDIREITO(num1, num2) {
    

    if (num1 == '1' || num2 == '1') {
        console.log('É 1')
        if (num1 == '1') {
            resultmult = num2
        }else{
            resultmult = num1
        }
    }else{
        sónumero = ''
        sóletra = ''
        for (car in num1) {
            if (num1[car].search('[0-9]') != -1 || num1[car] == '*') {
                sónumero += num1[car]
            }else if(num1[car].search('[a-z]') != -1) {
                sóletra += num1[car]
            }
        }
        
    
        sónumero2 = ''
        sóletra2 = ''
        for (car in num2) {
            if (num2[car].search('[0-9]') != -1 || num2[car] == '*') {
                sónumero2 += num2[car]
            }else if(num2[car].search('[a-z]') != -1){
                sóletra2 += num2[car]
            }
        }
        
        if (sónumero.length > 0 && sónumero2.length > 0) {
            sónumero+= '*'
        }
    
        if (num1[0] == '-') {
            sinal1 = 'neg'
        }else{
            sinal1 = 'pos'
        }
        
        if (num2[0] == '-') {
            sinal2 = 'neg'
        }else{
            sinal2 = 'pos'
        }
    
    
        sónumero+= sónumero2
    
            sóletra+= sóletra2
        
           
            if (sinal1 == sinal2) {
               
                resultmult = sónumero+= sóletra
            }else{
               
                resultmult = '-'
                resultmult += sónumero+= sóletra
            }
    }
    return resultmult
    }

function sort(n) {
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
                if (yposition[item] > maiorparamenor[volume]) {
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
}