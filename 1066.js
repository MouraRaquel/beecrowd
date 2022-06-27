var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let par = 0
let impar = 0
let pos = 0
let neg = 0

for (i = 0;  i < 5; i++){
    let n = parseInt(lines.shift());
    if (n%2 == 0){
        par += 1
    }       
    else{
        impar += 1
    }
        
    if (n > 0 && n != 0){
        pos += 1
    }
        
    if (n < 0 && n != 0){
        neg += 1
    }
        
}

console.log(par + ' valor(es) par(es)');
console.log(impar + ' valor(es) impar(es)');
console.log(pos + ' valor(es) positivo(s)');
console.log(neg + ' valor(es) negativo(s)');

