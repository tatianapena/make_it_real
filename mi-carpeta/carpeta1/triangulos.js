var lado1=10
var lado2=10
var lado3=10

if(lado1 === lado2 && lado2 === lado3) {console.log("Es Equilatero")}
else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {console.log("Es Isóceles")}
else {console.log("Es Escaleno")}