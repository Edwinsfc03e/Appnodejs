/*const sumar = require(`./ejercicio1.js`);
console.log(sumar.suma(2,5));


const restar =require(`./ejercicio1.js`);
console.log(restar.resta(5,7));


const multiplicar =require(`./ejercicio1.js`);
console.log(multiplicar.multiplica(5,7));


const dividir =require(`./ejercicio1.js`);
console.log(dividir.divide(5,7));

const raiz =require(`./ejercicio1.js`);
console.log(raiz.raiz(9));*/
const http=require(`http`)
function handleServer(req,res){
    res.writeHead(200,{"content-type":"text-html"})
res.write(`<h1>esta es la respuestaaa del servidor</h1>`)
res.end()   
}
const server=http.createServer(handleServer).listen(5000)