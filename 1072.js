var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var n = parseInt(lines.shift());
var dentro = 0;
var fora = 0;

for (var i = 0; i < n; i++){
    var valor = parseInt(lines.shift());
    if (valor >= 10 && valor <= 20){
        dentro +=1;
    }else{
        fora +=1;
    }
}

console.log(dentro + ' in');
console.log(fora + ' out');