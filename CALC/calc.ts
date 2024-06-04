let opcao: string = ``;
do{
    const teclado = require(`prompt-sync`)();

    console.log(`qual operacao deseja? digite:`);
    console.log(`+ --> adição`);
    console.log(`- --> subtração`);
    console.log(`* --> multiplicação`);
    console.log(`/ --> divisão`);
    console.log(`s --> sair`);
}
 
     let opcao: string = teclado(`digite a opcao desejada`);

    //console.clear();

    let numeroUm: number= 0;
    let numeroDois: number= 0;
    let resultado: number= 0;

    if(opcao == `+`){
        numeroUm = parseInt(teclado(`digite o 1 numero: `));
        numeroDois= parseInt(teclado(`digite o 2 numero`));
        resultado = numeroUm + numeroDois;
        console.log(`o valor da soma de ${numeroUm} com ${numeroDois}`);
        console.log(`é ${resultado}`);
    }

    else{
        console.log(`algo deu errado!!`);
    }

    console.clear();

    console.log(`para continuar digite`);
    console.log(`0 - sair`);
    console.log(`1 - continuar`);
    inOut = parseInt(teclado(`digite a opcao: `));

} while (inOut != 0);


console.log(`fim de programa...`);


    