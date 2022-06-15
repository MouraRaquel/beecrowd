var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var tg = parseInt(lines.shift());
var vm = parseInt(lines.shift());

var ql = (tg*vm)/12;

console.log(ql.toFixed(3));