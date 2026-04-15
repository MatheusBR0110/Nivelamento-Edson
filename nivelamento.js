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

//26. verifique se uma pessoa com 17 anos é maior de idade.
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