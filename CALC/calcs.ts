function saudacao ():void{
    console.log (`ola mundo!!`);
}

function soma (n1: number, n2: number): void{
    console.log (n1 + n2);
}

function subtracao (n1: number,n2:number):number{
    return n1-n2;
}

const teclado = require(`prompt-sync`)();

let numeroUm: number = parseInt(teclado(`digite o primeiro numero: `));
let numeroDois: number = parseInt(teclado(`digite o segundo numero`));

saudacao(); //funcao sem parametro e sem retorno

soma(numeroUm, numeroDois); // funcao com parametro e sem retorno