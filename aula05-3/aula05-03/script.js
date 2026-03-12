alert("Hello World!");
console.log("Teste de console");

//variáveis

var animal = "gato";
console.log(animal);

let nomeCompleto = "radiohead da silva";
console.log(nomeCompleto);

const valor0 = 10;
console.log(valor0);

valor1 = '15'; 
valor1 = 12; //var, permite reatribuição

//valor 0 = 14; -- const, nao permite reatribuição

//verificação de tipos:
console.log(typeof valor1);

//algoritmo: entrada + processamento + saída
var nome = window.prompt("Nome: ");
console.log(nome);
console.log(`Seja bem-vindo ${nome}. Aproveite`); //template literal
document.writeln(`Seja bem-vindo ${nome}. Aproveite`);

//operadores aritméticos + - * / **
// (2 + 4) * 2

//operadores de comparaçao: < > <= >= = == != === !==
console.log(5 == '5'); //igualdade -> olha apenas os valores
console.log(5 === '5'); //estritamente igual olhar para tipo e valor

//Criar um algoritmo que realize a soma de dois números;
//O usuário deverá informar os números e você deve apresentar o resultado

var x = parseInt(window.prompt("Digite um número: "));
var y = parseInt(window.prompt("Digite outro número: "));
var result = x + y;
console.log(result)
document.writeln(`Resultado da soma: ${result}`);

//estruturas condicionais: if, else, switch-case
var idade = 10;
if (idade >= 18){
    console.log("Maior de Idade");
} else {
    console.log("Menor de Idade");
}

//estruturas de repetição switch case

var diaSemana = 3;
switch (diaSemana)
 {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")
        break;
    default:
        console.log("Escolha uma opção")
 }
//estruturas de repetição: for e while
for (let i=0; i<5; i++){
    console.log("iteração: " + i);
}

let i = 5;
while(i<5){
    console.log("iteração: " + i);
    i++
}


