var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var senha = parseInt(lines.shift());

while (senha != 2002){
    console.log('Senha Invalida');
    senha = parseInt(lines.shift());
}
if (senha == 2002){
    console.log('Acesso Permitido');
}