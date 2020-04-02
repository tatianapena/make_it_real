var precio=200000;
var cantidad=3;
var totalventa=precio * cantidad;
var descuento=totalventa * 0.2;
var descuento2=totalventa * 0.1;
var valorfinalventa=totalventa - descuento;
var valorfinalventa2=totalventa - descuento2;

if(totalventa > 877803)
{
    console.log("Total antes de decuento: " + totalventa);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorfinalventa);}
else {
    console.log("Total antes de decuento: " + totalventa);
console.log("Valor del descuento: " + descuento2);
console.log("Total a pagar: " + valorfinalventa2);}
