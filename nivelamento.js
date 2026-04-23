//Matheus Gonçalves Fernandes 3°TEC

//1. Exiba a mensagem "Olá mundo" no console.
console.log("Olá Mundo");

//2. Crie uma variável com seu nome e exiba o valor no console.
let nome = "Matheus";
console.log(nome);

//3. Some dois números e exiba o resultado
let x = 5;
let y = 3;
console.log(x + y);

//4. Subtraia doi numeros e exiba o valor.
let subtraia = 50 - 29;
console.log(subtraia);

//5. escubra o resto da divisão de um numero por outro.
let resto = 27%18;
console.log(resto);

//6. Crie uma variável booleana(true false) e exiba o valor.
let bool = true;
console.log(bool);

//7. Verifique se um número é maior que outro e exiba o resultado.
if(50 - 29){
    console.log("É maior");
}

//8. Crie duas variáveis com algum valor e exiba a concatenação
par = 2;
impar = 1;

console.log('par + impar');

//9. Descubra o tipo de uma variável
console.log(typeof(par)); //typeof mostra o tipo da variável

//10. Converta um número para string
let numero = 10;
console.log(String(numero));

//11. Converta uma string para número
let texto = "123";
console.log(Number(texto));

//12. Exiba no console.log números de 0 a 10
for(i =0; i<=10; i++){
    console.log(i);
}

//13. Exiba apenas números pares até 20.
for(let i =0; i<=20; i+=2){
    console.log(i);
}

//14. Mostre no console número de 10 até 1
for(let i=10; i>=0; i--){
    console.log(i);
}

//15. Some números de 1 a 5.
let somaLoop =0;
for(let i=1; i<=5; i++){
    somaLoop+=i;
    console.log("valor de i" +i+ "valor de somaLoop" + somaLoop);
}
console.log(somaLoop);

//16. Faça a tabuada do 3.
for(i =0; i<=10; i++){
    console.log(i * 3);
}

//17. Conte quantos números são maiores que 5.
let lista = [2,6,8,1,3];
let cont = 0;
for(let i=0; i<lista.length;i++){
    if(lista[i]>5)cont++;
}
console.log(cont);

//18. Percorra a string letra por letra.
let palavra = "JFRS";
for(let i=0; i<palavra.length;i++){
    console.log(palavra[i]);
}

//19. Pare um loop quando encontrar o número 7 de 0 a 10.
for(i = 0; i <= 10; i++){
    if(i===7)break
    console.log(i);
}

//20. Crie uma função que exiba uma mensagem qualquer
function mensagem(){
    console.log("mensagem por function");
}
mensagem();

//21. Função que multiplica doi números.
function multiplica(){
    console.log(7 * 5);
}
multiplica();

//22. Crie uma função que verifica se é par ou impar.
function Verifique(x){
    if(x%2==0){
        return 'par'
    }
    else{
        return 'impar'
    };
}
console.log(Verifique(38))

//23. Crie uma função que retorne o dobro.
function dobrar(n){
    return n * 2;
}
console.log(dobrar(4));

//24. Crie uma função que some elementos de um array.
function somaArray(arr){
    total = 0;
    for(let i=0; i<arr.length; i++){
        total +=arr[i];
    }
    return total;
}
console.log(somaArray([38, 52, 79]));

//25. Verifique se o número 15 é positivo e exiba uma mensagem.
let num = 15;
if(numero > 0){
    console.log(`${num} é positivo`);
}

//26. Verifique se uma pessoa com 17 anos é maior de idade.
console.log("\n=== Maior ou menor de idade===");
let idade = 17;
if(idade>=18){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

//27. Crie um array com os números 10, 20, 30, 40 e exiba todos.
let array_numeros = [10, 20, 30, 40]
console.log(array_numeros)

//28. Crie um array com 5 nomes e exiba a primeira posição.
let nomes = ['Matheus', 'Joaquim', 'Eduardo', 'Gustavo', 'maicon']
console.log(nomes[0])

//29. Adicione o número 50 no final do array[10, 20, 30, 40].
let arr = [10,20,30,40];
arr.push(50);
console.log(arr);

//30. Remova o último elemento do array [1, 2, 3, 4, 5].
let arr2= [1, 2, 3, 4, 5];
arr2.pop(5);
console.log(arr2)

//31. Exiba quantos elementos tem o array [5, 10, 15, 20].
let arr3 = [5,10,15,20];
console.log(`Este array tem ${arr3.length} elementos`);

//32. Some todos os números do array [2, 4, 6, 8].
let arr4= [2,4,6,8];
soma = 0;
for(let i =0; i<arr4.length; i++){
    soma += arr4[i]
}
console.log(`A soma de todos os números do array [${arr4}] é ${soma}`)

// 33: Multiplique cada elemento do array [1, 2, 3, 4] por 2
let arrayNum5=[1,2,3,4];
let arrayNum5Mult=[];
for(let i=0;i<arrayNum5.length;i++){
   arrayNum5Mult.push(arrayNum5[i] * 2)
}
console.log(`o array [${arrayNum5}] multiplicado por 2, fica [${arrayNum5Mult}]`)

// 34. Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]
let frutas2 = ["maçã","banana","uva"]
for(let i=0;i<frutas2.length;i++){
    if(frutas2[i] === "laranja"){
        console.log("Laranja existe nesse array")
    } else {
        console.log("Laranja não existe nesse array")
    }
}

//35. Exiba um por um os elementos do array ["azul", "verde", "amarelo"].
let array5 = ["azul", "verde", "amarelo"];
for(let i=0; i<array5.length; i++){
    console.log(array5[i])
}

//36. Exiba o último elemento do array[100, 200, 300, 400, 500].
let arr5 = [100, 200, 300, 400, 500];
console.log(arr5[arr5.length - 1])

// ==================== ATIVIDADES COM MATRIZ ====================

//37. Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda.
let matriz1 = [
    [1, 2],
    [3, 4]
]

// 38: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]
let matriz2 = [
    [5, 6],
    [7, 8]
]
console.log(matriz2[0][1]);

// 39: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]
let matriz3 = [
    [1, 2, 3],
    [4, 5, 6]
];

for (let i = 0; i < matriz3.length; i++) {
    for (let j = 0; j < matriz3[i].length; j++) {
        console.log(`Elementos [${i}][${j}] = ${matriz3[i][j]}`);
    }
}

// 40: Some todos os números da matriz [[2, 4], [6, 8]]
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

// 41: Crie uma matriz 3x3 com números de 1 a 9
let matriz5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 42: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]
let matriz6 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0; i<matriz6.length; i++){
    console.log(matriz6[i][i]);
}

// 43: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10


// 44: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]
let matriz8 = [
    [10, 20],
    [30, 40],
    [50, 60]
]
console.log(matriz8[0]);

// 45: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]
let matriz9 = [
    [1, 2],
    [3, 4],
    [5, 6]
]

// 46: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2
let matriz10 = [
    [1, 2],
    [3, 4]
]
