var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var nome = lines.shift();
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var receber = (vendas*0.15) + salario;

console.log('TOTAL = R$ ' + receber.toFixed(2));
