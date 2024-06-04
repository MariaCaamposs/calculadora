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