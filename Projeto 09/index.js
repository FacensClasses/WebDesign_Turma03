'use strict'

const readline=require('readline-sync');

//Exercício 1
console.log("\nExercício 1:\n");

function anom(name,subname)
{
    return(name.concat(" ",subname));
}

let nome=readline.question("Digite o seu nome: ");
let sobrenome=readline.question("Digite o seu sobrenome: ");
let nomecompleto=anom(nome,sobrenome);

console.log(`\nSeu nome completo é: ${nomecompleto}`);

//Exercício 2
console.log("\nExercício 2:\n");

//Exercício 3
console.log("\nExercício 3:\n");

function soma(vet)
{
    let x,soma=0;
    for(x=0;x<5;x++)
        soma+=vet[x];
    return(soma);
}

let numeros=[10,20,30,40,50];

console.log(`A soma de todos os números do vetor é: ${soma(numeros)}.`)

//Exercício 4
console.log("\nExercício 4:\n");

function impares(num,impar)
{
    let x;
    for(x=0;x<10;x++)
        if(num[x]=='1'||num[x]=='3'||num[x]=='5'||num[x]=='7'||num[x]=='9')
            impar[x]=num[x];
    return impar;
}

numeros=['1','3','5','7','9'];
let impar=[];

console.log(`Os números impares são: ${impares(numeros,impar)}.`);

//Exercício 5
console.log("\nExercício 5:\n");

let cidades=["Sorocaba","Piedade","Votorantim"];
let nova_cidade=readline.question("Digite uma nova cidade para inserir no array: ");

cidades.unshift(nova_cidade);
cidades.pop();

console.log(`\n${cidades}`);

//Exercício 6
console.log("\nExercício 6:\n");

function mostra(name,age,curse,mat)
{
    console.log("\nInformações do aluno:");
    console.log(`Nome do aluno: ${name}`);
    console.log(`Idade do aluno: ${age}`);
    console.log(`Curso do aluno: ${curse}`);
    console.log(`Status matricula do aluno: ${mat}`);
}

let aluno= 
{
    nome: readline.question("Digite o seu nome: "),
    idade: readline.question("Digite a sua idade: "),
    curso: readline.question("Digite o seu Curso: "),
    matricula: readline.question("Status da matricula(0(true), 1(false)): ") === '0'
};

mostra(aluno.nome,aluno.idade,aluno.curso,aluno.matricula);

//Exercício 7
console.log("\nExercício 7:\n");

function encontraMaiorNumero(num)
{
    let maior=num[0];
    for(x=1;x<num.length;x++)
        if(num[x]>maior)
            maior=num[x];
    return(maior);
}

let verf,x=1;
numeros=[];

do
{
    let numero=parseFloat(readline.question(`Digite o ${x} número: `));
    numeros.push(numero);
    verf=readline.question("\nDeseja inserir + um número(pressione 1 para continuar...): ");
    x++;
}while(verf==1)

console.log(`\n\nO maior número do vetor é: ${encontraMaiorNumero(numeros)}.`);

//Exercício 8
console.log("\nExercício 8:\n");

let produto=
{
    nome: readline.question("Digite o nome do produto: "),
    preco: parseFloat(readline.question("Digite o preço do produto: ")),
    quantidade: parseInt(readline.question("Digite a quantidade de produtos do mesmo tipo: ")),
    calcularTotal: function () {return(this.preco*this.quantidade);}
};

console.log(`\nO preço total dos produtos "${produto.nome}" é: ${produto.calcularTotal()}.`)

//Exercício 9
console.log("\nExercício 9:\n");

let endereco=
{
    rua: readline.question("Digite o nome da sua rua: "),
    numero: readline.question("Digite o número de sua rua: "),
    bairro: readline.question("Digite o nome de seu bairro: "),
    cidade: readline.question("Digite o nome sua cidade: "),
};

console.log("\nDados do Endereço:")
for(let chave in endereco)
{
    console.log(`${chave}: ${endereco[chave]}`);
}

//Exercício 10
console.log("\nExercício 10:\n");

function mostra(name, age, curse, mat) 
{
    console.log("\nInformações do aluno:");
    console.log(`Nome do aluno: ${name}`);
    console.log(`Idade do aluno: ${age}`);
    console.log(`Curso do aluno: ${curse}`);
    console.log(`Status matrícula do aluno: ${mat}`);
}

let y=readline.question("Digite a quantidade de alunos: ")

function alunosMaior(alunos) 
{
    return alunos.filter(aluno=>aluno.idade>18);
}

let listaAlunos=[];

for (let i=0;i<y;i++) 
{
    console.log(`\nDigite os dados do aluno ${i+1}: `);

    let aluno_= 
    {
        nome: readline.question("Digite o seu nome: "),
        idade: parseInt(readline.question("Digite a sua idade: ")), 
        curso: readline.question("Digite o seu Curso: "),
        matricula: readline.question("Status da matrícula (0(true), 1(false)): ") === '0'
    };

    listaAlunos.push(aluno_);
    mostra(aluno_.nome,aluno_.idade,aluno_.curso,aluno_.matricula);
}

let alunosMaiorDeIdade=alunosMaior(listaAlunos);

console.log("\nAlunos com mais de 18 anos:");
alunosMaiorDeIdade.forEach(a=>mostra(a.nome,a.idade,a.curso,a.matricula));

console.log("\n\n███████╗██╗   ██╗███████╗");
console.log("██╔════╝██║   ██║██╔════╝");
console.log("███████╗██║   ██║███████╗");
console.log("╚════██║██║   ██║╚════██║");
console.log("███████║╚██████╔╝███████║");
console.log("╚══════╝ ╚═════╝ ╚══════╝\n");
                                                            
console.log("░░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄░░░░░░░\n");
console.log("░░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄░░░░\n");
console.log("░░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█░░░\n");
console.log("░░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█░░\n");
console.log("░▄▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░░█░\n");
console.log("█░▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒░█\n");
console.log("█░▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█\n");
console.log("░█░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█░\n");
console.log("░░█░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█░░\n");
console.log("░░░█░░░░██░░▀█▄▄▄█▄▄█▄████░█░░░\n");
console.log("░░░░█░░░░▀▀▄░█░░░█░█▀██████░█░░\n");
console.log("░░░░░▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█░░\n");
console.log("░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░▒░░░█░\n");
console.log("░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░░░░█░\n");
console.log("░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░░░░█░░\n");