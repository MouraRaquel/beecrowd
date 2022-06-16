var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var tempo = parseInt(lines.shift());

var anos = Math.floor(tempo/365);
var meses = Math.floor((tempo%365)/30);
var dias = Math.floor((tempo%365)%30);
console.log(anos + ' ano(s)');
console.log(meses + ' mes(es)');
console.log(dias + ' dia(s)');