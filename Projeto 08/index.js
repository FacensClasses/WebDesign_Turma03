"use strict"

const readline = require('readline-sync');

// exercício 1
console.log("\nExercício 1:\n");

let y=4, z=2;

console.log(`A soma entre ${y} e ${z} é: ${y+z}`);
console.log(`A subtraçao entre ${y} e ${z} é: ${y-z}`);
console.log(`A multiplicaçao entre ${y} e ${z} é: ${y*z}`);
console.log(`A divisao entre ${y} e ${z} é: ${y/z}`);

// exercício 2
console.log("\nExercício 2:\n");

let vetor="", x;
for(x=1;x<=100;x+=2)
    vetor += x + " ";

console.log(`Numeros Impares: ${vetor}`);

// exercício 3
console.log("\nExercício 3:\n");

let frase="Disciplina de Programação para web";

console.log(`A quantidade de caracteres na frase é de: ${frase.length}`);

// exercício 4
console.log("\nExercício 4:\n");

let nome = "Lucas Siqueira Sene";

nome=(nome.replace(" Siqueira ",".").concat("@facens.br").toLocaleLowerCase());
console.log(nome);

// exercício 5
console.log("\nExercício 5:\n");

let i, numeros="";
    for(i=1;i<=10;i++)
        numeros += i + "-";

console.log(numeros.slice(0, 20));

// exercício 6
console.log("\nExercício 6:\n");

function dobro(x)
{
    if(x<=0)
        console.log("Só é aceito números positivos maiores que zero.");
    else
    {
        let resultado = x*2;
        console.log(`O dobro de ${x} é: ${resultado}`);
    }
}

let numero = readline.question("Digite um numero: ");

dobro(numero);

// exercício 7
console.log("\nExercício 7:\n");

function inverte(frase)
{
    return frase.split('').reverse().join('');
}

let texto=readline.question("Digite uma frase: ");

console.log(`Frase invertida: ${inverte(texto)}`);

// exercício 8
console.log("\nExercício 8:\n");

i=0;

function vogais(frase, cont)
{
    let x;
    for(x=0;x<frase.length;x++)
        if(frase[x] == 'a' || frase[x] == 'e' || frase[x] == 'i' || frase[x] == 'o' || frase[x] == 'u')
            cont++;
    return cont;
}

texto=readline.question("Digite uma frase: ");
console.log(`Quantidade de vogais: ${i=vogais(texto,i)}`);

// exercício 9
console.log("\nExercício 9:\n");

function verifica(mail)
{
    let x, position=0, check=0;
    for(x=0;x<mail.length;x++)
    {
        if(mail[x]=='@')
            position=x;
    }
    if(position==0)
        return false;
    else
        for(x=position;x<mail.length;x++)
            if(mail[x]=='.')
                check=1;
    if(check==1)
        return true;
    else
        return false;                
}

let email;
email=readline.question("Digite o seu email: ");

console.log(`Status do email: ${verifica(email)}`);

// exercício 10
console.log("\nExercício 10:\n");

function palindromo(check)
{
    let x, y=check.length-1, isPalindromo=true;
    for(x=0;x<check.length;x++,y--)
        if(check[x] != check[y])
            isPalindromo=false;
    if(isPalindromo)
        console.log("A frase digitada é um palindromo!\n");
    else
        console.log("A frase digitada não é um palindromo!\n");
}

frase=readline.question("Digite uma frase: ");

palindromo(frase);

console.log("███████╗ █████╗ ███████╗██╗   ██╗");
console.log("██╔════╝██╔══██╗██╔════╝╚██╗ ██╔");
console.log("█████╗  ███████║███████╗ ╚████╔╝");
console.log("██╔══╝  ██╔══██║╚════██║  ╚██╔╝");
console.log("███████╗██║  ██║███████║   ██║");
console.log("╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝");