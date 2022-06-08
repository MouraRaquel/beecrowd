var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var a = lines.shift().split(' ');
var a1 = parseInt(a[1]);
var a2 = parseFloat(a[2]);

var b = lines.shift().split(' ');
var b1 = parseInt(b[1]);
var b2 = parseFloat(b[2]);

var valor = (a1 * a2) + (b1 * b2);
console.log('VALOR A PAGAR: R$ ' + valor.toFixed(2));

