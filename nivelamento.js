//Matheus Gonçalves Fernandes 3°TEC

// ==================== ATIVIDADES COM FOR ====================

// 1: Exiba os números de 1 a 10 usando for
for(let i=1; i<=10; i++){
console.log(i);}

// 2: Exiba os números de 10 até 1 em ordem decrescente
for(let i=10; i>=1; i--){
console.log(i);}

// 3: Exiba todos os números pares de 2 a 20
console.log("\n==== Números pares até 20 ====");
for(let i=2; i<=20; i= i + 2){
console.log(i);}

// 4: Exiba a tabuada do número 5 (5x1 até 5x10);
console.log("\n=== Tabuada do 5 ====");
for(let i=1; i<=10; i++){
console.log(`5 x ${i} = ${5 * i}`);}

// 5: Calcule e exiba a soma dos números de 1 até 50
console.log("\n=== Soma de 1 a 50 =====");
let soma = 0;
for(let i =1; i<=50; i++){
soma = soma + i;}
console.log(`A soma é: ${soma}`);

// 6: Conte de 1 até o número 8 (use for);
for(let i=1; i<=8; i++){
console.log(i);}

// 7: Exiba todos os números ímpares de 1 a 15
for(let i= 1; i<=15; i= i +2){
console.log(i);}

// 8: Exiba o resultado da multiplicação de 1 a 10 por 2
for(let i=1; i<=10; i++){
console.log(`${i} x 2 ${i*2}`);}

// 9: Exiba os números de 5 em 5, de 5 até 50
for(let i=5; i<=50; i = i+ 5){
console.log(i);}

// 10: Calcule e exiba o quadrado dos números de 1 a 10
for(let i =1; i<=10; i++){
console.log(`${i}² = ${i*i}`);}

// ==================== ATIVIDADES COM IF ====================

// 11: Verifique se o número 15 é positivo e exiba uma mensagem
let numero3 =-1;
if(numero >0){
console.log(`${numero} é positivo`);
}else{
console.log(`${numero} é negativo`);
}


// 12: Verifique se uma pessoa com 17 anos é maior de idade

let idade1 =17;
if(idade >=18){
console.log("Maior de idade");
}else{
console.log("Menor de idade");
}


// 13: Verifique se o número 7 é par ou ímpar
const numero1 = 7;

if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}

// 14: Verifique se a nota 7.5 é suficiente para aprovação (média 6)
let nota =7.5;
if(nota>=6){
console.log("Aprovado");}
else{console.log("Reprovado");}

// 15: Verifique se o número 8 é maior que 10
let num1 =8;
if(num>=10){
console.log(`${num} é maior do 10`);

}else{
console.log("menor");
}

// 16: Verifique se o número 0 é igual a zero
const numero2 = 0;

if (numero === 0) {
    console.log("O número é igual a zero.");
} else {
    console.log("O número não é zero.");
}

// 17: Compare os números 10 e 20 e diga qual é o maior
let numero0 = 10;
let numero9 = 20;

if (numero2 > numero1) {
    console.log("O número " + numero2 + " é maior que o número " + numero1);
} else if (numero1 > numero2) {
    console.log("O número " + numero1 + " é maior que o número " + numero2);
} else {
    console.log("Os números são iguais.");
}

// 18: Verifique se uma pessoa de 16 anos pode votar (16+ pode votar)
let idade4 = 16;

if (idade >= 18) {
    console.log("Voto obrigatório.");
} else if (idade >= 16) {
    console.log("Voto opcional.");
} else {
    console.log("Não pode votar.");
}

// 19: Verifique se o número 25 está entre 10 e 30
const numero7 = 25;

if (numero >= 10 && numero <= 30) {
    console.log("O número " + numero + " está entre 10 e 30.");
} else {
    console.log("O número " + numero + " não está no intervalo.");
}

// 20: Verifique se "sábado" é dia útil (segunda a sexta)
let dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
    console.log(dia + " não é um dia útil.");
} else {
    console.log(dia + " é um dia útil.");
}

// ==================== ATIVIDADES COM FUNÇÕES ====================

//21. Exiba a mensagem "Olá mundo" no console.
console.log("Olá Mundo");

//22. Crie uma variável com seu nome e exiba o valor no console.
let nome = "Matheus";
console.log(nome);

//23. Some dois números e exiba o resultado
let x = 5;
let y = 3;
console.log(x + y);

//24. Subtraia doi numeros e exiba o valor.
let subtraia = 50 - 29;
console.log(subtraia);

//25. escubra o resto da divisão de um numero por outro.
let resto = 27%18;
console.log(resto);

//26. Crie uma variável booleana(true false) e exiba o valor.
let bool = true;
console.log(bool);

//27. Verifique se um número é maior que outro e exiba o resultado.
if(50 - 29){
    console.log("É maior");
}

//28. Crie duas variáveis com algum valor e exiba a concatenação
par = 2;
impar = 1;

console.log('par + impar');

//29. Descubra o tipo de uma variável
console.log(typeof(par)); //typeof mostra o tipo da variável

//30. Converta um número para string
let numero = 10;
console.log(String(numero));

//31. Converta uma string para número
let texto = "123";
console.log(Number(texto));

//32. Exiba no console.log números de 0 a 10
for(i =0; i<=10; i++){
    console.log(i);
}

//33. Exiba apenas números pares até 20.
for(let i =0; i<=20; i+=2){
    console.log(i);
}

//34. Mostre no console número de 10 até 1
for(let i=10; i>=0; i--){
    console.log(i);
}

//35. Some números de 1 a 5.
let somaLoop =0;
for(let i=1; i<=5; i++){
    somaLoop+=i;
    console.log("valor de i" +i+ "valor de somaLoop" + somaLoop);
}
console.log(somaLoop);

//36. Faça a tabuada do 3.
for(i =0; i<=10; i++){
    console.log(i * 3);
}

//37. Conte quantos números são maiores que 5.
let lista = [2,6,8,1,3];
let cont = 0;
for(let i=0; i<lista.length;i++){
    if(lista[i]>5)cont++;
}
console.log(cont);

//38. Percorra a string letra por letra.
let palavra = "JFRS";
for(let i=0; i<palavra.length;i++){
    console.log(palavra[i]);
}

//39. Pare um loop quando encontrar o número 7 de 0 a 10.
for(i = 0; i <= 10; i++){
    if(i===7)break
    console.log(i);
}

//40. Crie uma função que exiba uma mensagem qualquer
function mensagem(){
    console.log("mensagem por function");
}
mensagem();

//41. Função que multiplica doi números.
function multiplica(){
    console.log(7 * 5);
}
multiplica();

//42. Crie uma função que verifica se é par ou impar.
function Verifique(x){
    if(x%2==0){
        return 'par'
    }
    else{
        return 'impar'
    };
}
console.log(Verifique(38))

//43. Crie uma função que retorne o dobro.
function dobrar(n){
    return n * 2;
}
console.log(dobrar(4));

//44. Crie uma função que some elementos de um array.
function somaArray(arr){
    total = 0;
    for(let i=0; i<arr.length; i++){
        total +=arr[i];
    }
    return total;
}
console.log(somaArray([38, 52, 79]));

//45. Verifique se o número 15 é positivo e exiba uma mensagem.
let num = 15;
if(numero > 0){
    console.log(`${num} é positivo`);
}

//46. Verifique se uma pessoa com 17 anos é maior de idade.
console.log("\n=== Maior ou menor de idade===");
let idade = 17;
if(idade>=18){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

// ==================== ATIVIDADES COM ARRAY ====================

//47. Crie um array com os números 10, 20, 30, 40 e exiba todos.
let array_numeros = [10, 20, 30, 40]
console.log(array_numeros)

//48. Crie um array com 5 nomes e exiba a primeira posição.
let nomes = ['Matheus', 'Joaquim', 'Eduardo', 'Gustavo', 'maicon']
console.log(nomes[0])

//49. Adicione o número 50 no final do array[10, 20, 30, 40].
let arr = [10,20,30,40];
arr.push(50);
console.log(arr);

//50. Remova o último elemento do array [1, 2, 3, 4, 5].
let arr2= [1, 2, 3, 4, 5];
arr2.pop(5);
console.log(arr2)

//51. Exiba quantos elementos tem o array [5, 10, 15, 20].
let arr3 = [5,10,15,20];
console.log(`Este array tem ${arr3.length} elementos`);

//52. Some todos os números do array [2, 4, 6, 8].
let arr4= [2,4,6,8];
soma = 0;
for(let i =0; i<arr4.length; i++){
    soma += arr4[i]
}
console.log(`A soma de todos os números do array [${arr4}] é ${soma}`)

// 53: Multiplique cada elemento do array [1, 2, 3, 4] por 2
let arrayNum5=[1,2,3,4];
let arrayNum5Mult=[];
for(let i=0;i<arrayNum5.length;i++){
   arrayNum5Mult.push(arrayNum5[i] * 2)
}
console.log(`o array [${arrayNum5}] multiplicado por 2, fica [${arrayNum5Mult}]`)

// 54. Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]
let frutas2 = ["maçã","banana","uva"]
for(let i=0;i<frutas2.length;i++){
    if(frutas2[i] === "laranja"){
        console.log("Laranja existe nesse array")
    } else {
        console.log("Laranja não existe nesse array")
    }
}

//55. Exiba um por um os elementos do array ["azul", "verde", "amarelo"].
let array5 = ["azul", "verde", "amarelo"];
for(let i=0; i<array5.length; i++){
    console.log(array5[i])
}

//56. Exiba o último elemento do array[100, 200, 300, 400, 500].
let arr5 = [100, 200, 300, 400, 500];
console.log(arr5[arr5.length - 1])

// ==================== ATIVIDADES COM MATRIZ ====================

//57. Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda.
let matriz1 = [
    [1, 2],
    [3, 4]
]

// 58: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]
let matriz2 = [
    [5, 6],
    [7, 8]
]
console.log(matriz2[0][1]);

// 59: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]
let matriz3 = [
    [1, 2, 3],
    [4, 5, 6]
];

for (let i = 0; i < matriz3.length; i++) {
    for (let j = 0; j < matriz3[i].length; j++) {
        console.log(`Elementos [${i}][${j}] = ${matriz3[i][j]}`);
    }
}

// 60: Some todos os números da matriz [[2, 4], [6, 8]]
let matriz4 = [
    [2, 4],
    [6, 8]
]
let somaMatriz = 0;
for(let i=0; i<matriz4.length; i++){
    for(let j=0; j<matriz4[i]. length; j++){
        somaMatriz = somaMatriz + matriz4[i][j];
    }
}
console.log(`Soma dos Elementos ${somaMatriz}`);

// 61: Crie uma matriz 3x3 com números de 1 a 9
let matriz5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 62: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]
let matriz6 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0; i<matriz6.length; i++){
    console.log(matriz6[i][i]);
}

// 63: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10
let matriz7 = [
    [1,2],
    [3,4]];
console.log("Antes", matriz7);
matriz7[0][1] = 10;
console.log("Depois", matriz7);

// 64: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]
let matriz8 = [
    [10, 20],
    [30, 40],
    [50, 60]
]
console.log(matriz8[0]);

// 65: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]
let matriz9 = [
    [1, 2],
    [3, 4],
    [5, 6]];
console.log("Primeira Coluna");
for(let i = 0; i<matriz9.length; i++){
    console.log(matriz9[i][0]);}

// 66: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2
let matriz10 = [
    [1, 2],
    [3, 4]
];
let resultadoMult = [];
for(let i = 0; i<matriz10.length; i++){
    resultadoMult[i] = [];
    for(let j = 0; j<matriz10[i].length; j++){
        resultadoMult[i][j] = matriz10[i][j] * 2;
    }
}
console.log("Original", matriz10);
console.log("Multiplicado", resultadoMult);

// ==================== ATIVIDADES COM OBJETOS ====================

// 67: Crie um objeto pessoa com nome "Ana" e idade 25
let pessoa = {
    Nome: "Ana",
    Idade: 25
};

// 68: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
let pessoa1 = {
    Nome: "Carlos",
    Cidade: "São Paulo"
};
console.log(pessoa1);

// 69: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
let pessoa2 = {
    Nome: "Maria",
    Idade: 20
}
console.log("Antes", pessoa2)
pessoa2.curso = "História"
console.log("Depois", pessoa2)

// 70: Altere a idade do objeto {nome: "João", idade: 18} para 19
let pessoa3 = {
    Nome: "João",
    Idade: 18
}
console.log("Antes", pessoa3)
pessoa3.Idade = 19
console.log("Depois" , pessoa3)

// 71: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}
let pessoa4 = {
    Nome: "Pedro",
    Telefone: "99999-9999"
}
console.log("Antes", pessoa4)
delete pessoa4.Telefone
console.log("Depois", pessoa4)

// 72: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}
let tenis = {
    marca: "Nike",
    tamanho: 42,
    cor: "preto"
}
for(let prop in tenis){
    console.log(`${prop}: ${tenis[prop]}`);
}

// 73: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"
let cachorro = {
    Nome: "Rex",
    latir: function(){
        console.log("AU! AU!");
    }
};
cachorro.latir();

// 74: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]
let aluno = {
    Nome:"Lucas",
    Notas: [8, 7, 9]
}
console.log(aluno);

// 75: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"
let carro = {
    Marca: "Fiat",
    Motor: "1.0"
}

// 76: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos
let arr6 = [
    Produto1 = {Nome: "Teclado", preco: 50.00},
    Produto2 = {Nome: "Monitor", preco: 150.00},
    Produto3 = {Nome: "Notebook", preco: 250.00}
]

// ==================== ATIVIDADES COM ForEach ====================

// 77: Mostrar Elementos.
{
let num2 = [1,2,3,4];
console.log("Usando o for");
for(let i=0; i<num2.length; i++){
    console.log(num2[i]);
}
console.log("Usando forEach");
num2.forEach(function(n){
    if(n % 2 ===0){
       console.log(n); 
    }
});

console.log("ForEach Arrow, modo seta");
num2.forEach(n => console.log(n));
}

// 78: Mostre todos o valores no terminal.
//dado do array: let frutas["Maçã", "Banana", "Uva", "Abacate"];
//Utilizar ForEach função anônima e função arrow.
{
let frutas = ["Maçã", "Banana", "Uva", "Abacate"];
console.log("Usando forEach");
frutas.forEach(function(n){
        console.log(n);
});

console.log("ForEach Arrow, modo seta");
frutas.forEach(n => console.log(n));
}

//79: Some todos os valores e mostr o resultado.
// Preço 10, 30, 50, 60:

{
let preco = [10, 30, 50, 60];
console.log("Usando forEach");

}