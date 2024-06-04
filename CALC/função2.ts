/* função com paremetro e sem retorno
     function(x:number):void{ ... }*/

     function sobreMim (saudacao:string, idade: number,
        lazer:string, profissao:string):void{
         console.log(`${saudacao}!!!
         tenho ${idade} gosto de ${lazer}
                      e tenho como profissao ${profissao}`);
                      
        }

        let saudacao:string = `Ola Mundo`;
        let idade: number = 112;
        let lazer: string = `assistir roberto carlos`;
        let profissao: string = `programador`;

        sobreMim (saudacao,idade,lazer,profissao);


        /* função sem parametro e sem retorno
                           function(): void { ... }*/

                           function oi (): void{
                            console.log(`Oi!!!!!!`);
               
                       }       
                       oi();
   
   
                       /* função sem parametro e com retorno
                          function nomeDafunção(): number { ... }*/
                       
                        function somaSemParametro (): number{
                            let soma: number = 5 + 5;
                            return soma;
                        }  
   
                        let res: number = somaSemParametro();
                        console.log(res);
                        //console.log(somaSemParametro());
   
   
                        /* função com parametro e com retorno
                           function somaSemParametro()(x:number): number { ... }
                       */
   
                           function idadePessoa (anoNascimento: number): number{
                               const dataAtual = new Date();
                                  const anoAtual = dataAtual.getFullYear();
                                  let idade: number = anoAtual - anoNascimento;
                                  return idade;
                                  
                           }
   
                           let anoNascimento: number = 1984;
   
                           let idade: number = idadePessoa(anoNascimento);
                           console.log(`idade da pessoa é ${idade}`);
                           //console.log(`idade da pessoa é ${idadePessoa(anoNascimento)}`);
   
   
   
                   
   
   
                           function incremento(x:number): number{
                               let y: number = x;
                               y++
                               return y
                           
                           }
                            let x: number =0;
                           
                            while(x < 5 ){
                                console.log(x);
                                x= incremento(x);
                                }
   
   
   
                           
                              
                                function decremento(x:number): number{
                                   let y: number = x;
                                   y--;
                                   return y
                               
                               }
   
                                 while(y >= 1){
                                   console.log(y);
                                     y = decremento(y);
   
                                 }
   
                                     
                           
                           
                           
   
   
                   






