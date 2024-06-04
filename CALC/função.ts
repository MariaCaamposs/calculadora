function concatenar (palavra1: string, palavra2: string): void{
    console.log(`Concatenando ${palavra1} e ${palavra2}`);
    console.log(`Resultado ${palavra1+palavra2}`);
}

function calcularMedia (n1: number, n2:number) :number{
     let media: number = (n1+n2)/2;
    return media;
}

//use um laço de repetição e melhore o codigo abaixo e complete a tabuada
function tabUada (tabuada: number): void{
    let cont: number = 0;

    while(cont < 11){
        console.log(`${tabuada} x ${cont} = ${tabuada*cont}`);
        cont++;
    }
    
   
}

const teclado = require (`prompt-sync`)();

let palavra1: string = teclado(`Digite a palavra um a ser concatenada`);
let palavra2: string = teclado(`Digite a palavra dois a ser concatenada`);

concatenar(palavra1,palavra2);

let n1: number = parseInt(teclado(`Digite o valor na N1:`));
let n2: number = parseInt(teclado(`Digite o valor na N2`));

let resultado: number = calcularMedia(n1,n2);
console.log(`O resultado da media é ${resultado}`);

let tabuada: number = parseInt(teclado(`Digite a tabuada desejada: `));

tabUada(tabuada);
