var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var raio = parseFloat(lines.shift());
var pi = 3.14159;

var volume = (4.0/3)*pi*(raio**3);

console.log('VOLUME = ' + volume.toFixed(3));