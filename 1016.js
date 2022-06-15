var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var dist = parseInt(lines.shift());

console.log(dist*2 + ' minutos');