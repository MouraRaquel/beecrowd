var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var n = parseInt(lines.shift());
var valor = n;

var cem = Math.floor(valor / 100);
valor -= cem * 100
var cinquenta = Math.floor(valor / 50);
valor -= cinquenta * 50
var vinte = Math.floor(valor / 20);
valor -= vinte * 20
var dez = Math.floor(valor / 10);
valor -= dez * 10
var cinco = Math.floor(valor / 5);
valor -= cinco * 5
var dois = Math.floor(valor / 2);
valor -= dois * 2
var um = valor

console.log(n);
console.log(cem + ' nota(s) de R$ 100,00');
console.log(cinquenta + ' nota(s) de R$ 50,00');
console.log(vinte + ' nota(s) de R$ 20,00');
console.log(dez + ' nota(s) de R$ 10,00');
console.log(cinco + ' nota(s) de R$ 5,00');
console.log(dois + ' nota(s) de R$ 2,00');
console.log(um + ' nota(s) de R$ 1,00');

