let HT; // horas trabalhadas
let VH; // valor hora
let PD; // percentual de desconto
let TD; // total de desconto
let SB; // salário bruto
let SL; // salário líquido

HT = prompt('Digite as horas trabalhadas: ', 'Informe aqui.'); 
VH = prompt('entre com o valor da hora:' , 'Informe aqui.');
PD = prompt('Informe o percentual de desconto:', 'em porcentagem')
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD;

document.write('Salário =' , SL);