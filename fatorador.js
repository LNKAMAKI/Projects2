//expression = ['x','^','3', '+', 'x', '-', '2','x','y', '+', 'x','^','2','y', '-', '2','x','^','2', '+', 'y']

//expression = ['-','y','^','2','b','+','6','x','^','2','b', '+', '7','y','^','2', '-', '42','x','^','2']

//expression = [ '-', '8','x','+','3', 'x', 'y', '+', '4','x','y', '-','6','x','+','2','x','y', '-','4','x']

//expression = ['7','x', '+', '14','x','^','2', '+', '35', '+', '2','x', '+', '4','x','^','2', '+', '10', '+', '3','x', '+', '6','x','^','2', '+', '15','+','5','x','+','10','x','^','2','+','25']

//expression = ['12','xx','+','30', '+', '10', '+', '15','+','7','x', '+', '3','x', '+', '35', '+', '4','x','^','2','+','9','x','+','18','x','^','2','+','45','+','4','x', '+', '6','x','+','6','x','^','2','+', '2','x','+','10','x','^','2','+','25','+','8','x','^','2','+','20','+','5','x','+', '14','x','^','2']

//expression = ['2','y','+','4','y','+','2','x','+','4','x']

//expression = ['6','x','+','15','x','^','2','+','6','x','a','+','15','x','^','2','a','+','6','x','y','+','15','y','x','^','2','+','6','z','x','+','15','x','^','2','z','+','6','x','b','+','15','b','x','^','2']

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
//expression = ['-','121','y','+','xz','+','11yz','-','11','x']

//expression = ['26','a','x','+','169','x','b','+','4','a','y','+','26','b','y']
//expression = ['-','37','x','^','2','+','74','x','-','42','y','+','21','x','y']
//expression = ['2xx','+','30','xx']
//expression = ['-','5x','+','10x','+','2x','+','4','y','+','10','y']
//expression = ['37','x','+','21','x','^','4']
//expression = ['13*2y','+','13xy']
//expression = ['-','50','x','x','y','-','60','x','x','-','40','x','x','-','30','x','x','y']
//expression = ['+','5x','+','3x','-','7','x','+','4','y','+','10','y']
//expression = ['-','2y','-','5y','+','4','x','+','10','x','-','6','y','-','15','y','+','49','+','63','+','ab','+','bb']
//expression = ['-','3x','-','5x','+','4','x','x','+','3y','+','5y','-','4','x','y']

//expression = ['a','^','2','+','a','-','5a','-','5']

//expression = ['3x','+','15','x','+','19','l','+','17','l']
//expression = ['3*5','+','5*3xx','+','5*3x']
//expression = ['14','y','+','7','x','+','9','x']
//expression = ['58','x','+','29','+','87','y','+','18']
//expression = ['132','+','2']
//expression = ['29','+','37','+','74','x','+','58','x']
//expression = ['x','^','2','-','3','x','-','2','x','+','6']
a
function ir() {
  qualexp1 = document.getElementById("typearea").value;
  qualexp = "";

  parar = false;
  for (copy in qualexp1) {
    //console.log(qualexp1[copy])
    if (qualexp1[copy] != " ") {
      if (
        qualexp1[copy].search("[0-9]") != -1 ||
        qualexp1[copy].search("[a-z]") != -1 ||
        qualexp1[copy].search("[\\+\\-\\^]") != -1
      ) {
        //console.log(qualexp1[copy],'ir')
        qualexp += qualexp1[copy];
      } else {
        parar = true;
      }
    }
  }
  //console.log('É ESSE:', qualexp)

  if (qualexp != "" && parar == false) {
    ground = "";
    expression = [];
    for (phy in qualexp) {
      if (qualexp[phy].search("[0-9]") != -1) {
        if (ground.search("[0-9]") != -1) {
          ground += qualexp[phy];
        } else if (ground.length > 0) {
          expression.push(ground);
          ground = qualexp[phy];
        } else {
          ground = qualexp[phy];
        }
      } else {
        if (ground.length > 0) {
          expression.push(ground);
        }
        ground = qualexp[phy];
      }
      if (phy == qualexp.length - 1) {
        expression.push(ground);
      }
    }

    resultadogeral = FATORAR(expression);
    resultado = resultadogeral[0];

    console.log('PERAÍ! MAS SERÁ ESSE O VERDADEIRO RESULTADO??')
    console.log('expression:',resultadogeral[0])
    //console.log('LET\'s SPLIT IT!')
    //res = SPLITEXPS(resultadogeral[0])
    //console.log(res)
    //for (g in res) {
       //FATORAR(res[g].exp)
     //   console.log(res[g].exp)
   // }

    document.getElementById("result").innerHTML = "Resultado:";
    document.getElementById("fatoracao").innerText = resultado;

    document.getElementById("tab").style.height = "0px";
    document.getElementById("exemplos").value = "Exemplos";

    abriu = false;
  }
}

abriu = false;
vez = 0;
function showegs() {
  if (abriu == false) {
    document.getElementById("tab").style.height = "fit-content";
    document.getElementById("exemplos").value = "Fechar";
  } else {
    document.getElementById("tab").style.height = "0px";
    document.getElementById("exemplos").value = "Exemplos";
  }
  if (abriu == false) {
    abriu = true;
  } else {
    abriu = false;
  }

  if (vez == 0) {
    pegs = document.getElementsByClassName("eg");

    for (iveco in pegs) {
      if (iveco.search("[0-9]") != -1) {
        pegs[iveco].setAttribute("onclick", `mudar(${iveco})`);
      }
    }
  }

  vez++;
}

function mudar(index) {
  //console.log(index,'foi chamado')
  document.getElementById("typearea").value =
    document.getElementsByClassName("eg")[index].innerText;
}
function FATORAR(expression) {
  startexp = [...expression];

  if (expression[0] !== "-" && expression[0] !== "+") {
    //
    expo = ["+"];
    for (ent in expression) {
      //
      expo.push(expression[ent]);
    }
    expression = expo;
  }

  //6x^2 + 3 + 14x^2y + 7y

  //FAZEnDO AS COnTAS COM nÚMEROS

  //FATORAnDO OS nÚMEROS

  for (n = 0; n < expression.length; n++) {
    if (
      ehprimo(expression[n]) == false &&
      String(expression[n]).search("[0-9]") != -1 &&
      expression[n - 1] != "^"
    ) {
      fatorado = "";

      first = 1;

      div = 0;
      //

      stop = false;
      fator = 1;

      for (e = 2; stop == false; e++) {
        sob = Number(expression[n]);

        if (ehprimo(e) == true) {
          while (sob % e == 0) {
            if (sob % e == 0) {
              //
            }

            sob = sob / e;

            //
            //

            fator = fator * e;

            st = false;

            if (fator == expression[n]) {
              stop = true;
              fatorado += `${e}`;
            } else {
              fatorado += `${e}*`;
            }
          }
        }
      }

      expression[n] = fatorado;
    }
  }
  //

  //FAZEnDO AS POTÊnCIAS COM LETRAS

  //
  for (y in expression) {
    if (expression[y] == "^") {
      ad = expression[Number(y) - 1];
      for (h = 0; h < Number(expression[Number(y) + 1]) - 1; h++) {
        expression[Number(y) - 1] += ad;
      }

      expression.splice(Number(y) + 1, 1);
      expression.splice(y, 1);
    }
  }

  //SEPARAnDO OS MOnÔMIOS

  monomios = [{ numero: "" }];
  obnum = 0;
  for (n = 0; n < expression.length; n++) {
    if (String(expression[n]).search("[\\-\\+]") != -1 && n != 0) {
      monomios.push({ numero: "" });
      obnum++;
    }

    monomios[obnum].numero += expression[n];
  }

  //monomios = [{numero: ['11','x']},{numero: ['11','*','3','x']}]

  //TRANSFORMA  O MONOMIOS.NUMERO(STRING) EM UM ARRAY

  for (bye in monomios) {
    comofica = [];
    ground = "";

    for (misery in monomios[bye].numero) {
      carac = monomios[bye].numero[misery];

      if (ground.length == 0) {
        //
        ground += carac;
      } else if (
        String(ground.search("[0-9]")) != -1 &&
        String(carac).search("[0-9]") != -1
      ) {
        //
        ground += carac;
      } else {
        comofica.push(ground);
        ground = "";
        ground += carac;
      }
      if (misery == monomios[bye].numero.length - 1) {
        comofica.push(ground);
      }
    }
    monomios[bye].numero = comofica;
  }

  for (huh in monomios) {
    partlet = "";
    for (y in monomios[huh].numero) {
      if (String(monomios[huh].numero[y]).search("[a-z]") != -1) {
        partlet += String(monomios[huh].numero[y]);
      }
    }
    monomios[huh].partletral = partlet;
  }

  ji = [];
  //JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
  for (huh in monomios) {
    if (
      ji.find(function (ji) {
        return ji.que == monomios[huh].partletral;
      }) == undefined
    ) {
      ji.push({ quais: [Number(huh)], que: monomios[huh].partletral });
    } else {
      ji.find(function (ji) {
        return ji.que == monomios[huh].partletral;
      }).quais.push(Number(huh));
    }
  }

  //SEPARAnDO/JUnTAnDO OS nÚMEROS
// ==> SOMANDO OS MONÔMIOS...
  exp = [];

  for (bye in ji) {
    //

    for (misery in ji[bye].quais) {
      ground = "";

      comofica = [];
      for (b in monomios[ji[bye].quais[misery]].numero) {
        carac = monomios[ji[bye].quais[misery]].numero[b];
        //

        if (ground.length == 0) {
          //
          ground += carac;
        } else if (
          String(ground.search("[0-9]")) != -1 &&
          String(carac).search("[0-9]") != -1
        ) {
          //
          ground += carac;
        } else {
          comofica.push(ground);
          ground = "";
          ground += carac;
          if (b == monomios[ji[bye].quais[misery]].numero.length - 1) {
            comofica.push(ground);
          }
        }
      }

      monomios[ji[bye].quais[misery]].numero = comofica;
    }
  }

  for (chuva in ji) {
    //

    conta = [];
    for (da in ji[chuva].quais) {
      divisor = [];
      for (flowers in ji[chuva].que) {
        divisor.push(ji[chuva].que[flowers]);
      }

      tu = [...divisor];
      resultadoDaDivisão = DIVIDIR(
        divisor,
        monomios[ji[chuva].quais[da]].numero
      );

      plan = [];
      add = "";

      for (past in resultadoDaDivisão) {
        if (
          resultadoDaDivisão[past].search("\\*") != -1 ||
          resultadoDaDivisão[past].search("[0-9]") != -1
        ) {
          if (add.length == 0) {
            if (resultadoDaDivisão[past - 1] != "-") {
              add += resultadoDaDivisão[past];
            }
          } else if (
            resultadoDaDivisão[past].search("[0-9]") != -1 &&
            add.search("[0-9]") != -1
          ) {
            add += resultadoDaDivisão[past];
          } else {
            plan.push(add);
            add = "";

            add += resultadoDaDivisão[past];
          }
          //

          if (plan.length == 3) {
            plan = [String(Number(plan[0]) * Number(plan[2]))];
          }
        }
      }

      if (add == "" && ji[chuva].quais.length > 1) {
        add = "1";
        //
      }
      plan.push(add);

      if (plan.length == 3) {
        //
        //
        plan = [String(Number(plan[0]) * Number(plan[2]))];
        //
      }

      if (
        monomios[ji[chuva].quais[da]].numero[0] == "+" ||
        monomios[ji[chuva].quais[da]].numero[0] == "-"
      ) {
        //

        sinal = monomios[ji[chuva].quais[da]].numero[0];

        if (conta.length != 0) {
          conta.push(monomios[ji[chuva].quais[da]].numero[0]);
        }
      }

      if (conta.length == 0 && monomios[ji[chuva].quais[da]].numero[0] == "-") {
        entao = "-";
        entao += plan[0];
        //
        conta.push(entao);
      } else {
        conta.push(plan[0]);
      }
    }

    comehome = fazerConta(conta);

    if (comehome[0][0] == "-") {
      t = "";
      for (b in comehome[0]) {
        if (comehome[0][b] != "-") {
          t += comehome[0][b];
        }
      }
      //

      at = t;
      if (ehprimo(t) == false) {
        fat = FATORARSInGULAR(at);
        //
      } else {
        //
        fat = at;
      }
      oop = "-";
      oop += String(fat);

      exp.push("-");
      fat += ji[chuva].que;
      exp.push(fat);
    } else {
      if (ehprimo(comehome) == false) {
        fat = FATORARSInGULAR(comehome);
      } else {
        fat = comehome;
      }

      if (exp.length == 0) {
        fat += ji[chuva].que;
        exp.push(fat);
      } else {
        exp.push("+");
        fat += ji[chuva].que;
        exp.push(fat);
        //
      }
    }
  }

  expression = exp;

  //SEPARAnDO OS MOnÔMIOS DEnOVO

  monomios = [{ numero: "" }];
  obnum = 0;

  for (n = 0; n < exp.length; n++) {
    if (String(exp[n]).search("[\\-\\+]") != -1 && n != 0) {
      monomios.push({ numero: "" });
      obnum++;
    }

    monomios[obnum].numero += exp[n];
  }

  //

  //SEPARAR CORRETAMEnTE OS nÚMEROS

  for (bye in monomios) {
    //

    comofica = [];
    ground = "";

    for (misery in monomios[bye].numero) {
      //

      carac = monomios[bye].numero[misery];
      //
      //

      //
      if (ground.length == 0) {
        ground += carac;
      } else if (
        String(ground.search("[0-9]")) != -1 &&
        String(carac).search("[0-9]") != -1
      ) {
        ground += carac;
      } else {
        comofica.push(ground);
        ground = "";
        ground += carac;
      }
      if (misery == monomios[bye].numero.length - 1) {
        comofica.push(ground);
      }
    }

    monomios[bye].numero = comofica;
  }

// AQUI ACABA O CÓDIGO PARA SOMAR OS MONÔMIOS

  //FATORAR SÓ UM nÚMERO

  function FATORARSInGULAR(potn) {
    if (ehprimo(potn) == false && String(potn).search("[0-9]") != -1) {
      fatorado = "";

      first = 1;

      div = 0;

      stop = false;
      fator = 1;

      for (e = 2; stop == false; e++) {
        sob = Number(potn);

        if (ehprimo(e) == true) {
          while (sob % e == 0) {
            if (sob % e == 0) {
            }

            sob = sob / e;

            fator = fator * e;

            st = false;

            if (fator == potn) {
              stop = true;
              fatorado += `${e}`;
            } else {
              fatorado += `${e}*`;
            }
          }
        }
      }
      return fatorado;
    }
  }

  //FAZER COnTA COM nÚMEROS
  function fazerConta(anterior) {
    if (0 == 0) {
      //falta == false
      //Primeiro raizes e potências
      for (n = 0; n < anterior.length; n++) {
        if (
          anterior[n] == "*" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√"
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) ** Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3; //n = n - 3

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        } else if (anterior[n] == "√" && anterior[n + 1] != "(") {
          anterior[n + 1] = String(Number(anterior[n + 1]) ** (1 / 2));
          anterior.splice(n, 1);

          n = n - 2;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        }
      }

      //Segundo multiplicações e divisões
      for (n = 0; n < anterior.length; n++) {
        if (
          anterior[n] == "x" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√" &&
          String(anterior[n + 2]).search("\\*") == -1 &&
          String(anterior[n - 2]).search("\\*") == -1
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) * Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        } else if (
          anterior[n] == "/" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√" &&
          String(anterior[n + 2]).search("\\*") == -1 &&
          String(anterior[n - 2]).search("\\*") == -1
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) / Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        }
      }

      if (anterior.length > 1) {
        //while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
        for (n = 0; n < anterior.length && anterior.length != 1; n++) {
          if (
            anterior[n] == "+" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("[x\\/\\*]") == -1 &&
            String(anterior[n - 2]).search("[x\\/\\*\\-]") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) + Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "-" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("[x\\/\\*]") == -1 &&
            String(anterior[n - 2]).search("[x\\/\\*\\-]") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) - Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "x" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("\\*") == -1 &&
            String(anterior[n - 2]).search("\\*") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) * Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "/" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("\\*") == -1 &&
            String(anterior[n - 2]).search("\\*") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) / Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "*" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√"
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) ** Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (anterior[n] == "√" && anterior[n + 1] != "(") {
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1 / 2));
            anterior.splice(n, 1);

            n = n - 2;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          }
        }
      }
    }
    return anterior;
  }

  function versetem(comp) {
    podeir = true;
    qual = -1;
    for (meow in segs) {
      array1 = [];
      for (d in segs[meow].car) {
        array1.push(segs[meow].car[d]);
      }
      array2 = [];
      for (d in comp) {
        array2.push(comp[d]);
      }
      if (segs[meow].car.length < comp.length) {
        divisao = DIVIDIR(VAI(segs[meow].car), VAI(comp));
      } else {
        divisao = DIVIDIR(VAI(comp), VAI(segs[meow].car));
      }
      if (divisao == "" || divisao == "-") {
        //
        podeir = false;
        qual = meow;
      }
    }
    return podeir;
  }

  function DIVIDIR(T, qual) {
    Tfix = [];
    for (h in T) {
      Tfix.push(T[h]);
    }
    //egs = [...qual]

    egs = [];
    for (norte in qual) {
      if (qual[norte] == "*" || qual[norte] == ".") {
      } else {
        egs.push(qual[norte]);
      }
    }

    takeout = [];

    for (n in egs) {
      if (T.indexOf(egs[n]) != -1) {
        //
        T.splice(T.lastIndexOf(egs[n]), 1);
        takeout.push(Number(n));
      }
    }

    for (giro = egs.length - 1; giro >= 0; giro--) {
      if (takeout.indexOf(Number(giro)) == -1) {
        //
      } else {
        //
        egs.splice(giro, 1);
      }
    }

    depois = "";
    for (n in egs) {
      //
      depois += String(egs[n]);

      if (
        String(egs[Number(n) + 1]).search("[0-9]") != -1 &&
        egs[n].search("[//-//+]") == -1
      ) {
        //
        depois += "*";
      }
    }

    return depois;
  }
  expression = exp;

  //
  reps = [];
  segs = [];
  let = [];

  for (m = 0; m < monomios.length; m++) {
    //CADA MOnÔMIO
    repetido = [];

    col = false;
    repetido = [];

    numerosrep = [];
    //
    //

    for (oc = 0; oc < monomios[m].numero.length; oc++) {
      //CADA LETRA DE CADA MOnÔMIO

      if (monomios[m].numero[oc].search("[\\*\\+\\/]") == -1) {
        //

        if (numerosrep.indexOf(monomios[m].numero[oc]) == -1) {
          numerosrep.push(monomios[m].numero[oc]);

          for (u = 0; u < monomios.length; u++) {
            //OUTROS MOnÔMIOS
            ocs2 = [];

            if (u != m) {
              //OCAS
              if (
                ocs2.find(function (ocs2) {
                  return ocs2.ed == monomios[m].numero[oc];
                }) == undefined
              ) {
                //
                ocs2.push({ ed: monomios[m].numero[oc], el: 0 });

                ocs = 0;
                for (ao = 0; ao < monomios[m].numero.length; ao++) {
                  //
                  if (monomios[m].numero[ao] == monomios[m].numero[oc]) {
                    ocs++;
                  }
                }
              }

              for (e = 0; e < monomios[u].numero.length; e++) {
                //CADA LETRA DE CADA MOnÔMIO

                if (monomios[u].numero[e] == monomios[m].numero[oc]) {
                  //

                  if (
                    repetido.find(function (repetido) {
                      return repetido.monum == u;
                    }) === undefined
                  ) {
                    ocs2.find(function (ocs2) {
                      return ocs2.ed == monomios[m].numero[oc];
                    }).el++;

                    if (
                      ocs2.find(function (ocs2) {
                        return ocs2.ed == monomios[m].numero[oc];
                      }).el <= ocs
                    ) {
                      repetido.push({
                        monum: u,
                        wc: [m],
                        letr: monomios[u].numero[e],
                      });
                    }

                    //reps.push({mns: [u, m],alg: monomios[u].numero[e])
                    //reps.push(monomios[u].numero[e])
                  } else {
                    //
                    //if (repetido.find(function(repetido) {
                    //return repetido.monum == u
                    //}).letr.indexOf(monomios[u].numero[e]) == -1) {

                    ocs2.find(function (ocs2) {
                      return ocs2.ed == monomios[m].numero[oc];
                    }).el++;

                    if (
                      ocs2.find(function (ocs2) {
                        return ocs2.ed == monomios[m].numero[oc];
                      }).el <= ocs
                    ) {
                      repetido.find(function (repetido) {
                        return repetido.monum == u;
                      }).letr += `.${monomios[u].numero[e]}`;
                    }
                  }
                } else {
                }
              }
            }
          }
        }
      }
    }

    reps.push(repetido);

    for (nope in repetido) {
      if (repetido[nope].letr[0] == "-") {
        la = "";
        for (u in repetido[nope].letr) {
          if (u != 0 && u != 1) {
            la += repetido[nope].letr[u];
          }
        }

        if (
          repetido.find(function (repetido) {
            return repetido.letr == la;
          })
        ) {
          repetido.splice(nope, 1);
        }
      }
    }

    for (moe = repetido.length - 1; moe >= 0; moe--) {
      podeir = true;
      qual = -1;
      for (meow in segs) {
        array1 = [];
        for (d in segs[meow].car) {
          array1.push(segs[meow].car[d]);
        }

        array2 = [];
        for (d in repetido[moe].letr) {
          array2.push(repetido[moe].letr[d]);
        }

        if (segs[meow].car.length < repetido[moe].letr.length) {
          divisao = DIVIDIR(VAI(segs[meow].car), VAI(repetido[moe].letr));
        } else {
          divisao = DIVIDIR(VAI(repetido[moe].letr), VAI(segs[meow].car));
        }

        if (divisao == "" || divisao == "-") {
          podeir = false;
          qual = meow;
        }
      }

      if (podeir == true) {
        splitUp(repetido[moe].letr);
        function splitUp(str) {
          estado = "";
          // CÓDIGO PARA ADICIONAR OS TERMOS EM COMUM DOS MONÔMIOS NA LISTA SEGS(SEGMENTOS)
          for (i in str) {
            if (str[i] == "." && estado != "-") {
              permission = versetem(estado);
              //console.log(permission)
              if (permission == true && estado != " " && estado != "-") {
                segs.push({ car: estado, mons: [m] });
              }
            }
            estado += str[i];
            if (i == str.length - 1) {
              permission = versetem(estado);
              if (permission == true && estado != " " && estado != "-") {
                segs.push({ car: estado, mons: [m] });
              }
            }
          }
          //
        }
      } else if (segs[qual].mons.indexOf(m) == -1) {
        segs[qual].mons.push(m);
      }
    }
  }

  for (nl = 0; nl < segs.length; nl++) {
    for (n = 0; n < segs.length; n++) {
      if (n != nl) {
        stay = VAI(segs[n].car);
        contido = true;
        for (dry in segs[nl].car) {
          if (segs[nl].car[dry] != "." && segs[nl].car[dry] != "-") {
            if (stay.indexOf(segs[nl].car[dry]) != -1) {
              stay.splice(stay.indexOf(segs[nl].car[dry]), 1);
            } else {
              contido = false;
            }
          }
        }
        if (contido == true) {
        }

        //if (String(segs[n].car).search(String(segs[nl].car)) != -1) {
        if (contido == true) {
          for (u in segs[n].mons) {
            if (segs[nl].mons.indexOf(segs[n].mons[u]) != -1) {
            } else {
              segs[nl].mons.push(segs[n].mons[u]);
            }
          }
        }
      }
    }
  }

  function ehprimo(Number) {
    parar = false;
    for (t = 2; t < Number && parar == false; t++) {
      if (Number % t == 0) {
        parar = true;
      }
    }
    if (parar) return false;
    else return true;
  }

  grtols = [];

  for (hi in segs) {
    segs[hi].length = segs[hi].mons.length;

    grtols.push(segs[hi]);
  }

  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    grtols.push(segs[organizado[ah]]);
  }

  segs = grtols;

  //DIVS
  ml = monomios.length;

  divs = ehprimo2(ml);

  if (divs.length == 0) {
    divs = [1];
  }


  for (tie in segs) {
    //
    segs[tie].godhelpme = [...segs[tie].mons];
  }

  okentao = 0;

  roll = [];

  scarecrow = [];
  for (anchor in segs) {
    army = [];
    lpisthebest = "";
    for (fall in segs[anchor].car) {
      if (lpisthebest.length == 0) {
        lpisthebest = segs[anchor].car[fall];
      } else if (
        lpisthebest.search("[0-9]") != -1 &&
        segs[anchor].car[fall].search("[0-9]") != -1
      ) {
        lpisthebest += segs[anchor].car[fall];
      } else {
        army.push(lpisthebest);
        if (segs[anchor].car[fall] != ".") {
          lpisthebest = segs[anchor].car[fall];
        } else {
          if (segs[anchor].car[Number(fall) + 1].search("[0-9]") != -1) {
            lpisthebest = "*";
          } else {
            lpisthebest = "";
          }
        }
      }
      if (fall == segs[anchor].car.length - 1) {
        army.push(lpisthebest);
      }
    }
    bell = [...army];

    for (pahh in army) {
      //
      if (army[pahh] == "*") {
        army[pahh] = ".";
      }
    }
    scarecrow.push({
      divididos: [],
      outrodiv: [],
      poss: [...segs[anchor].mons],
      divisor: [...army],
      positions: [...segs[anchor].mons],
    });
    for (high in segs[anchor].mons) {
      army = [...bell];

      lightson = [...army];
      pain = DIVIDIR(army, monomios[segs[anchor].mons[high]].numero);

      if (pain.length == 0 || pain.search("([0-9]|[a-z)])") == -1) {
        if (
          lightson.indexOf("-") != -1 &&
          monomios[segs[anchor].mons[high]].numero.indexOf("-") == -1
        ) {
          pain = "-1";
          //
          scarecrow[anchor].divididos.push("1");
          scarecrow[anchor].outrodiv.push(pain);
        } else if (
          lightson.indexOf("-") == -1 &&
          monomios[segs[anchor].mons[high]].numero.indexOf("-") != -1
        ) {
          pain = "-1";
          //
          scarecrow[anchor].divididos.push("1");
          scarecrow[anchor].outrodiv.push(pain);
        } else {
          pain = "1";
          scarecrow[anchor].divididos.push(pain);
          scarecrow[anchor].outrodiv.push(pain);
        }
      } else {
        right = "";
        for (feet in pain) {
          if (pain[feet] != "+") {
            right += pain[feet];
          }
        }

        uy = "";
        //

        for (xarope in right) {
          //
          if (xarope == 0 && right[xarope] == "*") {
            //*2
            //
          } else if (xarope == right.length - 1 && right[xarope] == "*") {
            //2*
            //
          } else if (
            right[xarope] == "*" &&
            String(right[Number(xarope) + 1]).search("[0-9]") == -1
          ) {
            //2*x
            //
          } else if (
            right[xarope] == "*" &&
            String(right[Number(xarope) - 1]).search("[0-9]") == -1
          ) {
            //x*2
            //
          } else {
            uy += right[xarope];
          }
        }

        scarecrow[anchor].outrodiv.push(uy);

        if (uy[0] == "-") {
          holdon = "";
          for (qual in uy) {
            if (uy[qual] != "-") holdon += uy[qual];
          }

          uy = holdon;
        }
        scarecrow[anchor].divididos.push(uy);
      }
    }
  }

  miss = [];

  for (ah in scarecrow) {
    for (é in scarecrow[ah].divididos) {
      if (
        miss.find(function (miss) {
          return miss.dividido == scarecrow[ah].divididos[é];
        }) == undefined
      ) {
        miss.push({
          dividido: scarecrow[ah].divididos[é],
          aparicoes: [Number(ah)],
          divisor: scarecrow[ah].divisor,
        });
      } else {
        miss
          .find(function (miss) {
            return miss.dividido == scarecrow[ah].divididos[é];
          })
          .aparicoes.push(Number(ah));
      }
    }
  }

  quantosfatores = Number(monomios.length) / Number(divs[okentao]);
  quantasposições = Number(monomios.length) / Number(quantosfatores);

  //

  //ORDEnAnO O MISS DE ACORDO COM O TAMAnHO DO APARIÇÕES

  grtols = [];
  for (hi in miss) {
    ////
    miss[hi].length = miss[hi].aparicoes.length;

    grtols.push(miss[hi]);
  }
  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    ////
    grtols.push(miss[organizado[ah]]);
  }
  miss = [...grtols];
  //
  deucerto = false;
  java = 0;

  //15 + 5b + 15l + 5bl

  //console.log('OK, LET ME FIX THIS THING')

  roller = [];
  for (eep in miss) {
    //console.log('>>>>>>>>>>>>>>>>>>>',eep, miss[eep].aparicoes)

    //console.log('---')
    for (quad in miss) {
      //console.log('')
      if (quad != eep) {
        //console.log(quad,miss[quad].aparicoes)

        repeated = [];
        repwri = "";
        for (vespa in miss[eep].aparicoes) {
          //console.log(miss[eep].aparicoes[vespa])
          if (miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa]) != -1) {
            //console.log(miss[quad].aparicoes,'indexOf(',miss[eep].aparicoes[vespa],') não é igual a -1')
            repeated.push(miss[eep].aparicoes[vespa]);

            repwri += "," + miss[eep].aparicoes[vespa];

            //console.log('repetido:',repeated,'repwri',repwri)

            if (
              roller.find(function (roller) {
                return roller.rept == repwri;
              }) == undefined
            ) {
              //console.log('PODE PUSHAR',{rept: repwri,opl:repeated,position: [eep,quad]}, repeated, repeated.length)
              roller.push({
                rept: repwri,
                opl: [...repeated],
                position: [eep, quad],
              });
            } else {
              if (
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.indexOf(eep) == -1
              ) {
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.push(eep);
              }

              if (
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.indexOf(quad) == -1
              ) {
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.push(quad);
              }
            }
          }
        }
      }
    }
  }
  e = [...roller];

  while (java < miss.length && deucerto == false) {
    //FOCO
    podeser = [];
    for (outro in miss) {
      if (
        outro != java /*&& miss[outro].aparicoes.length >= quantasposições*/
      ) {
        presentes = [];
        for (quecoisa in miss[outro].aparicoes) {
          fatorzinho = miss[outro].aparicoes[quecoisa];

          if (miss[java].aparicoes.indexOf(fatorzinho) != -1) {
            presentes.push(fatorzinho);
          }
        }

        adicionou = false;
        for (idk in podeser) {
          //
          esigual = true;
          for (denovo in podeser[idk].opl) {
            if (podeser[idk].opl[denovo] == presentes[denovo]) {
              //
            } else {
              esigual = false;
            }
          }
          if (esigual == true) {
            //podeser[idk].position.push(outro)
            adicionou = true;
          }
        }
        if (
          presentes.length > 0 &&
          presentes.length > 0 &&
          adicionou == false
        ) {
          //podeser.push({opl: presentes, position: [outro]})
        }
      }
    }
    //
    podeser = [...roller];

    for (belief in podeser) {
      if (podeser[belief].position.indexOf(java) == -1) {
        //podeser[belief].position.push(String(java))
      }

      shot = "";
      for (gun in podeser[belief].opl) {
        shot += String(podeser[belief].opl[gun]) + ",";
      }

      if (roll.length == 0) {
        roll.push({
          repetidos: [...podeser[belief].opl],
          way: shot,
          posições: [...podeser[belief].position],
        });
      } else if (
        roll.find(function (roll) {
          return roll.way == shot;
        }) != undefined
      ) {
        //SE JÁ TIVER NA LSITA

        for (capital in podeser[belief].position) {
          if (
            roll
              .find(function (roll) {
                return roll.way == shot;
              })
              .posições.indexOf(podeser[belief].position[capital]) == -1
          ) {
            roll
              .find(function (roll) {
                return roll.way == shot;
              })
              .posições.push(podeser[belief].position[capital]);
          }
        }
      } else {
        roll.push({
          repetidos: [...podeser[belief].opl],
          way: shot,
          posições: [...podeser[belief].position],
        });
      }
    }

    whyis = java;
    if (podeser.length > 0) {
      for (cold in podeser) {
        if (
          podeser[cold].position.length == quantosfatores &&
          podeser[cold].opl.length == quantasposições &&
          miss[whyis].aparicoes.length == quantasposições
        ) {
          //
          deucerto = true;

          ficaassim = "";
          //podeser[cold].position.push(whyis)

          for (yehaa in podeser[cold].position) {
            //

            if (miss[podeser[cold].position[yehaa]].dividido[0] == "-") {
              fi = "";
              for (ohjesus in miss[podeser[cold].position[yehaa]].dividido) {
                if (
                  miss[podeser[cold].position[yehaa]].dividido[ohjesus] != "-"
                ) {
                  fi += miss[podeser[cold].position[yehaa]].dividido[ohjesus];
                }
              }
              //
              if (yehaa != 0) {
                ficaassim += ` - ${fi}`;
              } else {
                ficaassim += `-${fi}`;
              }
            } else if (yehaa != 0) {
              ficaassim += " + ";
              ficaassim += miss[podeser[cold].position[yehaa]].dividido;
            } else {
              ficaassim += miss[podeser[cold].position[yehaa]].dividido;
            }
          }

          for (ruin in podeser[cold].opl) {
            emotion = "";
            for (scream in scarecrow[podeser[cold].opl[ruin]].divisor) {
              emotion += scarecrow[podeser[cold].opl[ruin]].divisor[scream];
            }
          }
        }
      }
    }
    java++;
  }
  okentao++;

  INDIRETARROLL();

  for (ne in roll) {
    //for (ne = 0; ne < 1; ne++) {
    
    arranjar = [];
    for (pq in roll[ne].repetidos) {
      (gosto = roll[ne].repetidos[pq]),
        scarecrow[roll[ne].repetidos[pq]].divididos;

      arranjar.push({ pos: pq, ocupa: [], origin: gosto });

      for (moon in roll[ne].posições) {
        vaiir =
          scarecrow[gosto].outrodiv[
            scarecrow[gosto].divididos.indexOf(
              miss[roll[ne].posições[moon]].dividido
            )
          ];
        arranjar[pq].ocupa.push(vaiir);
      }
    }

    jafoi = [];

    perfectwave = [];
    for (tosse in arranjar) {
      if (jafoi.indexOf(tosse) == -1) {
        organizer = { agrupar: [tosse], referencia: arranjar[tosse].ocupa };

        for (calor in arranjar) {
          if (calor != tosse) {
            equals = true;
            igualar = [];
            for (boring in arranjar[calor].ocupa) {
              sendocomparado = arranjar[calor].ocupa[boring];
              comparador = arranjar[tosse].ocupa[boring];

              if (sendocomparado[0] != comparador[0]) {
                igualar.push(true);
              } else {
                igualar.push(false);
              }
            }
            if (igualar.indexOf(false) == -1 || igualar.indexOf(true) == -1) {
              jafoi.push(calor);
              organizer.agrupar.push(calor);
            }
          }
        }
        perfectwave.push(organizer);
      }
    }

    for (youchoose in perfectwave) {
      ficarassim = perfectwave[youchoose].referencia;

      for (catraca in perfectwave[youchoose].agrupar) {
        presa = perfectwave[youchoose].agrupar[catraca];

        diferente = false;
        for (moon in roll[ne].posições) {
          //
          vaiir =
            scarecrow[arranjar[presa].origin].outrodiv[
              scarecrow[arranjar[presa].origin].divididos.indexOf(
                miss[roll[ne].posições[moon]].dividido
              )
            ];
          //
          if (vaiir != ficarassim[moon]) {
            diferente = true;
            scarecrow[arranjar[presa].origin].outrodiv[
              scarecrow[arranjar[presa].origin].divididos.indexOf(
                miss[roll[ne].posições[moon]].dividido
              )
            ] = ficarassim[moon];
          }
        }
        if (diferente == true) {
          lista = scarecrow[arranjar[presa].origin].divisor;
          if (lista != "-") {
            modificar = ["-", "."];
            for (saved in lista) {
              modificar.push(lista[saved]);
            }
            //
            scarecrow[arranjar[presa].origin].divisor = modificar;
          } else {
            lista.splice(0, 2);
          }
        }
      }
    }
  }

  for (sei in scarecrow) {
    for (ai in scarecrow[sei].divididos) {
      scarecrow[sei].divididos[ai] = scarecrow[sei].outrodiv[ai];
    }
  }

  miss = [];

  for (ah in scarecrow) {
    for (é in scarecrow[ah].divididos) {
      if (
        miss.find(function (miss) {
          return miss.dividido == scarecrow[ah].divididos[é];
        }) == undefined
      ) {
        miss.push({
          dividido: scarecrow[ah].divididos[é],
          aparicoes: [Number(ah)],
          divisor: scarecrow[ah].divisor,
        });
      } else {
        miss
          .find(function (miss) {
            return miss.dividido == scarecrow[ah].divididos[é];
          })
          .aparicoes.push(Number(ah));
      }
    }
  }

  grtols = [];
  for (hi in miss) {
    miss[hi].length = miss[hi].aparicoes.length;

    grtols.push(miss[hi]);
  }
  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    grtols.push(miss[organizado[ah]]);
  }
  miss = [...grtols];

  java = 0;
  roll = [];
  deucerto = false;

  //console.log('OK, LET ME FIX THIS THING')

  roller = [];
  for (eep in miss) {
    for (quad in miss) {
      if (quad != eep) {
        repeated = [];
        repwri = "";
        for (vespa in miss[eep].aparicoes) {
          if (miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa]) != -1) {
            repeated.push(miss[eep].aparicoes[vespa]);

            repwri += "," + miss[eep].aparicoes[vespa];

            if (
              roller.find(function (roller) {
                return roller.rept == repwri;
              }) == undefined
            ) {
              //console.log('PODE PUSHAR',{rept: repwri,opl:repeated,position: [eep,quad]}, repeated, repeated.length)
              roller.push({
                rept: repwri,
                opl: [...repeated],
                position: [eep, quad],
              });
            } else {
              if (
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.indexOf(eep) == -1
              ) {
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.push(eep);
              }

              if (
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.indexOf(quad) == -1
              ) {
                roller
                  .find(function (roller) {
                    return roller.rept == repwri;
                  })
                  .position.push(quad);
              }
            }
          }
        }
      }
    }
  }

  while (java < miss.length && deucerto == false) {
    //FOCO
    podeser = [];
    for (outro in miss) {
      if (
        outro != java /*&& miss[outro].aparicoes.length >= quantasposições*/
      ) {
        presentes = [];
        for (quecoisa in miss[outro].aparicoes) {
          fatorzinho = miss[outro].aparicoes[quecoisa];

          if (miss[java].aparicoes.indexOf(fatorzinho) != -1) {
            presentes.push(fatorzinho);
          }
        }

        adicionou = false;
        for (idk in podeser) {
          //
          esigual = true;
          for (denovo in podeser[idk].opl) {
            if (podeser[idk].opl[denovo] == presentes[denovo]) {
            } else {
              esigual = false;
            }
          }
          if (esigual == true) {
            //podeser[idk].position.push(outro)
            adicionou = true;
          }
        }
        if (
          presentes.length > 0 &&
          presentes.length > 0 &&
          adicionou == false
        ) {
          //podeser.push({opl: presentes, position: [outro]})
        }
      }
    }
    podeser = [...roller];

    for (belief in podeser) {
      if (podeser[belief].position.indexOf(java) == -1) {
        //podeser[belief].position.push(String(java))
      }

      shot = "";
      for (gun in podeser[belief].opl) {
        shot += podeser[belief].opl[gun] + ",";
      }

      if (roll.length == 0) {
        roll.push({
          repetidos: [...podeser[belief].opl],
          way: shot,
          posições: [...podeser[belief].position],
        });
      } else if (
        roll.find(function (roll) {
          return roll.way == shot;
        }) != undefined
      ) {
        //SE JÁ TIVER NA LSITA
        for (capital in podeser[belief].position) {
          if (
            roll
              .find(function (roll) {
                return roll.way == shot;
              })
              .posições.indexOf(podeser[belief].position[capital]) == -1
          ) {
            roll
              .find(function (roll) {
                return roll.way == shot;
              })
              .posições.push(podeser[belief].position[capital]);
          }
        }
      } else {
        roll.push({
          repetidos: [...podeser[belief].opl],
          way: shot,
          posições: [...podeser[belief].position],
        });
      }
    }

    whyis = java;
    if (podeser.length > 0) {
      for (cold in podeser) {
        if (
          podeser[cold].position.length == quantosfatores &&
          podeser[cold].opl.length == quantasposições &&
          miss[whyis].aparicoes.length == quantasposições
        ) {
          //
          deucerto = true;

          ficaassim = "";
          //podeser[cold].position.push(whyis)

          for (yehaa in podeser[cold].position) {
            //

            if (miss[podeser[cold].position[yehaa]].dividido[0] == "-") {
              fi = "";
              for (ohjesus in miss[podeser[cold].position[yehaa]].dividido) {
                if (
                  miss[podeser[cold].position[yehaa]].dividido[ohjesus] != "-"
                ) {
                  fi += miss[podeser[cold].position[yehaa]].dividido[ohjesus];
                }
              }
              if (yehaa != 0) {
                ficaassim += ` - ${fi}`;
              } else {
                ficaassim += `-${fi}`;
              }
            } else if (yehaa != 0) {
              ficaassim += " + ";
              ficaassim += miss[podeser[cold].position[yehaa]].dividido;
            } else {
              ficaassim += miss[podeser[cold].position[yehaa]].dividido;
            }
          }

          for (ruin in podeser[cold].opl) {
            emotion = "";
            for (scream in scarecrow[podeser[cold].opl[ruin]].divisor) {
              emotion += scarecrow[podeser[cold].opl[ruin]].divisor[scream];
            }
          }
        }
      }
    }
    java++;
  }

  console.log("HORA DA VERDADE!");

  INDIRETARROLL();
 

  youdumb = [];

  aswillbe2 = [];
  for (raging = 0; raging < roll.length; raging++) {
    asitwas = [];

    obe = { what: [] };

    for (still in roll[raging].repetidos) {
      asitwas2 = [];
      aswillbe = [];

      mylife = "(";
      for (still2 in roll[raging].posições) {
        if (still != 0) {
          mylife += " + " + miss[roll[raging].posições[still2]].dividido;
        } else {
          mylife += miss[roll[raging].posições[still2]].dividido;
        }

        conseguiu = false;
        older = 0;
        while (older < monomios.length && conseguiu == false) {
          DESFATORAR(
            monomios[older].numero,
            scarecrow[roll[raging].repetidos[still]].divisor,
            miss[roll[raging].posições[still2]].dividido
          );

          //correto == ['2','*','10','x'] (NÚMERO QUE VAI SER COMPARADO)
          //eg2 == ['10'] (NÚMERO QUE VAI MULTIPLICAR)
          //eg == '2x' (NÚMERO QUE VAI SER MULTIPLICADO)

          function DESFATORAR(correto, eg2, eg) {
            eassim = [];
            solo = "";
            for (ne in eg) {
              if (eg[ne] != ".") {
                if (solo.length == 0) {
                  solo += eg[ne];
                } else if (
                  String(solo.search("[0-9]")) != -1 &&
                  String(eg[ne]).search("[0-9]") != -1
                ) {
                  solo += eg[ne];
                } else {
                  eassim.push(solo);
                  solo = "";
                  solo += eg[ne];
                }
                if (ne == eg.length - 1) {
                  eassim.push(solo);
                }
              } else {
              }
            }

            eg = eassim;

            whythat = [...eg];

            teri = false;
            juntar = "";
            for (estudar in eg2) {
              if (eg2[estudar] == ".") {
                teri = true;
                if (eg2[Number(estudar) + 1].search("[0-9]") != -1) {
                  whythat.push(juntar);
                  juntar = "";
                  whythat.push("*");
                }
              } else {
                if (juntar.length == 0) {
                  juntar = eg2[estudar];

                  if (estudar == eg2.length - 1) {
                    whythat.push(juntar);
                  }
                } else if (
                  eg2[estudar].search("[0-9]") != -1 &&
                  juntar.search("[0-9]") != -1
                ) {
                  juntar += eg2[estudar];

                  if (estudar == eg2.length - 1) {
                    whythat.push(juntar);
                  }
                } else {
                  whythat.push(juntar);
                  juntar = eg2[estudar];
                  if (estudar == eg2.length - 1) {
                    whythat.push(juntar);
                  }
                }
              }
            }
            if (teri == false) {
              whythat = [];
              for (t in eg2) {
                whythat.push(eg2[t]);
              }
              for (t in eg) {
                whythat.push(eg[t]);
              }
            }

            numerinhos = [];
            for (decisao in correto) {
              if (
                correto[decisao] != "*" &&
                correto[decisao] != "." &&
                correto[decisao] != "+" &&
                correto[decisao] != "-"
              ) {
                numerinhos.push(correto[decisao]);
              }
            }

            thatway = [...numerinhos];

            for (poder in whythat) {
              if (
                whythat[poder] != "*" &&
                whythat[poder] != "." &&
                whythat[poder] != "+" &&
                numerinhos.indexOf(whythat[poder]) != -1
              ) {
                numerinhos.splice(numerinhos.indexOf(whythat[poder]), 1);
              }
            }

            for (pombo = whythat.length - 1; pombo >= 0; pombo--) {
              if (whythat[pombo] == "*" || whythat[pombo] == "1") {
                whythat.splice(pombo, 1);
              }
            }

            for (pray = whythat.length - 1; pray >= 0; pray--) {
              if (whythat[pray] == "-") whythat.splice(pray, 1);
            }

            if (numerinhos.length == 0 && thatway.length == whythat.length) {
              conseguiu = true;
            }
          }
          older++;
        }
        asitwas.push(older - 1);
        asitwas2.push(older - 1);
        aswillbe.push(older - 1);
      }

      obe.what.push({ ar: asitwas2, indice: still });
      aswillbe2.push({ oque: aswillbe, onde: raging });
    }

    youdumb.push({ mons: asitwas, rag: raging, w: obe, polen: raging });
  }

  dontworry = [];
  for (behappy in youdumb) {
    for (armenia in youdumb) {
      if (armenia != behappy) {
        doeshave = true;
        for (sofar in youdumb[armenia].mons) {
          if (
            youdumb[behappy].mons.indexOf(youdumb[armenia].mons[sofar]) == -1
          ) {
            doeshave = false;
          }
        }

        if (doeshave == true) {
          if (dontworry.indexOf(behappy) == -1) {
            dontworry.push(armenia);
          }
        }
      }
    }
  }

  for (da = youdumb.length - 1; da >= 0; da--) {
    if (dontworry.indexOf(String(da)) != -1) {
      //youdumb.splice(da,1)
    }
  }

  grtols = [];

  for (hi in youdumb) {
    //
    youdumb[hi].length = youdumb[hi].mons.length;

    grtols.push(youdumb[hi]);
  }

  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    grtols.push(youdumb[organizado[ah]]);
  }

  youdumb = [];
  for (erro in grtols) {
    youdumb.push(grtols[erro]);
  }

  pans = [];
  numerospresentes = [];

  for (AH in youdumb) {
  }
  for (wrecked in youdumb) {
    initial = youdumb[wrecked].w.what;
    for (agg in initial) {
    }
  }

  grtols = [];
  for (hi in youdumb) {
    youdumb[hi].length = youdumb[hi].w.what.length;

    grtols.push(youdumb[hi]);
  }
  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    ////
    grtols.push(youdumb[organizado[ah]]);
  }
  youdumb = [...grtols];

  heya = [...youdumb];
  for (imback in youdumb) {
    //

    sticky = [];
    initial = youdumb[imback].w.what;

    if (initial.length > 0) {
      inside = { which: [], numberyoudumb: youdumb[imback].polen };

      for (agg in initial) {
        taai = false;
        for (eng in initial[agg].ar) {
          //
          if (numerospresentes.indexOf(initial[agg].ar[eng]) == -1) {
          } else {
            taai = true;
          }
        }

        if (taai == false) {
          inform = { monos: initial[agg].ar, numberwhat: initial[agg].indice };

          inside.which.push(inform);

          for (darkening in inform.monos) {
            sticky.push(inform.monos[darkening]);
          }

          for (eng in initial[agg].ar) {
            numerospresentes.push(initial[agg].ar[eng]);
          }
        }
      }

      if (inside.which.length > 0) {
        inside.todos = sticky;
        pans.push(inside);
      }

     
      for (h in youdumb) {
        if (h != imback) {
          if (youdumb[h].w.what.length > 0) {
            //
          }

          for (tempo = youdumb[h].w.what.length - 1; tempo >= 0; tempo--) {
            //

            dulu = false;

            for (and in youdumb[h].w.what[tempo].ar) {
              //
              if (
                numerospresentes.indexOf(youdumb[h].w.what[tempo].ar[and]) != -1
              ) {
                //
                dulu = true;
              }
            }
            if (dulu == false) {
              //
            } else {
              //
              //youdumb[h].w.what.splice(tempo, 1)
              //imback++
            }
          }
        }
      }

      //
      for (vixi in youdumb) {
        //if (youdumb[vixi].w.what.length > 0) {
        //
        for (ainao in youdumb[vixi].w.what) {
          //
        }
        //}
      }

      for (força in youdumb) {
        //
        entao = [];
        for (areo in youdumb[força].w.what) {
          //
          for (paris in youdumb[força].w.what[areo].ar) {
            //
            entao.push(Number(youdumb[força].w.what[areo].ar[paris]));
          }
        }
        //
        youdumb[força].t = entao;
        //
      }

      grtols = [];

      for (hi in youdumb) {
        ////
        youdumb[hi].length = youdumb[hi].t.length;

        grtols.push(youdumb[hi]);
      }

      ////
      ////

      organizado = sortob(grtols, "length")[1];

      grtols = [];
      for (ah in organizado) {
        ////
        grtols.push(youdumb[organizado[ah]]);
      }

      youdumb = [];
      for (erro in grtols) {
        //
        youdumb.push(grtols[erro]);
      }
    }
  }

  concatenar = "";
  numsdesfat = [];
  newexpress = [];

  for (bababa in pans) {
    edge = [];
    naonao = "";
    amount = [];

    tobreak = "";
    realife = [];
    amontoado = [];
    for (quassao in roll[pans[bababa].numberyoudumb].posições) {
      el = miss[roll[pans[bababa].numberyoudumb].posições[quassao]].dividido;

      gates = [];

      quase = [];
    
      teri = false;
      juntar = "";
      //
      for (estudar in el) {
        if (el[estudar] == "*") {
          teri = true;
          if (el[Number(estudar) + 1].search("[0-9]") != -1) {
            quase.push(juntar);
            juntar = "";
            quase.push("*");
          }
        } else {
          if (juntar.length == 0) {
            juntar = el[estudar];

            if (estudar == el.length - 1) {
              quase.push(juntar);
            }
          } else if (
            el[estudar].search("[0-9]") != -1 &&
            juntar.search("[0-9]") != -1
          ) {
            juntar += el[estudar];

            if (estudar == el.length - 1) {
              quase.push(juntar);
            }
          } else {
            quase.push(juntar);
            juntar = el[estudar];
            if (estudar == el.length - 1) {
              quase.push(juntar);
            }
          }
        }
      }

      if (teri == false) {
        quase = [];
        //
        for (t in el) {
          quase.push(el[t]);
        }
      }
      aconta = "";
      friend = "";

      elevar = 1;
      aster = false;

      for (patience in quase) {
        if (quase[patience] == "*") {
          aster = true;
          //
          //
          gates.push(quase[Number(patience) - 1]);
          gates.push("x");
          gates.push(quase[Number(patience) + 1]);

          quase[Number(patience) + 1] = fazerConta(gates)[0];
          aconta = fazerConta(gates)[0];
          friend = fazerConta(gates)[0];

          gates = [];
        } else if (quase[patience].search("[a-z]") != -1) {
          friend += quase[patience];
          if (quase[patience] == quase[Number(patience) - 1]) {
            elevar++;

            if (patience == quase.length - 1) {
              //
              aconta += `^${elevar}`;
              //
            }
          } else {
            if (elevar > 1) {
              //
              aconta += `^${elevar}`;
            }

            aconta += quase[patience];

            //

            elevar = 1;
          }
          //
        }
      }

      if (aster == false) {
        //
        direitando = "";
        for (h in quase) {
          direitando += quase[h];
        }
        friend = direitando;
      }

      if (aster == false) {
        //
        antes = "";
        for (eyes in quase) {
          //
          if (quase[eyes].search("[0-9]") != -1) {
            //
            antes += quase[eyes];
          }
        }
        antes += aconta;
        //

        aconta = antes;
      }

      realife.push(aconta);
      if (tobreak.length == 0) {
        if (quase[0] == "-") {
          negativo = true;
          if (aconta[0] == "-") {
            //
            mood = "";
            for (member in aconta) {
              if (aconta[member] != "-") {
                //
                mood += aconta[member];
              }
            }

            tobreak += `-${mood}`;
          } else {
            tobreak += `-${aconta}`;
          }
        } else {
          negativo = false;
          tobreak += aconta;
          //
          for (now in aconta) {
            //
          }
        }
      } else if (quase[0] == "-") {
        negativo = true;
        correct = "";
        for (okay in aconta) {
          //
          if (aconta[okay] != "-") {
            correct += aconta[okay];
            //
          }
        }
        //
        tobreak += ` - ${correct}`;
      } else {
        negativo = false;
        //
        tobreak += ` + ${aconta}`;
      }
      //

      //
      //

      if (negativo == true) {
        uh = "";
        for (i in friend) {
          if (friend[i] != "-") {
            uh += friend[i];
          }
        }
        amontoado.push("-");
        amontoado.push(uh);
      } else {
        amontoado.push("+");
        amontoado.push(friend);
      }
    }

    for (repr in pans[bababa].which) {
      //

      triste =
        scarecrow[
          roll[pans[bababa].numberyoudumb].repetidos[
            pans[bababa].which[repr].numberwhat
          ]
        ].divisor;

      quase = [];
      //
      juntar = "";
      teri = false;
      for (estudar in triste) {
        //

        ohjeez = triste[Number(estudar) - 1] != "-";
        //
        if (triste[estudar] == ".") {
          teri = true;
          if (
            triste[Number(estudar) + 1].search("[0-9]") != -1 &&
            ohjeez == true
          ) {
            quase.push(juntar);
            juntar = "";
            quase.push("*");
            //
          }
        } else {
          //quase.push(triste[estudar])
          //
          if (juntar.length == 0) {
            juntar = triste[estudar];
            //

            if (estudar == triste.length - 1) {
              quase.push(juntar);
            }
            //
          } else if (
            triste[estudar].search("[0-9]") != -1 &&
            juntar.search("[0-9]") != -1
          ) {
            //
            juntar += triste[estudar];
            //
            if (estudar == triste.length - 1) {
              //
              quase.push(juntar);
              //
            }
          } else {
            quase.push(juntar);
            juntar = triste[estudar];
            if (estudar == triste.length - 1) {
              quase.push(juntar);
              //
            }
          }
        }
      }
      //

      if (teri == false) {
        quase = [];
        //
        for (t in triste) {
          quase.push(triste[t]);
        }
      }

      aconta = "";
      friend = "";
      aster = false;
      elevar = 1;

      for (patience in quase) {
        if (quase[patience] == "*") {
          aster = true;

          gates.push(quase[Number(patience) - 1]);
          gates.push("x");
          gates.push(quase[Number(patience) + 1]);

          quase[Number(patience) + 1] = fazerConta(gates)[0];
          aconta = fazerConta(gates)[0];
          friend = fazerConta(gates)[0];

          gates = [];
        } else if (quase[patience].search("[a-z]") != -1) {
          //
          friend += quase[patience];
          if (quase[patience] == quase[Number(patience) - 1]) {
            elevar++;

            if (patience == quase.length - 1) {
              aconta += `^${elevar}`;
            }
          } else {
            if (elevar > 1) {
              aconta += `^${elevar}`;
            }

            aconta += quase[patience];

            elevar = 1;
          }
        }
      }

      if (aster == false) {
        //
        direitando = "";
        for (h in quase) {
          direitando += quase[h];
        }
        friend = direitando;
      }

      if (aster == false) {
        //

        antes = "";
        for (eyes in quase) {
          //
          if (quase[eyes].search("[0-9]") != -1) {
            //
            antes += quase[eyes];
          }
        }
        antes += aconta;
        //
        //for (t in quase) {
        //aconta+= quase[t]
        //}
        aconta = antes;
      }
      //

      edge.push(aconta);

      if (quase[0] == "-") {
        uh = "";
        for (i in friend) {
          if (friend[i] != "-") {
            uh += friend[i];
          }
        }
        amount.push("-");
        amount.push(uh);
      } else {
        amount.push("+");
        amount.push(friend);
      }

      if (naonao.length == 0) {
        if (quase[0] == "-") {
          naonao += `-${aconta}`;
        } else {
          naonao += aconta;
        }
      } else {
        if (quase[0] == "-") {
          naonao += ` - ${aconta}`;
        } else {
          naonao += ` + ${aconta}`;
        }
      }
    }

    if (concatenar.length > 0) {
      concatenar += " + ";
    }

    console.log('__________________')
    console.log(naonao,',', tobreak)
    fat1 = FATORAR2(FATORE(naonao))
    fat2 = FATORAR2(FATORE(tobreak))
    console.log(fat1[0],'segs.length:',fat1[3])
    console.log(fat2[0],'segs.length:',fat2[3])

    daprafat1 = false
    if (fat1[1] == 1 && fat1[2] == 0) { // IF PANS EQUALS TO 1 AND TODOSOSNUMEROS EQUALS TO ZERO(WHICH MEANS THERE IS NO MONOMIO LEFT)
    naonao = fat1[0]
    daprafat1 = true
    }

    daprafat2 = false
    if (fat2[1] == 1 && fat2[2] == 0) {
    tobreak = fat2[0]
    daprafat2 = true
    }

    console.log('__________________')

    if (edge.length > 1) {
      if (daprafat1 == false && daprafat2 == false) { // OS DOIS NÃO DÃO PARA FATORAR
      concatenar += `(${naonao})(${tobreak})`;
     }else if(daprafat1 == true && daprafat2 == true){ // OS DOIS DÃO PARA FATORAR
        concatenar += `${naonao}${tobreak}`;
      }else if(daprafat1 == true && daprafat2 == false) { // SOMENTE O PRIMEIRO DÁ PARA FATORAR
        concatenar += `${naonao}(${tobreak})`;
      }else{ // SOMENTE O SEGUNDO DÁ PARA FATORAR
        concatenar += `(${naonao})${tobreak}`;
      }
    } else {
      if (daprafat2 == false) { // SE O SEGUNDO NÃO DER PARA FATORAR
      concatenar += `${naonao}(${tobreak})`;
      }else{ // SE O SEGUNDO DER PARA FATORAR
        concatenar += `${naonao}${tobreak}`;
      }
    }


    qualexp1 = naonao;
    qualexp = "";

    parar = false;
    for (copy in qualexp1) {
      //console.log(qualexp1[copy])
      if (qualexp1[copy] != " ") {
        if (
          qualexp1[copy].search("[0-9]") != -1 ||
          qualexp1[copy].search("[a-z]") != -1 ||
          qualexp1[copy].search("[\\+\\-\\^]") != -1
        ) {
          //console.log(qualexp1[copy],'ir')
          qualexp += qualexp1[copy];
        } else {
          parar = true;
        }
      }
    }

    if (qualexp != "" && parar == false) {
      ground = "";
      expression = [];
      for (phy in qualexp) {
        if (qualexp[phy].search("[0-9]") != -1) {
          if (ground.search("[0-9]") != -1) {
            ground += qualexp[phy];
          } else if (ground.length > 0) {
            expression.push(ground);
            ground = qualexp[phy];
          } else {
            ground = qualexp[phy];
          }
        } else {
          if (ground.length > 0) {
            expression.push(ground);
          }
          ground = qualexp[phy];
        }
        if (phy == qualexp.length - 1) {
          expression.push(ground);
        }
      }
    }

    //console.log('WHATTTTTTTTTT??????????*****___', expression)

    //FAZENDO A CONTA
    primeirocaso = SOMANDOMONOMIOS(amount);
    segundocaso = SOMANDOMONOMIOS(amontoado);

    mudou = false;
    if (primeirocaso[1] == primeirocaso[2]) {
    } else {
      mudou = true;
    }

    if (segundocaso[1] == segundocaso[2]) {
    } else {
      mudou = true;
    }

    if (mudou == true) {
      naonao = primeirocaso[0];
      tobreak = segundocaso[0];

      reason = [];
      for (k in naonao) {
        if (k != 0 && naonao[k] != "-" && naonao[k] != "+") {
          deserve = naonao[k - 1];
          reason.push(k - 1);
          deserve += naonao[k];

          naonao[k] = deserve;
        }
      }

      for (time = naonao.length - 1; time >= 0; time--) {
        if (reason.indexOf(time) != -1) {
          naonao.splice(time, 1);
        }
      }

      reason = [];
      for (k in tobreak) {
        if (k != 0 && tobreak[k] != "-" && tobreak[k] != "+") {
          deserve = tobreak[k - 1];
          deserve += tobreak[k];
          reason.push(k - 1);
          tobreak[k] = deserve;
        }
      }

      for (time = tobreak.length - 1; time >= 0; time--) {
        if (reason.indexOf(time) != -1) {
          tobreak.splice(time, 1);
        }
      }

      for (roberto in naonao) {
        for (vaidarcerto in tobreak) {
          novomon = MULTIPLICARDIREITO(naonao[roberto], tobreak[vaidarcerto]);

          console.warn("newexpress", newexpress);
          if (novomon[0] == "-") {
            miya = "";
            for (n in novomon) {
              if (novomon[n] != "-") {
                miya += novomon[n];
              }
            }

            newexpress.push("-");
            newexpress.push(miya);
          } else {
            newexpress.push("+");
            newexpress.push(novomon);
          }
        }
      }

      for (e in pans[bababa].todos) {
        numsdesfat.push(pans[bababa].todos[e]);
      }
    }
  }

  if (numsdesfat.length > 0) {
    console.warn("VAI TER QUE FATORAR DE NOVO");
    todososnumeros = [];
    for (acaba in monomios) {
      //
      todososnumeros.push(acaba);
    }

    for (feliz = todososnumeros.length - 1; feliz >= 0; feliz--) {
      //
      if (numsdesfat.indexOf(Number(todososnumeros[feliz])) != -1) {
        todososnumeros.splice(feliz, 1);
      }
    }

    for (eh in todososnumeros) {
      join = "";
      for (sempresei in monomios[todososnumeros[eh]].numero) {
        if (
          monomios[todososnumeros[eh]].numero[sempresei] != "+" &&
          monomios[todososnumeros[eh]].numero[sempresei] != "-"
        ) {
          ter = monomios[todososnumeros[eh]].numero[sempresei];

          join += ter;
        }
      }
      if (monomios[todososnumeros[eh]].numero[0] == "+") {
        newexpress.push("+");
        newexpress.push(join);
      } else if (monomios[todososnumeros[eh]].numero[0] == "-") {
        newexpress.push("-");
        newexpress.push(join);
      } else {
        newexpress.push("+");
        newexpress.push(join);
      }
    }

    //
    //

    //FATORAR(newexpress)
  } else {
    todososnumeros = [];
    for (acaba in monomios) {
      todososnumeros.push(acaba);
    }
    cancelar = [];
    for (feliz = todososnumeros.length - 1; feliz >= 0; feliz--) {
      if (numerospresentes.indexOf(Number(todososnumeros[feliz])) != -1) {
        todososnumeros.splice(feliz, 1);
      }
    }

    for (bye in todososnumeros) {
      quase = monomios[todososnumeros[bye]].numero;
      aconta = "";
      elevar = 1;
      aster = false;
      friend = "";

      gates = [];

      for (patience in quase) {
        if (quase[patience] == "*") {
          aster = true;
          //
          //
          gates.push(quase[Number(patience) - 1]);
          gates.push("x");
          gates.push(quase[Number(patience) + 1]);
          //

          //
          quase[Number(patience) + 1] = fazerConta(gates)[0];
          aconta = fazerConta(gates)[0];

          gates = [];
        } else if (quase[patience].search("[a-z]") != -1) {
          if (quase[patience] == quase[Number(patience) - 1]) {
            elevar++;

            if (patience == quase.length - 1) {
              aconta += `^${elevar}`;
            }
          } else {
            if (elevar > 1) {
              aconta += `^${elevar}`;
            }
            aconta += quase[patience];
            
            elevar = 1;
          }
        }
      }

      if (aster == false) {
        direitando = "";
        for (h in quase) {
          direitando += quase[h];
        }
        friend = direitando;
      }
      if (aster == false) {
        //
        antes = "";
        for (eyes in quase) {
          //
          if (quase[eyes].search("[0-9]") != -1) {
            //
            antes += quase[eyes];
          }
        }
        antes += aconta;
        //

        aconta = antes;
      }

      if (bye == 0) {
        if (concatenar.length > 0) {
          if (quase[0] == "-") {
            concatenar += ` - ${aconta}`;
          } else {
            concatenar += ` + ${aconta}`;
          }
        } else {
          if (quase[0] == "-") {
            concatenar += `-${aconta}`;
          } else {
            concatenar += `${aconta}`;
          }
        }
      } else {
        if (quase[0] == "-") {
          concatenar += ` - ${aconta}`;
        } else {
          concatenar += ` + ${aconta}`;
        }
      }
    }
  }

  //console.log(pans.length)
  if (pans.length == 1 && todososnumeros.length == 0) {
    //console.log('RESULTADO DA EXPRESSÃO',startexp,'é')
    //console.log(concatenar)
    //console.log('CERTNHO')
    return [concatenar, segs.length, roll.length];
  } else {
    //console.log('CERTINHO?')
    if (monomios.length > 1) {
      hei = concatenar;
      otherway = FATORAR2(startexp);
      //console.log(otherway[1], otherway[2])

      if (otherway[1] == 1 && otherway[2] == 0) {
        //console.log(otherway[1], otherway[2])
        //console.log('IS IT SERIOUS?')
        //console.log('RESULTADO DA EXPRESSÃO',startexp,'é')
        //console.log(otherway[0])
        return [otherway[0], otherway[3], otherway[4]];
      } else {
        //console.log('RESULTADO DA EXPRESSÃO',startexp,'é')
        //console.log(hei)
        return [hei, segs.length, roll.length];
      }
    } else {
      //console.log('RESULTADO DA EXPRESSÃO',startexp,'é')
      //console.log(concatenar,monomios)
      return [concatenar, segs.length, roll.length];
    }
  }

  //Vendo se o número é primo
  function ehprimo(Number) {
    parar = false;
    for (t = 2; t < Number && parar == false; t++) {
      if (Number % t == 0) {
        parar = true;
      }
    }
    if (parar) return false;
    else return true;
  }

  //Achando todos os divisores da quantidade de monômios
  //Ex: 12: 4, 3, 2, 6
  function ehprimo2(Number) {
    divisores = [];
    for (t = 2; t < Number && parar == false; t++) {
      if (Number % t == 0) {
        divisores.push(t);
      }
    }
    return divisores;
  }

  function sortob(n, pam) {
    var maiorparamenor = [];
    var posiçõesnumeros = [];
    var yposition = n;

    for (n in yposition) {
      maiorparamenor.push(
        -100000000000000000000000000000000000000000000000000000000000000000000000000000000
      );
      posiçõesnumeros.push(-1);
    }

    for (item in yposition) {
      var volume = 0;
      var dn = 0;
      for (volume in yposition) {
        if (dn == 0) {
          if (yposition[item][pam] > maiorparamenor[volume]) {
            var itens = yposition.length - (Number(volume) + 1);
            var leng = yposition.length;

            for (c = 0; c < itens; c++) {
              maiorparamenor[Number(leng) - 1] =
                maiorparamenor[Number(leng) - 2];
              posiçõesnumeros[Number(leng) - 1] =
                posiçõesnumeros[Number(leng) - 2];
              leng--;
            }
            maiorparamenor[volume] = yposition[item][pam];
            posiçõesnumeros[volume] = Number(item);
            dn = 10;
          }
        }
      }
    }
    return [maiorparamenor, posiçõesnumeros];
  }

  function doit(par) {
    segs2 = [];

    for (uf in par) {
      segs2[uf] = {};
      segs2[uf].mons = [...par[uf].mons];
      segs2[uf].car = par[uf].car;
    }

    relation = [];

    quanto = Number(monomios.length) / Number(divs[okentao]);

    numapars = [];

    util = [];
    for (t in segs2) {
      if (segs2[t].mons.length >= quanto) {
        util.push(segs2[t]);
      }
    }

    for (m in monomios) {
      aparic = 0;
      for (t in util) {
        if (util[t].mons.indexOf(Number(m)) != -1) {
          aparic++;
        }
      }
      numapars.push({ num: Number(m), vezes: aparic });
    }

    present = [];

    for (r in util) {
      lista = util[r].mons;
      present = { fix: [], falt: [] };

      rep = 0;
      for (g = 0; g < lista.length && rep < quanto; g++) {
        if (
          numapars.find(function (numapars) {
            return numapars.num == lista[g];
          }).vezes == 1
        ) {
          rep++;
          present.fix.push(lista[g]);
        }
      }

      if (present.fix.length < quanto) {
        for (g in lista) {
          if (present.fix.indexOf(lista[g]) == -1) {
            present.falt.push(lista[g]);
          }
        }

        if (present.fix.length == 0) {
          for (ti in present.falt) {
            numapars.find(function (numapars) {
              return numapars.num == present.falt[ti];
            }).vezes--;
          }
        }
      }
      relation[r] = present;
      relation[r].car = segs2[r].car;
    }

    for (c in relation) {
      if (relation[c].fix.length > 0) {
        faltam = Number(quanto) - Number(relation[c].fix.length);

        for (f = 0; f < faltam; f++) {
          relation[c].fix.push(relation[c].falt[f]);
          relation[c].falt[f] = -10;
        }

        for (tel = 0; tel < c; tel++) {
          if (relation[tel].fix.length > 0) {
          }

          outrorel = relation[tel];

          for (hu in outrorel.fix) {
            if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
              y = 0;
              for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                if (
                  relation[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                  outrorel.falt[ou] != -10
                ) {
                  outrorel.fix[hu] = outrorel.falt[ou];
                  outrorel.falt[ou] = -10;

                  y++;
                }
              }
            }
          }
        }
      }
    }

    groups = 0;
    conts = [];
    for (yougo in relation) {
      if (relation[yougo].fix.length > 0) {
        for (pals in relation[yougo].fix) {
          conts.push(relation[yougo].fix[pals]);
        }
        groups++;
      }
    }

    if (groups < divs[okentao]) {
      groups = 0;
      conts = [];
      for (yougo in relation) {
        if (relation[yougo].fix.length > 0) {
          for (pals in relation[yougo].fix) {
            conts.push(relation[yougo].fix[pals]);
          }
          groups++;
        }
      }

      if (divs[okentao] != groups) {
        tirados = [];
        for (wish in relation) {
          for (edge in relation[wish].fix) {
            tirados.push(relation[wish].fix[edge]);
          }
        }

        for (die in segs2) {
          tirar = [];
          for (h in segs2[die].mons) {
            if (tirados.indexOf(segs2[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            segs2[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs2) {
          grupos = Math.floor(Number(segs2[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs2[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                ob.problem = true;
              }

              ob.fix.push(segs2[sorrow].mons[imor]);
              tirados.push(segs2[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation.push(ob);
            }
          }
        }
      }

      males = [];
      for (nah = relation.length - 1; nah >= 0; nah--) {
        for (nop in relation) {
          if (relation[nop].fix.length > 0 && nop != nah) {
            igual = true;
            for (uh in relation[nop].fix) {
              if (relation[nah].fix.indexOf(relation[nop].fix[uh]) == -1) {
                igual = false;
              }
            }

            if (igual == true) {
              if (relation[nah].car.length > relation[nop].car.length) {
                males.push(Number(nop));
              }
            }
          } else if (relation[nop].fix.length == 0) {
            males.push(Number(nop));
          }
        }
      }

      for (nah = relation.length - 1; nah >= 0; nah--) {
        if (males.indexOf(nah) != -1) {
          relation.splice(nah, 1);
        }
      }

      numerosquetem = [];
      for (nah in relation) {
        if (relation[nah].fix.length > 0) {
          //

          for (nop in relation[nah].fix) {
            //
            numerosquetem.push(relation[nah].fix[nop]);
          }
        }
      }
      //

      segs2 = [];

      for (uf in par) {
        //
        //segs2.push(segs[uf])
        //segs[tie].godhelpme = [...segs[tie].mons]
        segs2[uf] = {};
        segs2[uf].mons = [...par[uf].mons];
        segs2[uf].car = par[uf].car;
      }

      for (pose in segs2) {
        for (me = segs2[pose].mons.length - 1; me >= 0; me--) {
          if (numerosquetem.indexOf(segs2[pose].mons[me]) != -1) {
            segs2[pose].mons.splice(me, 1);
          }
        }
      }

      fireonfire = [];

      for (uf in relation) {
        fireonfire[uf] = {};
        fireonfire[uf].mons = [...relation[uf].fix];
        fireonfire[uf].car = relation[uf].car;
      }

      for (red in fireonfire) {
        relation.push({ fix: fireonfire[red].mons, car: fireonfire[red].car });
      }
    } else if (groups > divs[okentao]) {
      mia = [];
      for (idk in segs2) {
        for (mcr in segs2) {
          if (mcr != idk) {
            if (segs2[mcr].mons.length <= segs2[idk].mons.length) {
              sames = [];
              for (y = 0; y < segs2[mcr].mons.length; y++) {
                //
                if (segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
                  //
                  sames.push("igual");
                } else {
                  //
                  sames.push("diferente");
                }
              }
              //
              if (sames.indexOf("diferente") == -1) {
                //

                if (mia.indexOf(mcr) == -1) {
                  mia.push(mcr);
                }
              }
            }
          }
        }
      }

      for (f = mia.length - 1; f >= 0; f--) {}

      numapars = [];

      relation = [];

      ////

      util = [];
      for (t in segs2) {
        if (segs2[t].mons.length >= quanto) {
          util.push(segs2[t]);
        }
      }

      for (m in monomios) {
        aparic = 0;
        for (t in util) {
          if (util[t].mons.indexOf(Number(m)) != -1) {
            aparic++;
          }
        }
        //
        numapars.push({ num: Number(m), vezes: aparic });
      }

      present = [];
      //
      for (r in util) {
        lista = util[r].mons;
        present = { fix: [], falt: [] };

        rep = 0;
        for (g = 0; g < lista.length && rep < quanto; g++) {
          if (
            numapars.find(function (numapars) {
              return numapars.num == lista[g];
            }).vezes == 1
          ) {
            rep++;
            present.fix.push(lista[g]);
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
              present.falt.push(lista[g]);
            }
          }

          if (present.fix.length == 0) {
            for (ti in present.falt) {
              numapars.find(function (numapars) {
                return numapars.num == present.falt[ti];
              }).vezes--;
            }
          }
        }
        relation[r] = present;
        relation[r].car = segs2[r].car;
      }

      for (c in relation) {
        //
        if (relation[c].fix.length > 0) {
          //

          faltam = Number(quanto) - Number(relation[c].fix.length);
          //

          for (f = 0; f < faltam; f++) {
            //
            relation[c].fix.push(relation[c].falt[f]);

            relation[c].falt[f] = -10;
          }
          //

          for (tel = 0; tel < c; tel++) {
            if (relation[tel].fix.length > 0) {
              //
            }

            outrorel = relation[tel];

            for (hu in outrorel.fix) {
              //
              if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                //
                //
                y = 0;
                for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                  ///
                  if (
                    relation[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                    outrorel.falt[ou] != -10
                  ) {
                    outrorel.fix[hu] = outrorel.falt[ou];
                    outrorel.falt[ou] = -10;

                    //
                    y++;
                  }
                }
              }
            }
          }
        }
      }

      groups = 0;
      conts = [];
      for (yougo in relation) {
        if (relation[yougo].fix.length > 0) {
          //

          for (pals in relation[yougo].fix) {
            //
            conts.push(relation[yougo].fix[pals]);
          }
          groups++;
        }
      }

      if (divs[okentao] != groups) {
        tirados = [];
        for (wish in relation) {
          for (edge in relation[wish].fix) {
            tirados.push(relation[wish].fix[edge]);
          }
        }

        for (die in segs2) {
          tirar = [];

          for (h in segs2[die].mons) {
            if (tirados.indexOf(segs2[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            segs2[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs2) {
          grupos = Math.floor(Number(segs2[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs2[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                ob.problem = true;
              }

              ob.fix.push(segs2[sorrow].mons[imor]);
              tirados.push(segs2[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation.push(ob);
            }
          }
        }
      }
    }
    return [relation, segs2];
  }

  function temnaLista(h) {
    for (t in relation) {
      if (relation[t].fix.length > 0) {
        home = 0;
        for (fear in relation[t].fix) {
          if (relation[t].fix[fear] == h[fear]) {
            home++;
          }
        }

        if (home == h.length) {
          return true;
        }
      }
    }
  }

  function doit2(par) {
    segs2 = [];

    for (uf in par) {
      //
      //segs2.push(segs[uf])
      //segs[tie].godhelpme = [...segs[tie].mons]
      segs2[uf] = {};
      segs2[uf].mons = [...par[uf].mons];
      segs2[uf].car = par[uf].car;
    }

    relation = [];

    quanto = Number(monomios.length) / Number(divs[okentao]);

    numapars = [];

    util = [];
    for (t in segs2) {
      if (segs2[t].mons.length >= quanto) {
        util.push(segs2[t]);
      }
      //
    }

    //

    for (m in monomios) {
      aparic = 0;
      //
      for (t in util) {
        //
        //

        if (util[t].mons.indexOf(Number(m)) != -1) {
          aparic++;
        }
      }
      //
      numapars.push({ num: Number(m), vezes: aparic });
    }

    present = [];

    //
    for (r in util) {
      //
      lista = util[r].mons;
      present = { fix: [], falt: [] };
      //

      rep = 0;
      for (g = 0; g < lista.length && rep < quanto; g++) {
        //

        if (
          numapars.find(function (numapars) {
            return numapars.num == lista[g];
          }).vezes == 1
        ) {
          //
          rep++;
          present.fix.push(lista[g]);
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
            present.falt.push(lista[g]);

          }
        }
        //

        if (present.fix.length == 0) {
          for (ti in present.falt) {
            //

            numapars.find(function (numapars) {
              return numapars.num == present.falt[ti];
            }).vezes--;
          }
        }
      }
      relation[r] = present;
      relation[r].car = segs2[r].car;
    }
    //
    for (c in relation) {
      //
      if (relation[c].fix.length > 0) {
        //

        faltam = Number(quanto) - Number(relation[c].fix.length);
        //

        for (f = 0; f < faltam; f++) {
          //
          relation[c].fix.push(relation[c].falt[f]);

          //
          relation[c].falt[f] = -10;

          //
        }
        //

        for (tel = 0; tel < c; tel++) {
          if (relation[tel].fix.length > 0) {
            //
          }

          outrorel = relation[tel];

          for (hu in outrorel.fix) {
            //
            if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
              //
              //
              y = 0;
              for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                //
                if (
                  relation[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                  outrorel.falt[ou] != -10
                ) {
                  //
                  outrorel.fix[hu] = outrorel.falt[ou];
                  outrorel.falt[ou] = -10;

                  //
                  y++;
                }
              }
            }
          }
        }
      }
    }

    //

    ////

    groups = 0;
    conts = [];
    for (yougo in relation) {
      if (relation[yougo].fix.length > 0) {
        //

        for (pals in relation[yougo].fix) {
          //
          conts.push(relation[yougo].fix[pals]);
        }
        groups++;
      }
    }

    //
    //
    if (groups < divs[okentao]) {
      //

      //

      groups = 0;
      conts = [];
      for (yougo in relation) {
        if (relation[yougo].fix.length > 0) {
          for (pals in relation[yougo].fix) {
            conts.push(relation[yougo].fix[pals]);
          }
          groups++;
        }
      }

      if (divs[okentao] != groups) {
        tirados = [];
        for (wish in relation) {
          //
          for (edge in relation[wish].fix) {
            tirados.push(relation[wish].fix[edge]);
          }
        }

        for (die in segs2) {
          tirar = [];

          for (h in segs2[die].mons) {
            if (tirados.indexOf(segs2[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            //
            segs2[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs2) {
          grupos = Math.floor(Number(segs2[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs2[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                //ob.problem = true
              }

              ob.fix.push(segs2[sorrow].mons[imor]);
              tirados.push(segs2[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation.push(ob);
            }
          }
        }
      }
    } else if (groups > divs[okentao]) {
      //

      mia = [];
      for (idk in segs2) {
        ////

        for (mcr in segs2) {
          if (mcr != idk) {
            ////
            //

            if (segs2[mcr].mons.length <= segs2[idk].mons.length) {
              sames = [];
              for (y = 0; y < segs2[mcr].mons.length; y++) {
                //
                if (segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
                  //
                  sames.push("igual");
                } else {
                  //
                  sames.push("diferente");
                }
              }
              //
              if (sames.indexOf("diferente") == -1) {
                if (mia.indexOf(mcr) == -1) {
                  mia.push(mcr);
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

      numapars = [];

      relation = [];

      ////

      util = [];
      for (t in segs2) {
        //
        //

        if (segs2[t].mons.length >= quanto) {
          util.push(segs2[t]);
        }
        //
      }

      for (m in monomios) {
        aparic = 0;
        //
        for (t in util) {
          //
          //

          if (util[t].mons.indexOf(Number(m)) != -1) {
            aparic++;
          }
        }
        //
        numapars.push({ num: Number(m), vezes: aparic });
      }

      present = [];
      //
      for (r in util) {
        //
        lista = util[r].mons;
        present = { fix: [], falt: [] };
        //

        rep = 0;
        for (g = 0; g < lista.length && rep < quanto; g++) {
          //

          if (
            numapars.find(function (numapars) {
              return numapars.num == lista[g];
            }).vezes == 1
          ) {
            //
            rep++;
            present.fix.push(lista[g]);
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
              present.falt.push(lista[g]);

            }
          }
          //

          if (present.fix.length == 0) {
            for (ti in present.falt) {
              //

              numapars.find(function (numapars) {
                return numapars.num == present.falt[ti];
              }).vezes--;
            }
          }
        }
        relation[r] = present;
        relation[r].car = segs2[r].car;
      }

      for (c in relation) {
        //
        if (relation[c].fix.length > 0) {
          //

          faltam = Number(quanto) - Number(relation[c].fix.length);
          //

          for (f = 0; f < faltam; f++) {
            //
            relation[c].fix.push(relation[c].falt[f]);

            relation[c].falt[f] = -10;
          }
          //

          for (tel = 0; tel < c; tel++) {
            if (relation[tel].fix.length > 0) {
              //
            }

            outrorel = relation[tel];

            for (hu in outrorel.fix) {
              //
              if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                //
                //
                y = 0;
                for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                  ///
                  if (
                    relation[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                    outrorel.falt[ou] != -10
                  ) {
                    outrorel.fix[hu] = outrorel.falt[ou];
                    outrorel.falt[ou] = -10;

                    y++;
                  }
                }
              }
            }
          }
        }
      }

      //

      groups = 0;
      conts = [];
      for (yougo in relation) {
        if (relation[yougo].fix.length > 0) {
          for (pals in relation[yougo].fix) {
            conts.push(relation[yougo].fix[pals]);
          }
          groups++;
        }
      }

      if (divs[okentao] != groups) {
        tirados = [];
        for (wish in relation) {
          for (edge in relation[wish].fix) {
            //
            tirados.push(relation[wish].fix[edge]);
          }
        }

        for (die in segs2) {
          tirar = [];

          for (h in segs2[die].mons) {
            if (tirados.indexOf(segs2[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            segs2[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs2) {
          grupos = Math.floor(Number(segs2[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs2[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              //
              //

              //

              if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                //ob.problem = true
              }
              //
              ob.fix.push(segs2[sorrow].mons[imor]);
              tirados.push(segs2[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation.push(ob);
            }
          }
        }
      }
    }

    return [relation, segs2];
  }

  //DESFATORAR(['-','3'],['3'],['1'])

  function SOMANDOMONOMIOS(list) {
    particles = [{ numero: "" }];
    obnum = 0;
    for (n = 0; n < list.length; n++) {
      if (String(list[n]).search("[\\-\\+]") != -1 && n != 0) {
        particles.push({ numero: "" });
        obnum++;
      }

      particles[obnum].numero += list[n];
    }

    for (huh in particles) {
      //

      partlet = "";
      for (y in particles[huh].numero) {
        if (String(particles[huh].numero[y]).search("[a-z]") != -1) {
          partlet += String(particles[huh].numero[y]);
        }
      }
      particles[huh].partletral = partlet;
      //
    }

    exp = [];
    for (bye in particles) {
      comofica = [];
      ground = "";

      for (misery in particles[bye].numero) {
        //

        carac = particles[bye].numero[misery];

        //
        if (ground.length == 0) {
          //
          ground += carac;
        } else if (
          String(ground.search("[0-9]")) != -1 &&
          String(carac).search("[0-9]") != -1
        ) {
          //
          ground += carac;
        } else {
          comofica.push(ground);
          ground = "";
          ground += carac;
        }
        if (misery == particles[bye].numero.length - 1) {
          comofica.push(ground);
        }
      }

      //
      //
      particles[bye].numero = comofica;
    }

    agruparsoma = [];
    //JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
    for (huh in particles) {
      if (
        agruparsoma.find(function (agruparsoma) {
          return agruparsoma.que == particles[huh].partletral;
        }) == undefined
      ) {
        agruparsoma.push({
          quais: [Number(huh)],
          que: particles[huh].partletral,
        });
      } else {
        agruparsoma
          .find(function (agruparsoma) {
            return agruparsoma.que == particles[huh].partletral;
          })
          .quais.push(Number(huh));
      }
    }

    for (chuva in agruparsoma) {
      //

      conta = [];
      for (da in agruparsoma[chuva].quais) {
        divisor = [];
        for (flowers in agruparsoma[chuva].que) {
          divisor.push(agruparsoma[chuva].que[flowers]);
        }

        tu = [...divisor];
        resultadoDaDivisão = DIVIDIR(
          divisor,
          particles[agruparsoma[chuva].quais[da]].numero
        );

        plan = [];
        add = "";

        for (past in resultadoDaDivisão) {
          if (
            resultadoDaDivisão[past].search("\\*") != -1 ||
            resultadoDaDivisão[past].search("[0-9]") != -1
          ) {
            if (add.length == 0) {
              if (resultadoDaDivisão[past - 1] != "-") {
                add += resultadoDaDivisão[past];
              }
            } else if (
              resultadoDaDivisão[past].search("[0-9]") != -1 &&
              add.search("[0-9]") != -1
            ) {
              add += resultadoDaDivisão[past];
            } else {
              plan.push(add);
              add = "";

              add += resultadoDaDivisão[past];
            }
            //

            if (plan.length == 3) {
              plan = [String(Number(plan[0]) * Number(plan[2]))];
            }
          }
        }

        if (add == "" && agruparsoma[chuva].quais.length > 1) {
          add = "1";
        }
        plan.push(add);

        if (plan.length == 3) {
          plan = [String(Number(plan[0]) * Number(plan[2]))];
        }

        if (
          particles[agruparsoma[chuva].quais[da]].numero[0] == "+" ||
          particles[agruparsoma[chuva].quais[da]].numero[0] == "-"
        ) {
          sinal = particles[agruparsoma[chuva].quais[da]].numero[0];

          if (conta.length != 0) {
            conta.push(particles[agruparsoma[chuva].quais[da]].numero[0]);
          }
        }

        if (
          conta.length == 0 &&
          particles[agruparsoma[chuva].quais[da]].numero[0] == "-"
        ) {
          entao = "-";
          entao += plan[0];

          conta.push(entao);
        } else {
          conta.push(plan[0]);
        }
      }

      comehome = fazerConta(conta);

      if (comehome[0][0] == "-") {
        t = "";
        for (b in comehome[0]) {
          if (comehome[0][b] != "-") {
            t += comehome[0][b];
          }
        }
        //

        at = t;
        if (ehprimo(t) == false) {
          fat = FATORARSInGULAR(at);
          //
        } else {
          //
          fat = at;
        }
        oop = "-";
        oop += String(fat);

        exp.push("-");
        fat += agruparsoma[chuva].que;
        exp.push(fat);
      } else {
        if (ehprimo(comehome) == false) {
          fat = FATORARSInGULAR(comehome);
        } else {
          fat = comehome;
        }

        if (exp.length == 0) {
          fat += agruparsoma[chuva].que;
          exp.push(fat);
        } else {
          exp.push("+");
          fat += agruparsoma[chuva].que;
          exp.push(fat);
          //
        }
      }
    }

    return [exp, agruparsoma.length, particles.length];
  }

  function REDONUMFACTORING(storer) {
    if (typeof storer === "string") {
      other = [];
      for (h in storer) {
        other.push(storer[h]);
      }
      storer = other;
    }

    resultobtained = "";

    elevar = 1;
    wasmultiplicated = false;

    operation = [];
    for (patience in storer) {
      if (storer[patience] == "*") {
        wasmultiplicated = true;

        operation.push(storer[Number(patience) - 1]);
        operation.push("x");
        operation.push(storer[Number(patience) + 1]);

        storer[Number(patience) + 1] = fazerConta(operation)[0];
        resultobtained = fazerConta(operation)[0];

        operation = [];
      } else if (storer[patience].search("[a-z]") != -1) {
        if (storer[patience] == storer[Number(patience) - 1]) {
          elevar++;

          if (patience == storer.length - 1) {
            resultobtained += `^${elevar}`;
          }
        } else {
          if (elevar > 1) {
            resultobtained += `^${elevar}`;
          }

          resultobtained += storer[patience];

          elevar = 1;
        }
      }
    }

    if (wasmultiplicated == false) {
      //
      addingnumber = "";
      for (eyes in storer) {
        //
        if (storer[eyes].search("[0-9]") != -1) {
          //
          addingnumber += storer[eyes];
        }
      }
      addingnumber += resultobtained;
      //

      resultobtained = addingnumber;
    }
    if (storer[0] == "-") {
      confirmedresult = "-";
      for (caracter in resultobtained) {
        confirmedresult += resultobtained[caracter];
      }
      return confirmedresult;
    } else {
      return resultobtained;
    }
  }

  function MULTIPLICARDIREITO(num1, num2) {
    if (num1 == "1" || num2 == "1") {
      //
      if (num1 == "1") {
        resultmult = num2;
      } else {
        resultmult = num1;
      }
    } else {
      sónumero = "";
      sóletra = "";
      for (car in num1) {
        if (num1[car].search("[0-9]") != -1 || num1[car] == "*") {
          sónumero += num1[car];
        } else if (num1[car].search("[a-z]") != -1) {
          sóletra += num1[car];
        }
      }

      sónumero2 = "";
      sóletra2 = "";
      for (car in num2) {
        if (num2[car].search("[0-9]") != -1 || num2[car] == "*") {
          sónumero2 += num2[car];
        } else if (num2[car].search("[a-z]") != -1) {
          sóletra2 += num2[car];
        }
      }

      if (sónumero.length > 0 && sónumero2.length > 0) {
        sónumero += "*";
      }

      if (num1[0] == "-") {
        sinal1 = "neg";
      } else {
        sinal1 = "pos";
      }

      if (num2[0] == "-") {
        sinal2 = "neg";
      } else {
        sinal2 = "pos";
      }

      sónumero += sónumero2;

      sóletra += sóletra2;

      if (sinal1 == sinal2) {
        resultmult = sónumero += sóletra;
      } else {
        resultmult = "-";
        resultmult += sónumero += sóletra;
      }
    }
    return resultmult;
  }

  function sort(n) {
    var maiorparamenor = [];
    var posiçõesnumeros = [];
    var yposition = n;

    for (n in yposition) {
      maiorparamenor.push(
        -100000000000000000000000000000000000000000000000000000000000000000000000000000000
      );
      posiçõesnumeros.push(-1);
    }

    for (item in yposition) {
      var volume = 0;
      var dn = 0;
      for (volume in yposition) {
        if (dn == 0) {
          if (yposition[item] > maiorparamenor[volume]) {
            var itens = yposition.length - (Number(volume) + 1);
            var leng = yposition.length;

            for (c = 0; c < itens; c++) {
              maiorparamenor[Number(leng) - 1] =
                maiorparamenor[Number(leng) - 2];
              posiçõesnumeros[Number(leng) - 1] =
                posiçõesnumeros[Number(leng) - 2];
              leng--;
            }
            maiorparamenor[volume] = yposition[item];
            posiçõesnumeros[volume] = Number(item);
            dn = 10;
          }
        }
      }
    }
    return [maiorparamenor, posiçõesnumeros];
  }
}

function VAI(str) {
  comofica = [];
  ground = "";
  for (bye in str) {
    carac = str[bye];

    if (ground.length == 0) {
      ground += carac;
    } else if (
      String(ground.search("[0-9]")) != -1 &&
      String(carac).search("[0-9]") != -1
    ) {
      ground += carac;
    } else {
      comofica.push(ground);
      ground = "";
      ground += carac;
    }
    if (bye == str.length - 1) {
      comofica.push(ground);
    }
    str[bye].numero = comofica;
  }

  return comofica;
}

function FATORAR2(expression_2) {
  if (expression_2[0] !== "-" && expression_2[0] !== "+") {
    //
    expo_2 = ["+"];
    for (ent in expression_2) {
      //
      expo_2.push(expression_2[ent]);
    }
    expression_2 = expo_2;
  }

  //6x^2 + 3 + 14x^2y + 7y

  //FAZEnDO AS COnTAS COM nÚMEROS

  //FATORAnDO OS nÚMEROS

  for (n = 0; n < expression_2.length; n++) {
    if (
      ehprimo(expression_2[n]) == false &&
      String(expression_2[n]).search("[0-9]") != -1 &&
      expression_2[n - 1] != "^"
    ) {
      fatorado = "";

      first = 1;

      div = 0;
      //

      stop = false;
      fator = 1;

      for (e = 2; stop == false; e++) {
        sob = Number(expression_2[n]);

        if (ehprimo(e) == true) {
          while (sob % e == 0) {
            if (sob % e == 0) {
            }
            sob = sob / e;

            fator = fator * e;

            st = false;

            if (fator == expression_2[n]) {
              stop = true;
              fatorado += `${e}`;
            } else {
              fatorado += `${e}*`;
            }
          }
        }
      }
      expression_2[n] = fatorado;
    }
  }
  //

  //FAZEnDO AS POTÊnCIAS COM LETRAS

  //
  for (y in expression_2) {
    if (expression_2[y] == "^") {
      ad = expression_2[Number(y) - 1];
      for (h = 0; h < Number(expression_2[Number(y) + 1]) - 1; h++) {
        expression_2[Number(y) - 1] += ad;
      }

      expression_2.splice(Number(y) + 1, 1);
      expression_2.splice(y, 1);
    }
  }

  //SEPARAnDO OS MOnÔMIOS

  monomios_2 = [{ numero: "" }];
  obnum = 0;
  for (n = 0; n < expression_2.length; n++) {
    if (String(expression_2[n]).search("[\\-\\+]") != -1 && n != 0) {
      monomios_2.push({ numero: "" });
      obnum++;
    }

    monomios_2[obnum].numero += expression_2[n];
  }

  //monomios_2 = [{numero: ['11','x']},{numero: ['11','*','3','x']}]

  //TRANSFORMA  O MONOMIOS.NUMERO(STRING) EM UM ARRAY

  for (bye in monomios_2) {
    comofica = [];
    ground_2 = "";

    for (misery in monomios_2[bye].numero) {
      carac = monomios_2[bye].numero[misery];

      if (ground_2.length == 0) {
        ground_2 += carac;
      } else if (
        String(ground_2.search("[0-9]")) != -1 &&
        String(carac).search("[0-9]") != -1
      ) {
        ground_2 += carac;
      } else {
        comofica.push(ground_2);
        ground_2 = "";
        ground_2 += carac;
      }
      if (misery == monomios_2[bye].numero.length - 1) {
        comofica.push(ground_2);
      }
    }
    monomios_2[bye].numero = comofica;
  }

  for (huh in monomios_2) {
    partlet = "";
    for (y in monomios_2[huh].numero) {
      if (String(monomios_2[huh].numero[y]).search("[a-z]") != -1) {
        partlet += String(monomios_2[huh].numero[y]);
      }
    }
    monomios_2[huh].partletral = partlet;
  }

  ji_2 = [];
  //JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
  for (huh in monomios_2) {
    if (
      ji_2.find(function (ji_2) {
        return ji_2.que == monomios_2[huh].partletral;
      }) == undefined
    ) {
      ji_2.push({ quais: [Number(huh)], que: monomios_2[huh].partletral });
    } else {
      ji_2.find(function (ji_2) {
        return ji_2.que == monomios_2[huh].partletral;
      }).quais.push(Number(huh));
    }
  }

  //SEPARAnDO/JUnTAnDO OS nÚMEROS

  exp_2 = [];
  

  //FATORAR SÓ UM nÚMERO

  function FATORARSInGULAR(potn) {
    if (ehprimo(potn) == false && String(potn).search("[0-9]") != -1) {
      fatorado = "";

      first = 1;

      div = 0;

      stop = false;
      fator = 1;

      for (e = 2; stop == false; e++) {
        sob = Number(potn);

        if (ehprimo(e) == true) {
          while (sob % e == 0) {
            if (sob % e == 0) {
            }

            sob = sob / e;

            fator = fator * e;

            st = false;

            if (fator == potn) {
              stop = true;
              fatorado += `${e}`;
            } else {
              fatorado += `${e}*`;
            }
          }
        }
      }
      return fatorado;
    }
  }

  //FAZER COnTA COM nÚMEROS
  function fazerConta(anterior) {
    if (0 == 0) {
      //falta == false
      //Primeiro raizes e potências
      for (n = 0; n < anterior.length; n++) {
        if (
          anterior[n] == "*" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√"
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) ** Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3; //n = n - 3

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        } else if (anterior[n] == "√" && anterior[n + 1] != "(") {
          anterior[n + 1] = String(Number(anterior[n + 1]) ** (1 / 2));
          anterior.splice(n, 1);

          n = n - 2;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        }
      }

      //Segundo multiplicações e divisões
      for (n = 0; n < anterior.length; n++) {
        if (
          anterior[n] == "x" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√" &&
          String(anterior[n + 2]).search("\\*") == -1 &&
          String(anterior[n - 2]).search("\\*") == -1
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) * Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        } else if (
          anterior[n] == "/" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√" &&
          String(anterior[n + 2]).search("\\*") == -1 &&
          String(anterior[n - 2]).search("\\*") == -1
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) / Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        }
      }

      if (anterior.length > 1) {
        //while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
        for (n = 0; n < anterior.length && anterior.length != 1; n++) {
          if (
            anterior[n] == "+" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("[x\\/\\*]") == -1 &&
            String(anterior[n - 2]).search("[x\\/\\*\\-]") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) + Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "-" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("[x\\/\\*]") == -1 &&
            String(anterior[n - 2]).search("[x\\/\\*\\-]") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) - Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "x" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("\\*") == -1 &&
            String(anterior[n - 2]).search("\\*") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) * Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "/" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("\\*") == -1 &&
            String(anterior[n - 2]).search("\\*") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) / Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "*" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√"
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) ** Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (anterior[n] == "√" && anterior[n + 1] != "(") {
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1 / 2));
            anterior.splice(n, 1);

            n = n - 2;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          }
        }
      }
    }
    return anterior;
  }

  function versetem(comp) {
    podeir = true;
    qual = -1;
    for (meow in segs_2) {
      array1 = [];
      for (d in segs_2[meow].car) {
        array1.push(segs_2[meow].car[d]);
      }
      array2 = [];
      for (d in comp) {
        array2.push(comp[d]);
      }
      if (segs_2[meow].car.length < comp.length) {
        divisao = DIVIDIR(VAI(segs_2[meow].car), VAI(comp));
      } else {
        divisao = DIVIDIR(VAI(comp), VAI(segs_2[meow].car));
      }
      if (divisao == "" || divisao == "-") {
        podeir = false;
        qual = meow;
      }
    }
    return podeir;
  }

  function DIVIDIR(T, qual) {
    Tfix = [];
    for (h in T) {
      Tfix.push(T[h]);
    }
    //egs = [...qual]

    egs = [];
    for (norte in qual) {
      if (qual[norte] == "*" || qual[norte] == ".") {
      } else {
        egs.push(qual[norte]);
      }
    }

    takeout = [];

    for (n in egs) {
      if (T.indexOf(egs[n]) != -1) {
        T.splice(T.lastIndexOf(egs[n]), 1);
        takeout.push(Number(n));
      }
    }

    for (giro = egs.length - 1; giro >= 0; giro--) {
      if (takeout.indexOf(Number(giro)) == -1) {
        //
      } else {
        //
        egs.splice(giro, 1);
      }
    }

    depois = "";
    for (n in egs) {
      //
      depois += String(egs[n]);

      if (
        String(egs[Number(n) + 1]).search("[0-9]") != -1 &&
        egs[n].search("[//-//+]") == -1
      ) {
        //
        depois += "*";
      }
    }

    return depois;
  }
  //expression_2 = exp_2

  //
  reps = [];
  segs_2 = [];
  let = [];

  for (m = 0; m < monomios_2.length; m++) {
    //CADA MOnÔMIO
    repetido = [];

    col = false;
    repetido = [];

    numerosrep = [];
    //
    //

    for (oc = 0; oc < monomios_2[m].numero.length; oc++) {
      //CADA LETRA DE CADA MOnÔMIO

      if (monomios_2[m].numero[oc].search("[\\*\\+\\/]") == -1) {
        //

        if (numerosrep.indexOf(monomios_2[m].numero[oc]) == -1) {
          numerosrep.push(monomios_2[m].numero[oc]);

          for (u = 0; u < monomios_2.length; u++) {
            //OUTROS MOnÔMIOS
            ocs2 = [];

            if (u != m) {
              //OCAS
              if (
                ocs2.find(function (ocs2) {
                  return ocs2.ed == monomios_2[m].numero[oc];
                }) == undefined
              ) {
                //
                ocs2.push({ ed: monomios_2[m].numero[oc], el: 0 });

                ocs = 0;
                for (ao = 0; ao < monomios_2[m].numero.length; ao++) {
                  //
                  if (monomios_2[m].numero[ao] == monomios_2[m].numero[oc]) {
                    ocs++;
                  }
                }
              }

              for (e = 0; e < monomios_2[u].numero.length; e++) {
                //CADA LETRA DE CADA MOnÔMIO

                if (monomios_2[u].numero[e] == monomios_2[m].numero[oc]) {
                  //

                  if (
                    repetido.find(function (repetido) {
                      return repetido.monum == u;
                    }) === undefined
                  ) {
                    ocs2.find(function (ocs2) {
                      return ocs2.ed == monomios_2[m].numero[oc];
                    }).el++;

                    if (
                      ocs2.find(function (ocs2) {
                        return ocs2.ed == monomios_2[m].numero[oc];
                      }).el <= ocs
                    ) {
                      repetido.push({
                        monum: u,
                        wc: [m],
                        letr: monomios_2[u].numero[e],
                      });
                    }

                  } else {

                    ocs2.find(function (ocs2) {
                      return ocs2.ed == monomios_2[m].numero[oc];
                    }).el++;

                    if (
                      ocs2.find(function (ocs2) {
                        return ocs2.ed == monomios_2[m].numero[oc];
                      }).el <= ocs
                    ) {
                      repetido.find(function (repetido) {
                        return repetido.monum == u;
                      }).letr += `.${monomios_2[u].numero[e]}`;
                    }
                    
                  }

                  //
                  //
                } else {
                }
                //
              }
            }
          }
          //
        }
      }
    }

    reps.push(repetido);

    for (nope in repetido) {
      if (repetido[nope].letr[0] == "-") {
        la = "";
        for (u in repetido[nope].letr) {
          if (u != 0 && u != 1) {
            la += repetido[nope].letr[u];
          }
        }

        if (
          repetido.find(function (repetido) {
            return repetido.letr == la;
          })
        ) {
          repetido.splice(nope, 1);
        }
      }
    }

    //

    for (moe = repetido.length - 1; moe >= 0; moe--) {
      //

      podeir = true;
      qual = -1;
      for (meow in segs_2) {
        array1 = [];
        for (d in segs_2[meow].car) {
          array1.push(segs_2[meow].car[d]);
        }

        array2 = [];
        for (d in repetido[moe].letr) {
          array2.push(repetido[moe].letr[d]);
        }

        if (segs_2[meow].car.length < repetido[moe].letr.length) {
          divisao = DIVIDIR(VAI(segs_2[meow].car), VAI(repetido[moe].letr));
          //
        } else {
          divisao = DIVIDIR(VAI(repetido[moe].letr), VAI(segs_2[meow].car));
          //
        }

        if (divisao == "" || divisao == "-") {
          //
          podeir = false;
          qual = meow;
        }
      }

      if (podeir == true) {
        splitUp(repetido[moe].letr);
        function splitUp(str) {
          estado = "";
          for (i in str) {
            if (str[i] == "." && estado != "-") {
              permission = versetem(estado);
              //console.log(permission)
              if (permission == true && estado != " " && estado != "-") {
                segs_2.push({ car: estado, mons: [m] });
              }
            }
            estado += str[i];
            if (i == str.length - 1) {
              permission = versetem(estado);
              if (permission == true && estado != " " && estado != "-") {
                segs_2.push({ car: estado, mons: [m] });
              }
            }
          }
        }
      } else if (segs_2[qual].mons.indexOf(m) == -1) {
        segs_2[qual].mons.push(m);
      }
    }
  }

  

  for (nl = 0; nl < segs_2.length; nl++) {
    for (n = 0; n < segs_2.length; n++) {
      if (n != nl) {

        stay = VAI(segs_2[n].car);
        contido = true;
        for (dry in segs_2[nl].car) {
          if (segs_2[nl].car[dry] != "." && segs_2[nl].car[dry] != "-") {
            if (stay.indexOf(segs_2[nl].car[dry]) != -1) {
              stay.splice(stay.indexOf(segs_2[nl].car[dry]), 1);
            } else {
              contido = false;
            }
          }
        }
        if (contido == true) {
        }

        if (contido == true) {
          for (u in segs_2[n].mons) {
            if (segs_2[nl].mons.indexOf(segs_2[n].mons[u]) != -1) {
            } else {
              segs_2[nl].mons.push(segs_2[n].mons[u]);
            }
          }
        }
      }
    }
  }

  function ehprimo(Number) {
    parar = false;
    for (t = 2; t < Number && parar == false; t++) {
      if (Number % t == 0) {
        parar = true;
      }
    }
    if (parar) return false;
    else return true;
  }

  ////

  grtols = [];

  for (hi in segs_2) {
    ////
    segs_2[hi].length = segs_2[hi].car.length;

    grtols.push(segs_2[hi]);
  }

  ////
  ////
  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    ////
    grtols.push(segs_2[organizado[ah]]);
  }

  ////
  segs_2 = grtols;

  //DIVS
  ml = monomios_2.length;
  ////

  divs_2 = ehprimo2(ml);
  ////

  for (n in divs_2) {
    ////
  }

  if (divs_2.length == 0) {
    divs_2 = [1];
  }

  

  for (tie in segs_2) {
    //
    segs_2[tie].godhelpme = [...segs_2[tie].mons];
  }

  okentao = 0;
  //for (okentao in divs_2) {
  roll_2 = [];

  //
  //const vi = 0
  scarecrow_2 = [];
  for (anchor in segs_2) {
    //

    army = [];
    lpisthebest = "";
    for (fall in segs_2[anchor].car) {
      if (lpisthebest.length == 0) {
        lpisthebest = segs_2[anchor].car[fall];
      } else if (
        lpisthebest.search("[0-9]") != -1 &&
        segs_2[anchor].car[fall].search("[0-9]") != -1
      ) {
        lpisthebest += segs_2[anchor].car[fall];
      } else {
        army.push(lpisthebest);
        if (segs_2[anchor].car[fall] != ".") {
          lpisthebest = segs_2[anchor].car[fall];
        } else {
          if (segs_2[anchor].car[Number(fall) + 1].search("[0-9]") != -1) {
            lpisthebest = "*";
          } else {
            lpisthebest = "";
          }
        }
        //
      }
      if (fall == segs_2[anchor].car.length - 1) {
        army.push(lpisthebest);
      }
    }
    bell = [...army];
    //

    //

    for (pahh in army) {
      //
      if (army[pahh] == "*") {
        army[pahh] = ".";
      }
    }
    scarecrow_2.push({
      divididos: [],
      outrodiv: [],
      poss: [...segs_2[anchor].mons],
      divisor: [...army],
      positions: [...segs_2[anchor].mons],
    });
    for (high in segs_2[anchor].mons) {
      army = [...bell];

      //

      lightson = [...army];
      pain = DIVIDIR(army, monomios_2[segs_2[anchor].mons[high]].numero);

      if (pain.length == 0 || pain.search("([0-9]|[a-z)])") == -1) {
        if (
          lightson.indexOf("-") != -1 &&
          monomios_2[segs_2[anchor].mons[high]].numero.indexOf("-") == -1
        ) {
          pain = "-1";
          //
          scarecrow_2[anchor].divididos.push("1");
          scarecrow_2[anchor].outrodiv.push(pain);
        } else if (
          lightson.indexOf("-") == -1 &&
          monomios_2[segs_2[anchor].mons[high]].numero.indexOf("-") != -1
        ) {
          pain = "-1";
          //
          scarecrow_2[anchor].divididos.push("1");
          scarecrow_2[anchor].outrodiv.push(pain);
        } else {
          pain = "1";
          scarecrow_2[anchor].divididos.push(pain);
          scarecrow_2[anchor].outrodiv.push(pain);
        }
      } else {
        right = "";
        for (feet in pain) {
          //
          if (pain[feet] != "+") {
            right += pain[feet];
          }
        }
        //

        uy = "";
        //

        for (xarope in right) {
          //
          if (xarope == 0 && right[xarope] == "*") {
            //*2
            //
          } else if (xarope == right.length - 1 && right[xarope] == "*") {
            //2*
            //
          } else if (
            right[xarope] == "*" &&
            String(right[Number(xarope) + 1]).search("[0-9]") == -1
          ) {
            //2*x
            //
          } else if (
            right[xarope] == "*" &&
            String(right[Number(xarope) - 1]).search("[0-9]") == -1
          ) {
            //x*2
            //
          } else {
            uy += right[xarope];
          }
        }

        scarecrow_2[anchor].outrodiv.push(uy);

        if (uy[0] == "-") {
          holdon = "";
          for (qual in uy) {
            if (uy[qual] != "-") holdon += uy[qual];
          }

          uy = holdon;
        }
        scarecrow_2[anchor].divididos.push(uy);
      }
    }
  }

  miss_2 = [];

  for (ah in scarecrow_2) {
    for (é in scarecrow_2[ah].divididos) {
      if (
        miss_2.find(function (miss_2) {
          return miss_2.dividido == scarecrow_2[ah].divididos[é];
        }) == undefined
      ) {
        miss_2.push({
          dividido: scarecrow_2[ah].divididos[é],
          aparicoes: [Number(ah)],
          divisor: scarecrow_2[ah].divisor,
        });
      } else {
        miss_2
          .find(function (miss_2) {
            return miss_2.dividido == scarecrow_2[ah].divididos[é];
          })
          .aparicoes.push(Number(ah));
      }
    }
  }

  quantosfatores_2 = Number(monomios_2.length) / Number(divs_2[okentao]);
  quantasposições_2 = Number(monomios_2.length) / Number(quantosfatores_2);

  //ORDENANDO O MISS DE ACORDO COM O NÚMERO DE APARIÇÕES

  grtols = [];
  for (hi in miss_2) {
    ////
    miss_2[hi].length = miss_2[hi].aparicoes.length;

    grtols.push(miss_2[hi]);
  }
  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    ////
    grtols.push(miss_2[organizado[ah]]);
  }
  miss_2 = [...grtols];
  //
  deucerto = false;
  java = 0;

  //console.log('OK, LET ME FIX THIS THING')

  roller_2 = [];
  for (eep in miss_2) {
    //console.log('>>>>>>>>>>>>>>>>>>>',eep, miss_2[eep].aparicoes)

    //console.log('---')
    for (quad in miss_2) {
      //console.log('')
      if (quad != eep) {
        //console.log(quad,miss_2[quad].aparicoes)

        repeated = [];
        repwri = "";
        for (vespa in miss_2[eep].aparicoes) {
          //console.log(miss_2[eep].aparicoes[vespa])
          if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1) {
            //console.log(miss_2[quad].aparicoes,'indexOf(',miss_2[eep].aparicoes[vespa],') não é igual a -1')
            repeated.push(miss_2[eep].aparicoes[vespa]);

            repwri += "," + miss_2[eep].aparicoes[vespa];

            //console.log('repetido:',repeated,'repwri',repwri)

            if (
              roller_2.find(function (roller_2) {
                return roller_2.rept == repwri;
              }) == undefined
            ) {
              //console.log('PODE PUSHAR',{rept: repwri,opl:repeated,position: [eep,quad]}, repeated, repeated.length)
              roller_2.push({
                rept: repwri,
                opl: [...repeated],
                position: [eep, quad],
              });
            } else {
              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(eep) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(eep);
              }

              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(quad) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(quad);
              }
            }
          }
        }
      }
    }
  }

  while (java < miss_2.length && deucerto == false) {
    //FOCO
    podeser_2 = [];
    for (outro in miss_2) {
      //
      if (
        outro != java /*&& miss_2[outro].aparicoes.length >= quantasposições_2*/
      ) {
        presentes = [];
        for (quecoisa in miss_2[outro].aparicoes) {
          fatorzinho = miss_2[outro].aparicoes[quecoisa];

          if (miss_2[java].aparicoes.indexOf(fatorzinho) != -1) {
            presentes.push(fatorzinho);
          }
        }

        adicionou = false;
        for (idk in podeser_2) {
          //
          esigual = true;
          for (denovo in podeser_2[idk].opl) {
            if (podeser_2[idk].opl[denovo] == presentes[denovo]) {
              //
            } else {
              esigual = false;
            }
          }
          if (esigual == true) {
            //podeser_2[idk].position.push(outro)
            adicionou = true;
          }
        }
        if (
          presentes.length > 0 &&
          presentes.length > 0 &&
          adicionou == false
        ) {
          //podeser_2.push({opl: presentes, position: [outro]})
        }
      }
    }
    //
    podeser_2 = [...roller_2];

    for (belief in podeser_2) {
      if (podeser_2[belief].position.indexOf(java) == -1) {
        //podeser_2[belief].position.push(String(java))
      }

      shot = "";
      for (gun in podeser_2[belief].opl) {
        shot += podeser_2[belief].opl[gun] + ",";
      }
      //

      if (roll_2.length == 0) {
        //
        roll_2.push({
          repetidos: [...podeser_2[belief].opl],
          way: shot,
          posições: [...podeser_2[belief].position],
        });
      } else if (
        roll_2.find(function (roll_2) {
          return roll_2.way == shot;
        }) != undefined
      ) {
        //SE JÁ TIVER NA LSITA

        for (capital in podeser_2[belief].position) {
          //

          if (
            roll_2
              .find(function (roll_2) {
                return roll_2.way == shot;
              })
              .posições.indexOf(podeser_2[belief].position[capital]) == -1
          ) {
            roll_2
              .find(function (roll_2) {
                return roll_2.way == shot;
              })
              .posições.push(podeser_2[belief].position[capital]);
          }
        }
      } else {
        roll_2.push({
          repetidos: [...podeser_2[belief].opl],
          way: shot,
          posições: [...podeser_2[belief].position],
        });
      }
    }

    whyis = java;
    if (podeser_2.length > 0) {
      for (cold in podeser_2) {
        if (
          podeser_2[cold].position.length == quantosfatores_2 &&
          podeser_2[cold].opl.length == quantasposições_2 &&
          miss_2[whyis].aparicoes.length == quantasposições_2
        ) {
          //
          deucerto = true;

          ficaassim = "";
          //podeser_2[cold].position.push(whyis)

          for (yehaa in podeser_2[cold].position) {
            //

            if (miss_2[podeser_2[cold].position[yehaa]].dividido[0] == "-") {
              fi = "";
              for (ohjesus in miss_2[podeser_2[cold].position[yehaa]].dividido) {
                if (
                  miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus] != "-"
                ) {
                  fi += miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus];
                }
              }
              //
              if (yehaa != 0) {
                ficaassim += ` - ${fi}`;
              } else {
                ficaassim += `-${fi}`;
              }
            } else if (yehaa != 0) {
              ficaassim += " + ";
              ficaassim += miss_2[podeser_2[cold].position[yehaa]].dividido;
            } else {
              ficaassim += miss_2[podeser_2[cold].position[yehaa]].dividido;
            }
          }

          for (ruin in podeser_2[cold].opl) {
            //
            emotion = "";
            for (scream in scarecrow_2[podeser_2[cold].opl[ruin]].divisor) {
              //
              emotion += scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream];
            }
            //
          }
        }
      }
    }

    //}

    java++;
  }
  okentao++;

  INDIRETARROLL();

  //

  for (ne in roll_2) {
    //for (ne = 0; ne < 1; ne++) {
   
    arranjar = [];
    for (pq in roll_2[ne].repetidos) {
      (gosto = roll_2[ne].repetidos[pq]),
        scarecrow_2[roll_2[ne].repetidos[pq]].divididos;

      arranjar.push({ pos: pq, ocupa: [], origin: gosto });

      for (moon in roll_2[ne].posições) {
        vaiir =
          scarecrow_2[gosto].outrodiv[
            scarecrow_2[gosto].divididos.indexOf(
              miss_2[roll_2[ne].posições[moon]].dividido
            )
          ];
        arranjar[pq].ocupa.push(vaiir);
      }
    }

    jafoi = [];

    perfectwave = [];
    for (tosse in arranjar) {
      if (jafoi.indexOf(tosse) == -1) {
        organizer = { agrupar: [tosse], referencia: arranjar[tosse].ocupa };

        for (calor in arranjar) {
          if (calor != tosse) {
            equals = true;
            igualar = [];
            for (boring in arranjar[calor].ocupa) {
              sendocomparado = arranjar[calor].ocupa[boring];
              comparador = arranjar[tosse].ocupa[boring];

              if (sendocomparado[0] != comparador[0]) {
                igualar.push(true);
              } else {
                igualar.push(false);
              }
            }
            if (igualar.indexOf(false) == -1 || igualar.indexOf(true) == -1) {
              jafoi.push(calor);
              organizer.agrupar.push(calor);
            }
          }
        }
        perfectwave.push(organizer);
      }
    }

    for (youchoose in perfectwave) {
      ficarassim = perfectwave[youchoose].referencia;

      for (catraca in perfectwave[youchoose].agrupar) {
        presa = perfectwave[youchoose].agrupar[catraca];

        diferente = false;
        for (moon in roll_2[ne].posições) {
          //
          vaiir =
            scarecrow_2[arranjar[presa].origin].outrodiv[
              scarecrow_2[arranjar[presa].origin].divididos.indexOf(
                miss_2[roll_2[ne].posições[moon]].dividido
              )
            ];
          //
          if (vaiir != ficarassim[moon]) {
            diferente = true;
            scarecrow_2[arranjar[presa].origin].outrodiv[
              scarecrow_2[arranjar[presa].origin].divididos.indexOf(
                miss_2[roll_2[ne].posições[moon]].dividido
              )
            ] = ficarassim[moon];
          }
        }
        if (diferente == true) {
          lista = scarecrow_2[arranjar[presa].origin].divisor;
          if (lista != "-") {
            modificar = ["-", "."];
            for (saved in lista) {
              modificar.push(lista[saved]);
            }
            //
            scarecrow_2[arranjar[presa].origin].divisor = modificar;
          } else {
            lista.splice(0, 2);
          }
        }
      }
    }
  }

  //
  for (sei in scarecrow_2) {
    for (ai in scarecrow_2[sei].divididos) {
      scarecrow_2[sei].divididos[ai] = scarecrow_2[sei].outrodiv[ai];
    }
  }

  miss_2 = [];

  for (ah in scarecrow_2) {
    for (é in scarecrow_2[ah].divididos) {
      if (
        miss_2.find(function (miss_2) {
          return miss_2.dividido == scarecrow_2[ah].divididos[é];
        }) == undefined
      ) {
        miss_2.push({
          dividido: scarecrow_2[ah].divididos[é],
          aparicoes: [Number(ah)],
          divisor: scarecrow_2[ah].divisor,
        });
      } else {
        miss_2
          .find(function (miss_2) {
            return miss_2.dividido == scarecrow_2[ah].divididos[é];
          })
          .aparicoes.push(Number(ah));
      }
    }
  }

  grtols = [];
  for (hi in miss_2) {
    ////
    miss_2[hi].length = miss_2[hi].aparicoes.length;

    grtols.push(miss_2[hi]);
  }
  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    ////
    grtols.push(miss_2[organizado[ah]]);
  }
  miss_2 = [...grtols];

  java = 0;
  roll_2 = [];
  deucerto = false;

  //console.log('OK, LET ME FIX THIS THING')

  roller_2 = [];
  for (eep in miss_2) {
    //console.log('>>>>>>>>>>>>>>>>>>>',eep, miss_2[eep].aparicoes)

    //console.log('---')
    for (quad in miss_2) {
      //console.log('')
      if (quad != eep) {
        //console.log(quad,miss_2[quad].aparicoes)

        repeated = [];
        repwri = "";
        for (vespa in miss_2[eep].aparicoes) {
          //console.log(miss_2[eep].aparicoes[vespa])
          if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1) {
            //console.log(miss_2[quad].aparicoes,'indexOf(',miss_2[eep].aparicoes[vespa],') não é igual a -1')
            repeated.push(miss_2[eep].aparicoes[vespa]);

            repwri += "," + miss_2[eep].aparicoes[vespa];

            //console.log('repetido:',repeated,'repwri',repwri)

            if (
              roller_2.find(function (roller_2) {
                return roller_2.rept == repwri;
              }) == undefined
            ) {
              //console.log('PODE PUSHAR',{rept: repwri,opl:repeated,position: [eep,quad]}, repeated, repeated.length)
              roller_2.push({
                rept: repwri,
                opl: [...repeated],
                position: [eep, quad],
              });
            } else {
              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(eep) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(eep);
              }

              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(quad) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(quad);
              }
            }
          }
        }
      }
    }
  }

  while (java < miss_2.length && deucerto == false) {
    //FOCO
    podeser_2 = [];
    for (outro in miss_2) {
      //
      if (
        outro != java /*&& miss_2[outro].aparicoes.length >= quantasposições_2*/
      ) {
        presentes = [];
        for (quecoisa in miss_2[outro].aparicoes) {
          fatorzinho = miss_2[outro].aparicoes[quecoisa];

          if (miss_2[java].aparicoes.indexOf(fatorzinho) != -1) {
            presentes.push(fatorzinho);
          }
        }

        adicionou = false;
        for (idk in podeser_2) {
          //
          esigual = true;
          for (denovo in podeser_2[idk].opl) {
            if (podeser_2[idk].opl[denovo] == presentes[denovo]) {
              //
            } else {
              esigual = false;
            }
          }
          if (esigual == true) {
            //podeser_2[idk].position.push(outro)
            adicionou = true;
          }
        }
        if (
          presentes.length > 0 &&
          presentes.length > 0 &&
          adicionou == false
        ) {
          //podeser_2.push({opl: presentes, position: [outro]})
        }
      }
    }
    //
    podeser_2 = [...roller_2];

    for (belief in podeser_2) {
      if (podeser_2[belief].position.indexOf(java) == -1) {
        //podeser_2[belief].position.push(String(java))
      }

      shot = "";
      for (gun in podeser_2[belief].opl) {
        shot += podeser_2[belief].opl[gun] + ",";
      }
      //

      if (roll_2.length == 0) {
        //
        roll_2.push({
          repetidos: [...podeser_2[belief].opl],
          way: shot,
          posições: [...podeser_2[belief].position],
        });
      } else if (
        roll_2.find(function (roll_2) {
          return roll_2.way == shot;
        }) != undefined
      ) {
        //SE JÁ TIVER NA LSITA

        for (capital in podeser_2[belief].position) {
          //

          if (
            roll_2
              .find(function (roll_2) {
                return roll_2.way == shot;
              })
              .posições.indexOf(podeser_2[belief].position[capital]) == -1
          ) {
            roll_2
              .find(function (roll_2) {
                return roll_2.way == shot;
              })
              .posições.push(podeser_2[belief].position[capital]);
          }
        }
      } else {
        roll_2.push({
          repetidos: [...podeser_2[belief].opl],
          way: shot,
          posições: [...podeser_2[belief].position],
        });
      }
    }

    whyis = java;
    if (podeser_2.length > 0) {
      for (cold in podeser_2) {
        if (
          podeser_2[cold].position.length == quantosfatores_2 &&
          podeser_2[cold].opl.length == quantasposições_2 &&
          miss_2[whyis].aparicoes.length == quantasposições_2
        ) {
          //
          deucerto = true;

          ficaassim = "";
          //podeser_2[cold].position.push(whyis)

          for (yehaa in podeser_2[cold].position) {
            //

            if (miss_2[podeser_2[cold].position[yehaa]].dividido[0] == "-") {
              fi = "";
              for (ohjesus in miss_2[podeser_2[cold].position[yehaa]].dividido) {
                if (
                  miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus] != "-"
                ) {
                  fi += miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus];
                }
              }
              //
              if (yehaa != 0) {
                ficaassim += ` - ${fi}`;
              } else {
                ficaassim += `-${fi}`;
              }
            } else if (yehaa != 0) {
              ficaassim += " + ";
              ficaassim += miss_2[podeser_2[cold].position[yehaa]].dividido;
            } else {
              ficaassim += miss_2[podeser_2[cold].position[yehaa]].dividido;
            }
          }

          for (ruin in podeser_2[cold].opl) {
            //
            emotion = "";
            for (scream in scarecrow_2[podeser_2[cold].opl[ruin]].divisor) {
              //
              emotion += scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream];
            }
            //
          }
        }
      }
    }

    //}

    java++;
  }

  console.log("HORA DA VERDADE!");
  INDIRETARROLL();
  youdumb_2 = [];

  aswillbe2 = [];
  for (raging = 0; raging < roll_2.length; raging++) {
    asitwas = [];

    obe = { what: [] };

    //
    //

    for (still in roll_2[raging].repetidos) {
      asitwas2 = [];
      aswillbe = [];

      //

      mylife = "(";
      for (still2 in roll_2[raging].posições) {
        if (still != 0) {
          mylife += " + " + miss_2[roll_2[raging].posições[still2]].dividido;
        } else {
          mylife += miss_2[roll_2[raging].posições[still2]].dividido;
        }

        //

        conseguiu = false;
        older = 0;
        while (older < monomios_2.length && conseguiu == false) {
          DESFATORAR(
            monomios_2[older].numero,
            scarecrow_2[roll_2[raging].repetidos[still]].divisor,
            miss_2[roll_2[raging].posições[still2]].dividido
          );

          //correto == ['2','*','10','x'] (NÚMERO QUE VAI SER COMPARADO)
          //eg2 == ['10'] (NÚMERO QUE VAI MULTIPLICAR)
          //eg == '2x' (NÚMERO QUE VAI SER MULTIPLICADO)

          function DESFATORAR(correto, eg2, eg) {
            eassim = [];
            solo = "";
            for (ne in eg) {
              if (eg[ne] != ".") {
                if (solo.length == 0) {
                  solo += eg[ne];
                } else if (
                  String(solo.search("[0-9]")) != -1 &&
                  String(eg[ne]).search("[0-9]") != -1
                ) {
                  solo += eg[ne];
                } else {
                  eassim.push(solo);
                  solo = "";
                  solo += eg[ne];
                }
                if (ne == eg.length - 1) {
                  eassim.push(solo);
                }
              } else {
              }
            }

            eg = eassim;

            whythat = [...eg];
            

            teri = false;
            juntar = "";
            for (estudar in eg2) {
              if (eg2[estudar] == ".") {
                teri = true;
                if (eg2[Number(estudar) + 1].search("[0-9]") != -1) {
                  whythat.push(juntar);
                  juntar = "";
                  whythat.push("*");
                }
              } else {
                if (juntar.length == 0) {
                  juntar = eg2[estudar];

                  if (estudar == eg2.length - 1) {
                    whythat.push(juntar);
                  }
                } else if (
                  eg2[estudar].search("[0-9]") != -1 &&
                  juntar.search("[0-9]") != -1
                ) {
                  juntar += eg2[estudar];

                  if (estudar == eg2.length - 1) {
                    whythat.push(juntar);
                  }
                } else {
                  whythat.push(juntar);
                  juntar = eg2[estudar];
                  if (estudar == eg2.length - 1) {
                    whythat.push(juntar);
                  }
                }
              }
            }
            if (teri == false) {
              whythat = [];

              for (t in eg2) {
                whythat.push(eg2[t]);
              }
              for (t in eg) {
                whythat.push(eg[t]);
              }
            }

            //
            //

            numerinhos = [];
            for (decisao in correto) {
              if (
                correto[decisao] != "*" &&
                correto[decisao] != "." &&
                correto[decisao] != "+" &&
                correto[decisao] != "-"
              ) {
                numerinhos.push(correto[decisao]);
              }
            }

            thatway = [...numerinhos];

            for (poder in whythat) {
              if (
                whythat[poder] != "*" &&
                whythat[poder] != "." &&
                whythat[poder] != "+" &&
                numerinhos.indexOf(whythat[poder]) != -1
              ) {
                numerinhos.splice(numerinhos.indexOf(whythat[poder]), 1);
              }
            }

            for (pombo = whythat.length - 1; pombo >= 0; pombo--) {
              if (whythat[pombo] == "*" || whythat[pombo] == "1") {
                whythat.splice(pombo, 1);
              }
            }

            for (pray = whythat.length - 1; pray >= 0; pray--) {
              if (whythat[pray] == "-") whythat.splice(pray, 1);
            }

            if (numerinhos.length == 0 && thatway.length == whythat.length) {
              conseguiu = true;
            }
          }
          older++;
        }

        asitwas.push(older - 1);
        asitwas2.push(older - 1);
        aswillbe.push(older - 1);
      }

      //

      obe.what.push({ ar: asitwas2, indice: still });
      aswillbe2.push({ oque: aswillbe, onde: raging });
    }

    youdumb_2.push({ mons: asitwas, rag: raging, w: obe, polen: raging });
  }

  dontworry = [];
  for (behappy in youdumb_2) {
    for (armenia in youdumb_2) {
      if (armenia != behappy) {
        doeshave = true;
        for (sofar in youdumb_2[armenia].mons) {
          if (
            youdumb_2[behappy].mons.indexOf(youdumb_2[armenia].mons[sofar]) == -1
          ) {
            doeshave = false;
          }
        }

        if (doeshave == true) {
          if (dontworry.indexOf(behappy) == -1) {
            dontworry.push(armenia);
          }
        }
      }
    }
  }

  for (da = youdumb_2.length - 1; da >= 0; da--) {
    if (dontworry.indexOf(String(da)) != -1) {
      //youdumb_2.splice(da,1)
    }
  }

  grtols = [];

  for (hi in youdumb_2) {
    //
    youdumb_2[hi].length = youdumb_2[hi].mons.length;

    grtols.push(youdumb_2[hi]);
  }

  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    grtols.push(youdumb_2[organizado[ah]]);
  }

  youdumb_2 = [];
  for (erro in grtols) {
    youdumb_2.push(grtols[erro]);
  }

  /*
           for (yourlife in grtols) {
           
               
           
               for (bolinho in grtols[yourlife].w.what) {
              
           
                   vagem = grtols[yourlife].w.what[bolinho]
                   for (ahnao in vagem) {
                  
                   }
               }
           }
           */

  pans_2 = [];
  numerospresentes_2 = [];

  for (AH in youdumb_2) {
  }
  for (wrecked in youdumb_2) {
    initial = youdumb_2[wrecked].w.what;
    for (agg in initial) {
    }
  }

  grtols = [];
  for (hi in youdumb_2) {
    youdumb_2[hi].length = youdumb_2[hi].w.what.length;

    grtols.push(youdumb_2[hi]);
  }
  organizado = sortob(grtols, "length")[1];

  grtols = [];
  for (ah in organizado) {
    ////
    grtols.push(youdumb_2[organizado[ah]]);
  }
  youdumb_2 = [...grtols];

  heya_2 = [...youdumb_2];
  for (imback in youdumb_2) {
    //

    sticky = [];
    initial = youdumb_2[imback].w.what;

    if (initial.length > 0) {
      inside = { which: [], numberyoudumb_2: youdumb_2[imback].polen };

      for (agg in initial) {
        taai = false;
        for (eng in initial[agg].ar) {
          //
          if (numerospresentes_2.indexOf(initial[agg].ar[eng]) == -1) {
          } else {
            taai = true;
          }
        }

        if (taai == false) {
          inform = { monos: initial[agg].ar, numberwhat: initial[agg].indice };

          inside.which.push(inform);

          for (darkening in inform.monos) {
            sticky.push(inform.monos[darkening]);
          }

          for (eng in initial[agg].ar) {
            numerospresentes_2.push(initial[agg].ar[eng]);
          }
        }
      }

      if (inside.which.length > 0) {
        inside.todos = sticky;
        pans_2.push(inside);
      }

      //youdumb_2.splice(imback, 1)

      /*
               for (invest in pans_2) {
              
                   for (plat in pans_2[invest].which) {
                  
                   }
               }
               */

      //youdumb_2.splice(imback, 1)
      for (h in youdumb_2) {
        if (h != imback) {
          if (youdumb_2[h].w.what.length > 0) {
            //
          }

          for (tempo = youdumb_2[h].w.what.length - 1; tempo >= 0; tempo--) {
            //

            dulu = false;

            for (and in youdumb_2[h].w.what[tempo].ar) {
              //
              if (
                numerospresentes_2.indexOf(youdumb_2[h].w.what[tempo].ar[and]) != -1
              ) {
                //
                dulu = true;
              }
            }
            if (dulu == false) {
              //
            } else {
              //
              //youdumb_2[h].w.what.splice(tempo, 1)
              //imback++
            }
          }
        }
      }

      //
      for (vixi in youdumb_2) {
        //if (youdumb_2[vixi].w.what.length > 0) {
        //
        for (ainao in youdumb_2[vixi].w.what) {
          //
        }
        //}
      }

      for (força in youdumb_2) {
        //
        entao = [];
        for (areo in youdumb_2[força].w.what) {
          //
          for (paris in youdumb_2[força].w.what[areo].ar) {
            //
            entao.push(Number(youdumb_2[força].w.what[areo].ar[paris]));
          }
        }
        //
        youdumb_2[força].t = entao;
        //
      }

      grtols = [];

      for (hi in youdumb_2) {
        ////
        youdumb_2[hi].length = youdumb_2[hi].t.length;

        grtols.push(youdumb_2[hi]);
      }

      ////
      ////

      organizado = sortob(grtols, "length")[1];

      grtols = [];
      for (ah in organizado) {
        ////
        grtols.push(youdumb_2[organizado[ah]]);
      }

      youdumb_2 = [];
      for (erro in grtols) {
        //
        youdumb_2.push(grtols[erro]);
      }
    }
  }
  //
  concatenar_2 = "";
  numsdesfat_2 = [];
  newexpress_2 = [];

  for (bababa in pans_2) {
    edge_2 = [];
    naonao_2 = "";
    amount = [];

    tobreak_2 = "";
    realife = [];
    amontoado_2 = [];
    for (quassao in roll_2[pans_2[bababa].numberyoudumb_2].posições) {
      el = miss_2[roll_2[pans_2[bababa].numberyoudumb_2].posições[quassao]].dividido;

      gates = [];

      quase_2 = [];
      
      teri = false;
      juntar = "";
      //
      for (estudar in el) {
        if (el[estudar] == "*") {
          teri = true;
          if (el[Number(estudar) + 1].search("[0-9]") != -1) {
            quase_2.push(juntar);
            juntar = "";
            quase_2.push("*");
          }
        } else {
          if (juntar.length == 0) {
            juntar = el[estudar];

            if (estudar == el.length - 1) {
              quase_2.push(juntar);
            }
          } else if (
            el[estudar].search("[0-9]") != -1 &&
            juntar.search("[0-9]") != -1
          ) {
            juntar += el[estudar];

            if (estudar == el.length - 1) {
              quase_2.push(juntar);
            }
          } else {
            quase_2.push(juntar);
            juntar = el[estudar];
            if (estudar == el.length - 1) {
              quase_2.push(juntar);
            }
          }
        }
      }

      if (teri == false) {
        quase_2 = [];
        //
        for (t in el) {
          quase_2.push(el[t]);
        }
      }
      aconta_2 = "";
      friend = "";

      elevar = 1;
      aster = false;

      for (patience in quase_2) {
        if (quase_2[patience] == "*") {
          aster = true;
          //
          //
          gates.push(quase_2[Number(patience) - 1]);
          gates.push("x");
          gates.push(quase_2[Number(patience) + 1]);

          quase_2[Number(patience) + 1] = fazerConta(gates)[0];
          aconta_2 = fazerConta(gates)[0];
          friend = fazerConta(gates)[0];

          gates = [];
        } else if (quase_2[patience].search("[a-z]") != -1) {
          friend += quase_2[patience];
          if (quase_2[patience] == quase_2[Number(patience) - 1]) {
            elevar++;

            if (patience == quase_2.length - 1) {
              //
              aconta_2 += `^${elevar}`;
              //
            }
          } else {
            if (elevar > 1) {
              //
              aconta_2 += `^${elevar}`;
            }

            aconta_2 += quase_2[patience];

            //

            elevar = 1;
          }
          //
        }
      }

      if (aster == false) {
        //
        direitando = "";
        for (h in quase_2) {
          direitando += quase_2[h];
        }
        friend = direitando;
      }

      if (aster == false) {
        //
        antes = "";
        for (eyes in quase_2) {
          //
          if (quase_2[eyes].search("[0-9]") != -1) {
            //
            antes += quase_2[eyes];
          }
        }
        antes += aconta_2;
        //

        aconta_2 = antes;
      }

      realife.push(aconta_2);
      if (tobreak_2.length == 0) {
        if (quase_2[0] == "-") {
          negativo = true;
          if (aconta_2[0] == "-") {
            //
            mood = "";
            for (member in aconta_2) {
              if (aconta_2[member] != "-") {
                //
                mood += aconta_2[member];
              }
            }

            tobreak_2 += `-${mood}`;
          } else {
            tobreak_2 += `-${aconta_2}`;
          }
        } else {
          negativo = false;
          tobreak_2 += aconta_2;
          //
          for (now in aconta_2) {
            //
          }
        }
      } else if (quase_2[0] == "-") {
        negativo = true;
        correct = "";
        for (okay in aconta_2) {
          //
          if (aconta_2[okay] != "-") {
            correct += aconta_2[okay];
            //
          }
        }
        //
        tobreak_2 += ` - ${correct}`;
      } else {
        negativo = false;
        //
        tobreak_2 += ` + ${aconta_2}`;
      }
      //

      //
      //

      if (negativo == true) {
        uh = "";
        for (i in friend) {
          if (friend[i] != "-") {
            uh += friend[i];
          }
        }
        amontoado_2.push("-");
        amontoado_2.push(uh);
      } else {
        amontoado_2.push("+");
        amontoado_2.push(friend);
      }
    }

    for (repr in pans_2[bababa].which) {
      triste =
        scarecrow_2[
          roll_2[pans_2[bababa].numberyoudumb_2].repetidos[
            pans_2[bababa].which[repr].numberwhat
          ]
        ].divisor;

      quase_2 = [];
      //
      juntar = "";
      teri = false;
      for (estudar in triste) {
        //

        ohjeez = triste[Number(estudar) - 1] != "-";
        //
        if (triste[estudar] == ".") {
          teri = true;
          if (
            triste[Number(estudar) + 1].search("[0-9]") != -1 &&
            ohjeez == true
          ) {
            quase_2.push(juntar);
            juntar = "";
            quase_2.push("*");
            //
          }
        } else {
          
          if (juntar.length == 0) {
            juntar = triste[estudar];
            //

            if (estudar == triste.length - 1) {
              quase_2.push(juntar);
            }
            //
          } else if (
            triste[estudar].search("[0-9]") != -1 &&
            juntar.search("[0-9]") != -1
          ) {
            //
            juntar += triste[estudar];
            //
            if (estudar == triste.length - 1) {
              //
              quase_2.push(juntar);
              //
            }
          } else {
            quase_2.push(juntar);
            juntar = triste[estudar];
            if (estudar == triste.length - 1) {
              quase_2.push(juntar);
              //
            }
          }
        }
      }
      //

      if (teri == false) {
        quase_2 = [];
        //
        for (t in triste) {
          quase_2.push(triste[t]);
        }
      }

      aconta_2 = "";
      friend = "";
      aster = false;
      elevar = 1;

      for (patience in quase_2) {
        if (quase_2[patience] == "*") {
          aster = true;

          gates.push(quase_2[Number(patience) - 1]);
          gates.push("x");
          gates.push(quase_2[Number(patience) + 1]);

          quase_2[Number(patience) + 1] = fazerConta(gates)[0];
          aconta_2 = fazerConta(gates)[0];
          friend = fazerConta(gates)[0];

          gates = [];
        } else if (quase_2[patience].search("[a-z]") != -1) {
          //
          friend += quase_2[patience];
          if (quase_2[patience] == quase_2[Number(patience) - 1]) {
            elevar++;

            if (patience == quase_2.length - 1) {
              aconta_2 += `^${elevar}`;
            }
          } else {
            if (elevar > 1) {
              aconta_2 += `^${elevar}`;
            }

            aconta_2 += quase_2[patience];

            elevar = 1;
          }
        }
      }

      if (aster == false) {
        //
        direitando = "";
        for (h in quase_2) {
          direitando += quase_2[h];
        }
        friend = direitando;
      }

      if (aster == false) {
        //

        antes = "";
        for (eyes in quase_2) {
          //
          if (quase_2[eyes].search("[0-9]") != -1) {
            //
            antes += quase_2[eyes];
          }
        }
        antes += aconta_2;
       
        aconta_2 = antes;
      }
      

      edge_2.push(aconta_2);

      if (quase_2[0] == "-") {
        uh = "";
        for (i in friend) {
          if (friend[i] != "-") {
            uh += friend[i];
          }
        }
        amount.push("-");
        amount.push(uh);
      } else {
        amount.push("+");
        amount.push(friend);
      }

      if (naonao_2.length == 0) {
        if (quase_2[0] == "-") {
          naonao_2 += `-${aconta_2}`;
        } else {
          naonao_2 += aconta_2;
        }
      } else {
        if (quase_2[0] == "-") {
          naonao_2 += ` - ${aconta_2}`;
        } else {
          naonao_2 += ` + ${aconta_2}`;
        }
      }
    }

    if (concatenar_2.length > 0) {
      concatenar_2 += " + ";
    }
    if (edge_2.length > 1) {
      concatenar_2 += `(${naonao_2})(${tobreak_2})`;
    } else {
      concatenar_2 += `${naonao_2}(${tobreak_2})`;
    }
    

    //FAZENDO A CONTA
    primeirocaso = SOMANDOMONOMIOS(amount);
    segundocaso = SOMANDOMONOMIOS(amontoado_2);

    mudou = false;
    if (primeirocaso[1] == primeirocaso[2]) {
    } else {
      mudou = true;
      //
    }

    if (segundocaso[1] == segundocaso[2]) {
      //
    } else {
      mudou = true;
      //
    }

    if (mudou == true) {
      naonao_2 = primeirocaso[0];
      tobreak_2 = segundocaso[0];

      reason = [];
      for (k in naonao_2) {
        //
        if (k != 0 && naonao_2[k] != "-" && naonao_2[k] != "+") {
          deserve = naonao_2[k - 1];
          reason.push(k - 1);
          deserve += naonao_2[k];

          naonao_2[k] = deserve;
        }
      }


      for (time = naonao_2.length - 1; time >= 0; time--) {
        if (reason.indexOf(time) != -1) {
          naonao_2.splice(time, 1);
        }
      }

      reason = [];
      for (k in tobreak_2) {
        if (k != 0 && tobreak_2[k] != "-" && tobreak_2[k] != "+") {
          deserve = tobreak_2[k - 1];
          deserve += tobreak_2[k];
          reason.push(k - 1);
          tobreak_2[k] = deserve;
        }
      }

      for (time = tobreak_2.length - 1; time >= 0; time--) {
        if (reason.indexOf(time) != -1) {
          tobreak_2.splice(time, 1);
        }
      }

      for (roberto in naonao_2) {
        for (vaidarcerto in tobreak_2) {
          novomon = MULTIPLICARDIREITO(naonao_2[roberto], tobreak_2[vaidarcerto]);
          
          if (novomon[0] == "-") {
            miya = "";
            for (n in novomon) {
              if (novomon[n] != "-") {
                miya += novomon[n];
              }
            }
            //
            newexpress_2.push("-");
            newexpress_2.push(miya);
          } else {
            newexpress_2.push("+");
            newexpress_2.push(novomon);
          }
        }
      }

      for (e in pans_2[bababa].todos) {
        numsdesfat_2.push(pans_2[bababa].todos[e]);
      }
    }
  }

  
  todososnumeros_2 = [];
  for (acaba in monomios_2) {
    //
    todososnumeros_2.push(acaba);
  }
  cancelar = [];
  for (feliz = todososnumeros_2.length - 1; feliz >= 0; feliz--) {
    //
    if (numerospresentes_2.indexOf(Number(todososnumeros_2[feliz])) != -1) {
      todososnumeros_2.splice(feliz, 1);
    }
  }

  for (bye in todososnumeros_2) {
    quase_2 = monomios_2[todososnumeros_2[bye]].numero;
    aconta_2 = "";
    elevar = 1;
    aster = false;
    friend = "";

    gates = [];

    for (patience in quase_2) {
      if (quase_2[patience] == "*") {
        aster = true;
        
        gates.push(quase_2[Number(patience) - 1]);
        gates.push("x");
        gates.push(quase_2[Number(patience) + 1]);
        

        quase_2[Number(patience) + 1] = fazerConta(gates)[0];
        aconta_2 = fazerConta(gates)[0];

        gates = [];
      } else if (quase_2[patience].search("[a-z]") != -1) {
        if (quase_2[patience] == quase_2[Number(patience) - 1]) {
          elevar++;

          if (patience == quase_2.length - 1) {
            aconta_2 += `^${elevar}`;
          }
        } else {
          if (elevar > 1) {
            aconta_2 += `^${elevar}`;
          }

          aconta_2 += quase_2[patience];

          elevar = 1;
        }
      }
    }

    if (aster == false) {
      direitando = "";
      for (h in quase_2) {
        direitando += quase_2[h];
      }
      friend = direitando;
    }
    if (aster == false) {
      antes = "";
      for (eyes in quase_2) {
        if (quase_2[eyes].search("[0-9]") != -1) {
          antes += quase_2[eyes];
        }
      }
      antes += aconta_2;
      aconta_2 = antes;
    }

    if (bye == 0) {
      //('PRIMEIRO')
      if (concatenar_2.length > 0) {
        if (quase_2[0] == "-") {
          concatenar_2 += ` - ${aconta_2}`;
        } else {
          concatenar_2 += ` + ${aconta_2}`;
        }
      } else {
        if (quase_2[0] == "-") {
          concatenar_2 += `-${aconta_2}`;
        } else {
          concatenar_2 += `${aconta_2}`;
        }
      }
    } else {
      if (quase_2[0] == "-") {
        concatenar_2 += ` - ${aconta_2}`;
      } else {
        concatenar_2 += ` + ${aconta_2}`;
      }
    }
  }

  //Vendo se o número é primo
  function ehprimo(Number) {
    parar = false;
    for (t = 2; t < Number && parar == false; t++) {
      if (Number % t == 0) {
        parar = true;
      }
    }
    if (parar) return false;
    else return true;
  }

  //Achando todos os divisores da quantidade de monômios
  //Ex: 12: 4, 3, 2, 6
  function ehprimo2(Number) {
    divisores = [];
    for (t = 2; t < Number && parar == false; t++) {
      if (Number % t == 0) {
        divisores.push(t);
      }
    }
    return divisores;
  }

  function sortob(n, pam) {
    var maiorparamenor = [];
    var posiçõesnumeros = [];
    var yposition = n;

    for (n in yposition) {
      maiorparamenor.push(
        -100000000000000000000000000000000000000000000000000000000000000000000000000000000
      );
      posiçõesnumeros.push(-1);
    }

    for (item in yposition) {
      var volume = 0;
      var dn = 0;
      for (volume in yposition) {
        if (dn == 0) {
          if (yposition[item][pam] > maiorparamenor[volume]) {
            var itens = yposition.length - (Number(volume) + 1);
            var leng = yposition.length;

            for (c = 0; c < itens; c++) {
              maiorparamenor[Number(leng) - 1] =
                maiorparamenor[Number(leng) - 2];
              posiçõesnumeros[Number(leng) - 1] =
                posiçõesnumeros[Number(leng) - 2];
              leng--;
            }
            maiorparamenor[volume] = yposition[item][pam];
            posiçõesnumeros[volume] = Number(item);
            dn = 10;
          }
        }
      }
    }
    return [maiorparamenor, posiçõesnumeros];
  }

  function doit(par) {
    segs_22 = [];

    for (uf in par) {
      segs_22[uf] = {};
      segs_22[uf].mons = [...par[uf].mons];
      segs_22[uf].car = par[uf].car;
    }

    relation_2 = [];

    quanto = Number(monomios_2.length) / Number(divs_2[okentao]);

    numapars = [];

    util = [];
    for (t in segs_22) {
      if (segs_22[t].mons.length >= quanto) {
        util.push(segs_22[t]);
      }
    }

   

    for (m in monomios_2) {
      aparic = 0;
      for (t in util) {
      
        if (util[t].mons.indexOf(Number(m)) != -1) {
          aparic++;
        }
      }
      numapars.push({ num: Number(m), vezes: aparic });
    }

    present = [];

    for (r in util) {
      lista = util[r].mons;
      present = { fix: [], falt: [] };
      
      rep = 0;
      for (g = 0; g < lista.length && rep < quanto; g++) {
       
        if (
          numapars.find(function (numapars) {
            return numapars.num == lista[g];
          }).vezes == 1
        ) {
        
          rep++;
          present.fix.push(lista[g]);
        }
      }
      

      if (present.fix.length < quanto) {
        for (g in lista) {
          if (present.fix.indexOf(lista[g]) == -1) {
            present.falt.push(lista[g]);

          }
        }

        if (present.fix.length == 0) {
          for (ti in present.falt) {
            //

            numapars.find(function (numapars) {
              return numapars.num == present.falt[ti];
            }).vezes--;
          }
        }
      }
      relation_2[r] = present;
      relation_2[r].car = segs_22[r].car;
    }
    //
    for (c in relation_2) {
      //
      if (relation_2[c].fix.length > 0) {
        faltam = Number(quanto) - Number(relation_2[c].fix.length);

        for (f = 0; f < faltam; f++) {
          relation_2[c].fix.push(relation_2[c].falt[f]);

          relation_2[c].falt[f] = -10;
        }

        for (tel = 0; tel < c; tel++) {
          if (relation_2[tel].fix.length > 0) {
          }

          outrorel = relation_2[tel];

          for (hu in outrorel.fix) {
            if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
              y = 0;
              for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                if (
                  relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                  outrorel.falt[ou] != -10
                ) {
                  outrorel.fix[hu] = outrorel.falt[ou];
                  outrorel.falt[ou] = -10;

                  y++;
                }
              }
            }
          }
        }
      }
    }

    //

    ////

    groups = 0;
    conts = [];
    for (yougo in relation_2) {
      if (relation_2[yougo].fix.length > 0) {
        for (pals in relation_2[yougo].fix) {
          //
          conts.push(relation_2[yougo].fix[pals]);
        }
        groups++;
      }
    }

    if (groups < divs_2[okentao]) {
      //

      groups = 0;
      conts = [];
      for (yougo in relation_2) {
        if (relation_2[yougo].fix.length > 0) {
          for (pals in relation_2[yougo].fix) {
            //
            conts.push(relation_2[yougo].fix[pals]);
          }
          groups++;
        }
      }
      //
      if (divs_2[okentao] != groups) {
        //

        tirados_2 = [];
        for (wish in relation_2) {
          //
          for (edge_2 in relation_2[wish].fix) {
            //
            tirados_2.push(relation_2[wish].fix[edge_2]);
          }
        }
        //

        for (die in segs_22) {
          tirar = [];

          for (h in segs_22[die].mons) {
            if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            segs_22[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs_22) {
          grupos = Math.floor(Number(segs_22[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs_22[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                ob.problem = true;
              }

              ob.fix.push(segs_22[sorrow].mons[imor]);
              tirados_2.push(segs_22[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation_2.push(ob);
            }
          }
        }
      }

      males = [];
      for (nah = relation_2.length - 1; nah >= 0; nah--) {
        //if (relation_2[nah].fix.length > 0) {

        //

        for (nop in relation_2) {
          if (relation_2[nop].fix.length > 0 && nop != nah) {
            igual = true;
            for (uh in relation_2[nop].fix) {
              if (relation_2[nah].fix.indexOf(relation_2[nop].fix[uh]) == -1) {
                igual = false;
              }
            }

            if (igual == true) {
              if (relation_2[nah].car.length > relation_2[nop].car.length) {
                males.push(Number(nop));
              }
              //}
            }
          } else if (relation_2[nop].fix.length == 0) {
            males.push(Number(nop));
          }
        }
      }

      for (nah = relation_2.length - 1; nah >= 0; nah--) {
        //
        if (males.indexOf(nah) != -1) {
          //
          relation_2.splice(nah, 1);
        }
      }

      numerosquetem = [];
      for (nah in relation_2) {
        if (relation_2[nah].fix.length > 0) {
          //

          for (nop in relation_2[nah].fix) {
            //
            numerosquetem.push(relation_2[nah].fix[nop]);
          }
        }
      }
      //

      segs_22 = [];

      for (uf in par) {
        //
        //segs_22.push(segs_2[uf])
        //segs_2[tie].godhelpme = [...segs_2[tie].mons]
        segs_22[uf] = {};
        segs_22[uf].mons = [...par[uf].mons];
        segs_22[uf].car = par[uf].car;
      }

      for (pose in segs_22) {
        for (me = segs_22[pose].mons.length - 1; me >= 0; me--) {
          if (numerosquetem.indexOf(segs_22[pose].mons[me]) != -1) {
            segs_22[pose].mons.splice(me, 1);
          }
        }
      }

      fireonfire = [];

      for (uf in relation_2) {
        //
        //segs_22.push(segs_2[uf])
        //segs_2[tie].godhelpme = [...segs_2[tie].mons]
        fireonfire[uf] = {};
        fireonfire[uf].mons = [...relation_2[uf].fix];
        fireonfire[uf].car = relation_2[uf].car;
      }

      for (red in fireonfire) {
        //
        relation_2.push({ fix: fireonfire[red].mons, car: fireonfire[red].car });
      }
    } else if (groups > divs_2[okentao]) {
      //
      //
      //

      mia = [];
      for (idk in segs_22) {
        ////
        //

        for (mcr in segs_22) {
          if (mcr != idk) {
            ////
            //

            //
            if (segs_22[mcr].mons.length <= segs_22[idk].mons.length) {
              sames = [];
              for (y = 0; y < segs_22[mcr].mons.length; y++) {
                //
                if (segs_22[idk].mons.indexOf(segs_22[mcr].mons[y]) != -1) {
                  //
                  sames.push("igual");
                } else {
                  //
                  sames.push("diferente");
                }
              }
              //
              if (sames.indexOf("diferente") == -1) {
                //

                if (mia.indexOf(mcr) == -1) {
                  mia.push(mcr);
                }

                //
              }
            }
          }
        }
      }

      for (f = mia.length - 1; f >= 0; f--) {
        //segs_22.splice(mia[f],1)
      }

      numapars = [];

      relation_2 = [];

      ////

      util = [];
      for (t in segs_22) {
        //
        //

        if (segs_22[t].mons.length >= quanto) {
          util.push(segs_22[t]);
        }
        //
      }

      for (m in monomios_2) {
        aparic = 0;
        //
        for (t in util) {
          //
          //

          if (util[t].mons.indexOf(Number(m)) != -1) {
            aparic++;
          }
        }
        //
        numapars.push({ num: Number(m), vezes: aparic });
      }

      present = [];
      //
      for (r in util) {
        //
        lista = util[r].mons;
        present = { fix: [], falt: [] };
        //

        rep = 0;
        for (g = 0; g < lista.length && rep < quanto; g++) {
          //

          if (
            numapars.find(function (numapars) {
              return numapars.num == lista[g];
            }).vezes == 1
          ) {
            //
            rep++;
            present.fix.push(lista[g]);
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
              present.falt.push(lista[g]);

              //numapars.find(function(numapars) {
              //return numapars.num == lista[g]
              //}).vezes--
            }
          }
          //

          if (present.fix.length == 0) {
            for (ti in present.falt) {
              //

              numapars.find(function (numapars) {
                return numapars.num == present.falt[ti];
              }).vezes--;
            }
          }
        }
        relation_2[r] = present;
        relation_2[r].car = segs_22[r].car;
      }

      for (c in relation_2) {
        //
        if (relation_2[c].fix.length > 0) {
          //

          faltam = Number(quanto) - Number(relation_2[c].fix.length);
          //

          for (f = 0; f < faltam; f++) {
            //
            relation_2[c].fix.push(relation_2[c].falt[f]);

            relation_2[c].falt[f] = -10;
          }
          //

          for (tel = 0; tel < c; tel++) {
            if (relation_2[tel].fix.length > 0) {
              //
            }

            outrorel = relation_2[tel];

            for (hu in outrorel.fix) {
              //
              if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                //
                //
                y = 0;
                for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                  ///
                  if (
                    relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                    outrorel.falt[ou] != -10
                  ) {
                    outrorel.fix[hu] = outrorel.falt[ou];
                    outrorel.falt[ou] = -10;

                    //
                    y++;
                  }
                }
              }
            }
          }
        }
      }

      groups = 0;
      conts = [];
      for (yougo in relation_2) {
        if (relation_2[yougo].fix.length > 0) {
          //

          for (pals in relation_2[yougo].fix) {
            //
            conts.push(relation_2[yougo].fix[pals]);
          }
          groups++;
        }
      }

      if (divs_2[okentao] != groups) {
        tirados_2 = [];
        for (wish in relation_2) {
          for (edge_2 in relation_2[wish].fix) {
            tirados_2.push(relation_2[wish].fix[edge_2]);
          }
        }

        for (die in segs_22) {
          tirar = [];

          for (h in segs_22[die].mons) {
            if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            segs_22[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs_22) {
          grupos = Math.floor(Number(segs_22[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs_22[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                ob.problem = true;
              }

              ob.fix.push(segs_22[sorrow].mons[imor]);
              tirados_2.push(segs_22[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation_2.push(ob);
            }
          }
        }
      }
    }
    return [relation_2, segs_22];
  }

  function temnaLista(h) {
    for (t in relation_2) {
      if (relation_2[t].fix.length > 0) {
        home = 0;
        for (fear in relation_2[t].fix) {
          if (relation_2[t].fix[fear] == h[fear]) {
            home++;
          }
        }

        if (home == h.length) {
          return true;
        }
      }
    }
  }

  function doit2(par) {
    segs_22 = [];

    for (uf in par) {
      //
      //segs_22.push(segs_2[uf])
      //segs_2[tie].godhelpme = [...segs_2[tie].mons]
      segs_22[uf] = {};
      segs_22[uf].mons = [...par[uf].mons];
      segs_22[uf].car = par[uf].car;
    }

    relation_2 = [];

    quanto = Number(monomios_2.length) / Number(divs_2[okentao]);

    numapars = [];

    util = [];
    for (t in segs_22) {
      if (segs_22[t].mons.length >= quanto) {
        util.push(segs_22[t]);
      }
      //
    }

    //

    for (m in monomios_2) {
      aparic = 0;
      //
      for (t in util) {
        //
        //

        if (util[t].mons.indexOf(Number(m)) != -1) {
          aparic++;
        }
      }
      //
      numapars.push({ num: Number(m), vezes: aparic });
    }

    present = [];

    //
    for (r in util) {
      //
      lista = util[r].mons;
      present = { fix: [], falt: [] };
      //

      rep = 0;
      for (g = 0; g < lista.length && rep < quanto; g++) {
        //

        if (
          numapars.find(function (numapars) {
            return numapars.num == lista[g];
          }).vezes == 1
        ) {
          //
          rep++;
          present.fix.push(lista[g]);
        }
      }
      //
      //

      if (present.fix.length < quanto) {
        for (g in lista) {
          if (present.fix.indexOf(lista[g]) == -1) {
            present.falt.push(lista[g]);

          }
        }

        if (present.fix.length == 0) {
          for (ti in present.falt) {
            numapars.find(function (numapars) {
              return numapars.num == present.falt[ti];
            }).vezes--;
          }
        }
      }
      relation_2[r] = present;
      relation_2[r].car = segs_22[r].car;
    }
    //
    for (c in relation_2) {
      //
      if (relation_2[c].fix.length > 0) {
        
        faltam = Number(quanto) - Number(relation_2[c].fix.length);
      
        for (f = 0; f < faltam; f++) {

          relation_2[c].fix.push(relation_2[c].falt[f]);

          relation_2[c].falt[f] = -10;

        }
     
        for (tel = 0; tel < c; tel++) {
          if (relation_2[tel].fix.length > 0) {
          }

          outrorel = relation_2[tel];

          for (hu in outrorel.fix) {
            //
            if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
            
              y = 0;
              for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                //
                if (
                  relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                  outrorel.falt[ou] != -10
                ) {
                  //
                  outrorel.fix[hu] = outrorel.falt[ou];
                  outrorel.falt[ou] = -10;

                  //
                  y++;
                }
              }
            }
          }
        }
      }
    }

   

    groups = 0;
    conts = [];
    for (yougo in relation_2) {
      if (relation_2[yougo].fix.length > 0) {
        //

        for (pals in relation_2[yougo].fix) {
          //
          conts.push(relation_2[yougo].fix[pals]);
        }
        groups++;
      }
    }

    //
    //
    if (groups < divs_2[okentao]) {
      //

      //

      groups = 0;
      conts = [];
      for (yougo in relation_2) {
        if (relation_2[yougo].fix.length > 0) {
          for (pals in relation_2[yougo].fix) {
            conts.push(relation_2[yougo].fix[pals]);
          }
          groups++;
        }
      }
      //
      if (divs_2[okentao] != groups) {
        tirados_2 = [];
        for (wish in relation_2) {
          //
          for (edge_2 in relation_2[wish].fix) {
            tirados_2.push(relation_2[wish].fix[edge_2]);
          }
        }

        for (die in segs_22) {
          tirar = [];

          for (h in segs_22[die].mons) {
            if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            //
            segs_22[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs_22) {
          grupos = Math.floor(Number(segs_22[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs_22[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                //ob.problem = true
              }

              ob.fix.push(segs_22[sorrow].mons[imor]);
              tirados_2.push(segs_22[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation_2.push(ob);
            }
          }
        }
      }
    } else if (groups > divs_2[okentao]) {
      //

      mia = [];
      for (idk in segs_22) {
        ////

        for (mcr in segs_22) {
          if (mcr != idk) {
            ////
            //

            if (segs_22[mcr].mons.length <= segs_22[idk].mons.length) {
              sames = [];
              for (y = 0; y < segs_22[mcr].mons.length; y++) {
                //
                if (segs_22[idk].mons.indexOf(segs_22[mcr].mons[y]) != -1) {
                  //
                  sames.push("igual");
                } else {
                  //
                  sames.push("diferente");
                }
              }
              //
              if (sames.indexOf("diferente") == -1) {
                if (mia.indexOf(mcr) == -1) {
                  mia.push(mcr);
                }

                //
              }
            }
          }
        }
      }

      for (f = mia.length - 1; f >= 0; f--) {
        //segs_22.splice(mia[f],1)
      }

      numapars = [];

      relation_2 = [];

      util = [];
      for (t in segs_22) {
        if (segs_22[t].mons.length >= quanto) {
          util.push(segs_22[t]);
        }
      }

      for (m in monomios_2) {
        aparic = 0;
        for (t in util) {

          if (util[t].mons.indexOf(Number(m)) != -1) {
            aparic++;
          }
        }
        numapars.push({ num: Number(m), vezes: aparic });
      }

      present = [];
      for (r in util) {
        lista = util[r].mons;
        present = { fix: [], falt: [] };
       
        rep = 0;
        for (g = 0; g < lista.length && rep < quanto; g++) {
        
          if (
            numapars.find(function (numapars) {
              return numapars.num == lista[g];
            }).vezes == 1
          ) {
            rep++;
            present.fix.push(lista[g]);
          }
        }
      

        if (present.fix.length < quanto) {
          for (g in lista) {
           
            if (present.fix.indexOf(lista[g]) == -1) {
              present.falt.push(lista[g]);

            }
          }
         
          if (present.fix.length == 0) {
            for (ti in present.falt) {
             
              numapars.find(function (numapars) {
                return numapars.num == present.falt[ti];
              }).vezes--;
            }
          }
        }
        relation_2[r] = present;
        relation_2[r].car = segs_22[r].car;
      }

      for (c in relation_2) {
        if (relation_2[c].fix.length > 0) {
          faltam = Number(quanto) - Number(relation_2[c].fix.length);
          for (f = 0; f < faltam; f++) {
            
            relation_2[c].fix.push(relation_2[c].falt[f]);

            relation_2[c].falt[f] = -10;
          }
         
          for (tel = 0; tel < c; tel++) {
    
            outrorel = relation_2[tel];

            for (hu in outrorel.fix) {
              if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                y = 0;
                for (ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                  if (
                    relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 &&
                    outrorel.falt[ou] != -10
                  ) {
                    outrorel.fix[hu] = outrorel.falt[ou];
                    outrorel.falt[ou] = -10;

                    y++;
                  }
                }
              }
            }
          }
        }
      }

      groups = 0;
      conts = [];
      for (yougo in relation_2) {
        if (relation_2[yougo].fix.length > 0) {
          for (pals in relation_2[yougo].fix) {
            conts.push(relation_2[yougo].fix[pals]);
          }
          groups++;
        }
      }

      if (divs_2[okentao] != groups) {
        tirados_2 = [];
        for (wish in relation_2) {
          for (edge_2 in relation_2[wish].fix) {
            tirados_2.push(relation_2[wish].fix[edge_2]);
          }
        }

        for (die in segs_22) {
          tirar = [];

          for (h in segs_22[die].mons) {
            if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
              tirar.push(Number(h));
            }
          }

          for (far = tirar.length - 1; far >= 0; far--) {
            segs_22[die].mons.splice(tirar[far], 1);
          }
        }

        for (sorrow in segs_22) {
          grupos = Math.floor(Number(segs_22[sorrow].mons.length) / quanto);

          imor = 0;

          for (b = 0; b < grupos; b++) {
            ob = { car: segs_22[sorrow].car, fix: [], problem: false };

            for (live = 0; live < quanto; live++) {
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                //ob.problem = true
              }
              //
              ob.fix.push(segs_22[sorrow].mons[imor]);
              tirados_2.push(segs_22[sorrow].mons[imor]);
              imor++;
            }

            if (ob.problem == false || temnaLista(ob.fix) == true) {
              relation_2.push(ob);
            }
          }
        }
      }
    }
    return [relation_2, segs_22];
  }

  //DESFATORAR(['-','3'],['3'],['1'])

  function SOMANDOMONOMIOS(list) {
    particles = [{ numero: "" }];
    obnum = 0;
    for (n = 0; n < list.length; n++) {
      if (String(list[n]).search("[\\-\\+]") != -1 && n != 0) {
        particles.push({ numero: "" });
        obnum++;
      }
      particles[obnum].numero += list[n];
    }

    for (huh in particles) {
      partlet = "";
      for (y in particles[huh].numero) {
        if (String(particles[huh].numero[y]).search("[a-z]") != -1) {
          partlet += String(particles[huh].numero[y]);
        }
      }
      particles[huh].partletral = partlet;
    }

    exp_2 = [];
    for (bye in particles) {
      comofica = [];
      ground_2 = "";

      for (misery in particles[bye].numero) {
      
        carac = particles[bye].numero[misery];

        if (ground_2.length == 0) {
          ground_2 += carac;
        } else if (
          String(ground_2.search("[0-9]")) != -1 &&
          String(carac).search("[0-9]") != -1
        ) {
          
          ground_2 += carac;
        } else {
          comofica.push(ground_2);
          ground_2 = "";
          ground_2 += carac;
        }
        if (misery == particles[bye].numero.length - 1) {
          comofica.push(ground_2);
        }
      }

      particles[bye].numero = comofica;
    }

    agruparsoma = [];
    //JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
    for (huh in particles) {
      if (
        agruparsoma.find(function (agruparsoma) {
          return agruparsoma.que == particles[huh].partletral;
        }) == undefined
      ) {
        agruparsoma.push({
          quais: [Number(huh)],
          que: particles[huh].partletral,
        });
      } else {
        agruparsoma
          .find(function (agruparsoma) {
            return agruparsoma.que == particles[huh].partletral;
          })
          .quais.push(Number(huh));
      }
    }

    for (chuva in agruparsoma) {
      //

      conta = [];
      for (da in agruparsoma[chuva].quais) {
        divisor = [];
        for (flowers in agruparsoma[chuva].que) {
          divisor.push(agruparsoma[chuva].que[flowers]);
        }

        tu = [...divisor];
        resultadoDaDivisão = DIVIDIR(
          divisor,
          particles[agruparsoma[chuva].quais[da]].numero
        );

        plan = [];
        add = "";

        for (past in resultadoDaDivisão) {
          if (
            resultadoDaDivisão[past].search("\\*") != -1 ||
            resultadoDaDivisão[past].search("[0-9]") != -1
          ) {
            if (add.length == 0) {
              if (resultadoDaDivisão[past - 1] != "-") {
                add += resultadoDaDivisão[past];
              }
            } else if (
              resultadoDaDivisão[past].search("[0-9]") != -1 &&
              add.search("[0-9]") != -1
            ) {
              add += resultadoDaDivisão[past];
            } else {
              plan.push(add);
              add = "";
              add += resultadoDaDivisão[past];
            }

            if (plan.length == 3) {
              plan = [String(Number(plan[0]) * Number(plan[2]))];
            }
          }
        }

        if (add == "" && agruparsoma[chuva].quais.length > 1) {
          add = "1";
        }
        plan.push(add);

        if (plan.length == 3) {
          plan = [String(Number(plan[0]) * Number(plan[2]))];
        }

        if (
          particles[agruparsoma[chuva].quais[da]].numero[0] == "+" ||
          particles[agruparsoma[chuva].quais[da]].numero[0] == "-"
        ) {
          sinal = particles[agruparsoma[chuva].quais[da]].numero[0];

          if (conta.length != 0) {
            conta.push(particles[agruparsoma[chuva].quais[da]].numero[0]);
          }
        }

        if (
          conta.length == 0 &&
          particles[agruparsoma[chuva].quais[da]].numero[0] == "-"
        ) {
          entao = "-";
          entao += plan[0];

          conta.push(entao);
        } else {
          conta.push(plan[0]);
        }
      }

      comehome = fazerConta(conta);

      if (comehome[0][0] == "-") {
        t = "";
        for (b in comehome[0]) {
          if (comehome[0][b] != "-") {
            t += comehome[0][b];
          }
        }
        //

        at = t;
        if (ehprimo(t) == false) {
          fat = FATORARSInGULAR(at);
          //
        } else {
          //
          fat = at;
        }
        oop = "-";
        oop += String(fat);

        exp_2.push("-");
        fat += agruparsoma[chuva].que;
        exp_2.push(fat);
      } else {
        if (ehprimo(comehome) == false) {
          fat = FATORARSInGULAR(comehome);
        } else {
          fat = comehome;
        }

        if (exp_2.length == 0) {
          fat += agruparsoma[chuva].que;
          exp_2.push(fat);
        } else {
          exp_2.push("+");
          fat += agruparsoma[chuva].que;
          exp_2.push(fat);
          //
        }
      }
    }

    return [exp_2, agruparsoma.length, particles.length];
  }

  function REDONUMFACTORING(storer) {
    if (typeof storer === "string") {
      other = [];
      for (h in storer) {
        other.push(storer[h]);
      }
      storer = other;
    }

    resultobtained = "";

    elevar = 1;
    wasmultiplicated = false;

    operation = [];
    for (patience in storer) {
      if (storer[patience] == "*") {
        wasmultiplicated = true;

        operation.push(storer[Number(patience) - 1]);
        operation.push("x");
        operation.push(storer[Number(patience) + 1]);

        storer[Number(patience) + 1] = fazerConta(operation)[0];
        resultobtained = fazerConta(operation)[0];

        operation = [];
      } else if (storer[patience].search("[a-z]") != -1) {
        if (storer[patience] == storer[Number(patience) - 1]) {
          elevar++;

          if (patience == storer.length - 1) {
            resultobtained += `^${elevar}`;
          }
        } else {
          if (elevar > 1) {
            resultobtained += `^${elevar}`;
          }

          resultobtained += storer[patience];
          elevar = 1;
        }
      }
    }

    if (wasmultiplicated == false) {
      addingnumber = "";
      for (eyes in storer) {
        if (storer[eyes].search("[0-9]") != -1) {
          addingnumber += storer[eyes];
        }
      }
      addingnumber += resultobtained;

      resultobtained = addingnumber;
    }
    if (storer[0] == "-") {
      confirmedresult = "-";
      for (caracter in resultobtained) {
        confirmedresult += resultobtained[caracter];
      }
      return confirmedresult;
    } else {
      return resultobtained;
    }
  }

  function MULTIPLICARDIREITO(num1, num2) {
    if (num1 == "1" || num2 == "1") {
      if (num1 == "1") {
        resultmult = num2;
      } else {
        resultmult = num1;
      }
    } else {
      sónumero = "";
      sóletra = "";
      for (car in num1) {
        if (num1[car].search("[0-9]") != -1 || num1[car] == "*") {
          sónumero += num1[car];
        } else if (num1[car].search("[a-z]") != -1) {
          sóletra += num1[car];
        }
      }

      sónumero2 = "";
      sóletra2 = "";
      for (car in num2) {
        if (num2[car].search("[0-9]") != -1 || num2[car] == "*") {
          sónumero2 += num2[car];
        } else if (num2[car].search("[a-z]") != -1) {
          sóletra2 += num2[car];
        }
      }

      if (sónumero.length > 0 && sónumero2.length > 0) {
        sónumero += "*";
      }

      if (num1[0] == "-") {
        sinal1 = "neg";
      } else {
        sinal1 = "pos";
      }

      if (num2[0] == "-") {
        sinal2 = "neg";
      } else {
        sinal2 = "pos";
      }

      sónumero += sónumero2;

      sóletra += sóletra2;
      if (sinal1 == sinal2) {
        resultmult = sónumero += sóletra;
      } else {
        resultmult = "-";
        resultmult += sónumero += sóletra;
      }
    }
    return resultmult;
  }

  function sort(n) {
    var maiorparamenor = [];
    var posiçõesnumeros = [];
    var yposition = n;

    for (n in yposition) {
      maiorparamenor.push(
        -100000000000000000000000000000000000000000000000000000000000000000000000000000000
      );
      posiçõesnumeros.push(-1);
    }

    for (item in yposition) {
      var volume = 0;
      var dn = 0;
      for (volume in yposition) {
        if (dn == 0) {
          if (yposition[item] > maiorparamenor[volume]) {
            var itens = yposition.length - (Number(volume) + 1);
            var leng = yposition.length;

            for (c = 0; c < itens; c++) {
              maiorparamenor[Number(leng) - 1] =
                maiorparamenor[Number(leng) - 2];
              posiçõesnumeros[Number(leng) - 1] =
                posiçõesnumeros[Number(leng) - 2];
              leng--;
            }
            maiorparamenor[volume] = yposition[item];
            posiçõesnumeros[volume] = Number(item);
            dn = 10;
          }
        }
      }
    }
    return [maiorparamenor, posiçõesnumeros];
  }

  //.log('Poxa segs_2, você me decepcionou... ;-; (D:)', VAI('13x'), DIVIDIR(['-','.','13'],['2','.','13']))
  return [
    concatenar_2,
    pans_2.length,
    todososnumeros_2.length,
    segs_2.length,
    roll_2.length,
  ];
}

function FATORE(q) {
  qualexp1 = q;
  qualexp = "";

  parar = false;
  for (copy in qualexp1) {
    //console.log(qualexp1[copy])
    if (qualexp1[copy] != " ") {
      if (
        qualexp1[copy].search("[0-9]") != -1 ||
        qualexp1[copy].search("[a-z]") != -1 ||
        qualexp1[copy].search("[\\+\\-\\^]") != -1
      ) {
        //console.log(qualexp1[copy],'ir')
        qualexp += qualexp1[copy];
      } else {
        parar = true;
      }
    }
  }
  //console.log('É ESSE:', qualexp)

  if (qualexp != "" && parar == false) {
    ground = "";
    expression = [];
    for (phy in qualexp) {
      if (qualexp[phy].search("[0-9]") != -1) {
        if (ground.search("[0-9]") != -1) {
          ground += qualexp[phy];
        } else if (ground.length > 0) {
          expression.push(ground);
          ground = qualexp[phy];
        } else {
          ground = qualexp[phy];
        }
      } else {
        if (ground.length > 0) {
          expression.push(ground);
        }
        ground = qualexp[phy];
      }
      if (phy == qualexp.length - 1) {
        expression.push(ground);
      }
    }

    //resultado = FATORAR(expression,0);
    //return resultado;
    return expression
  }
}

function INDIRETARROLL() { // CÓDIGO PARA ADICIONAR POSIÇÕES QUE POSSUEM  O TERMO (REPETIDO) DO ROLL[N] E QUE NÃO ESTÃO INSERIDAS
  for (nao in roll) {
    shot = "";
    for (gun in roll[nao].repetidos) {
      shot += roll[nao].repetidos[gun] + ",";
    }

    for (whyso in miss) {
      igual = 0;
      for (heat in miss[whyso].aparicoes) {
        if (roll[nao].repetidos.indexOf(miss[whyso].aparicoes[heat]) != -1) {
          igual++;
        }
      }

      if (igual == roll[nao].repetidos.length) {
        if (
          roll
            .find(function (roll) {
              return roll.way == shot;
            })
            .posições.indexOf(whyso) != -1
        ) {
        } else {
          roll
            .find(function (roll) {
              return roll.way == shot;
            })
            .posições.push(whyso);
        }
      }
    }
  }
}

function SPLITEXPS(expression) {
    splitedExps = []
    str = ''
    c1 = -1
    c2 = -1
    for (c in expression) {
      if (expression[c] == '(') {
        console.log('ABRIR')
        c1 = c
        str = ''
      }else if(expression[c] == ')') {
        c2 = c
        splitedExps.push({exp: str,open:c1,close:c2})
        console.log('FECHAR',str,c1,c2)
        str = ''
      }else{
        str+= expression[c]
      }
    }
    return splitedExps
    }
    