var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var x = parseInt(lines.shift());
var y = parseFloat(lines.shift());

var cm = x/y;

console.log(cm.toFixed(3) + ' km/l');