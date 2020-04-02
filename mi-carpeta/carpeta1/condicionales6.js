var horas = 45
var salarioxhora = 2000
var salario = horas * salarioxhora
var horasextras = horas-40
var costodehorasextras=salarioxhora * 1.5
var salariototal= salario + horasextras*(salarioxhora *0.5)

if(horas<=40){
    console.log("total horas " + horas);
    console.log("valor hora " + salarioxhora);
    console.log("total devengado" + salario);
}
else {
    console.log("total horas " +horas);
    console.log("valor hora " +salarioxhora);
    console.log("total ordinario "+40*salarioxhora);
    console.log("horas extras "+ (horas-40));
    console.log("recargo por horas extra "+costodehorasextras);
    console.log("Total recargo por horas extra "+ (horasextras*costodehorasextras));
    console.log("total devengado "+ salariototal);
}