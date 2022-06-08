var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var n = parseInt(lines.shift());
var ht = parseInt(lines.shift());
var vh = parseFloat(lines.shift());

var SALARIO = ht*vh;

console.log('NUMBER = ' + n);
console.log('SALARY = U$ ' + SALARIO.toFixed(2));