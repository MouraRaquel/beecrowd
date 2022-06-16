var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var n = parseInt(lines.shift());

var segundos = n%60;
var minutos = (Math.floor(n/60))%60;
var horas = Math.floor(n/3600);
console.log(horas + ':' + minutos + ':' + segundos);