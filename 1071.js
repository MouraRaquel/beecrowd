var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var x = parseInt(lines.shift());
var y = parseInt(lines.shift());
var soma = 0

for (let i = (y + 1); i < x; i++){
    if (i % 2 != 0) soma+= i;
}

console.log(soma);
