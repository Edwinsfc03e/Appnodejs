// const  num1=  2;
// const num2= 10;
//  let sum= num1+num2;
//  console.log(`la suma entre ${num1} y ${num2} es ${sum}`);
const sumar=(num1,num2)=>{
    let suma = num1+num2;
    console.log (`la suma entre ${num1} y ${num2} es ${suma}`);
 }
 const restar=(num1,num2)=>{
    let resta = num1-num2;
    console.log (`la resta entre ${num1} y ${num2} es ${resta}`);
 }
 const multiplicar=(num1,num2)=>{
    let multiplica = num1*num2;
    console.log (`la resta entre ${num1} y ${num2} es ${multiplica}`);
 }
 const dividir=(num1,num2)=>{
    let divide = num1/num2;
    console.log (`la divicion entre ${num1} y ${num2} es ${divide}`);
 }
 const raiz=(num1,num2)=>{
    let raiz = Math.sqrt(num1)
    console.log (`la raiz de ${num1} =  ${raiz}`);
 }

 //  sum(5,3); 
 exports.suma=sumar
 exports.resta=restar
 exports.multiplica=multiplicar
 exports.divide=dividir
 exports.raiz=raiz

 