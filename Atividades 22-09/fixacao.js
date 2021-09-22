/* 1) Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
a) Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
b) Se for kiwi, retorne: “Estamos com escassez de kiwis”.
c) Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
d) Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema! */

var fruta = "Melancia";

switch(fruta){
  case "Maçã":
    console.log("Não vendemos esta fruta aqui.");
    break;
  case "Kiwi":
    console.log("Estamos com escassez de kiwis.")
    break;
  case "Melancia":
    console.log("Aqui está, são 3 reais o quilo.");
    break;
  default:
    console.log("Procure o administrador do sistema!")
}

/* 2) As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. Criar variáveis que tenham o salário 
do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
a) Salários até R$ 280,00 (incluindo) : aumento de 20%
b) Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
c) Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
d) Salários de R$ 1500,00 em diante : aumento de 5%

Após o aumento ser realizado, informe no console:
● O salário antes do reajuste;
● O percentual de aumento aplicado;
● O valor do aumento;
● O novo salário, após o aumento. */

function atv1_2 (){
    let salario = 950;
    
    let percentual;
    let valorAumento;
    let novoSalario;
    
    if(salario <= 280){
      percentual = 20 / 100;
      valorAumento = salario * percentual;
      novoSalario = salario + valorAumento
      console.log("Salário sem reajuste: R$" + salario + ". Percentual de aumento aplicado: " + percentual + ". Valor do aumento: R$" + valorAumento + ". Novo salário após o aumento: R$" + novoSalario + ".");
    }
    else if(salario > 280 && salario <= 700){
      percentual = 15 / 100;
      valorAumento = salario * percentual;
      novoSalario = salario + valorAumento
      console.log("Salário sem reajuste: R$" + salario + ". Percentual de aumento aplicado: " + percentual + ". Valor do aumento: R$" + valorAumento + ". Novo salário após o aumento: R$" + novoSalario + ".");
    }
    else if(salario > 700 && salario <= 1500){
      percentual = 10 / 100;
      valorAumento = salario * percentual;
      novoSalario = salario + valorAumento
      console.log("Salário sem reajuste: R$" + salario + ". Percentual de aumento aplicado: " + percentual + ". Valor do aumento: R$" + valorAumento + ". Novo salário após o aumento: R$" + novoSalario + ".");
    }
    else{
      percentual = 5 / 100
      valorAumento = salario * percentual;
      novoSalario = salario + valorAumento
      console.log("Salário sem reajuste: R$" + salario + ". Percentual de aumento aplicado: " + percentual + ". Valor do aumento: R$" + valorAumento + ". Novo salário após o aumento: R$" + novoSalario + ".");
    }
  }