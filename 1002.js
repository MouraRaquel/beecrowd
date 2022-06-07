var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var raio = parseFloat(lines.shift());

var area = 3.14159*(raio**2)
   
console.log('A=' + area.toFixed(4));