var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var a = lines.shift().split(' ');

var A = parseFloat(a[0]);
var B = parseFloat(a[1]);
var C = parseFloat(a[2]);

var pi = 3.14159;

console.log('TRIANGULO: ' + ((A*C) / 2).toFixed(3));
console.log('CIRCULO: ' + (pi*(C**2)).toFixed(3));
console.log('TRAPEZIO: ' + (((A+B)*C)/2).toFixed(3));
console.log('QUADRADO: ' + (B**2).toFixed(3));
console.log('RETANGULO: ' + (A*B).toFixed(3));