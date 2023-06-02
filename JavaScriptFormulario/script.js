let valor1;
let valor2;
let resultado;
function Somar() {
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Preencha todos os campos")
    } else {
        resultado = parseInt(valor1) + parseInt(valor2);
        alert("O Resultado da Soma é " + resultado);
    }
}
function Sub() {
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Preencha todos os campos")
    } else {
        resultado = parseInt(valor1) - parseInt(valor2);
        alert("O Resultado da Subtração é " + resultado);
    }
}
function Mult() {
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Preencha todos os campos")
    } else {
        resultado = parseInt(valor1) * parseInt(valor2);
        alert("O Resultado da Multiplicação é " + resultado);
    }
}
function Div() {
    valor1 = document.getElementById('pvalor1').value;
    valor2 = document.getElementById('pvalor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Preencha todos os campos")
    } else if(valor2==0){ 
        alert("não podemos dividir por ZERO")
    }else{
        resultado = parseInt(valor1) / parseInt(valor2);
        alert("O Resultado da Divisão é " + resultado);
    }
}