var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var line = lines.shift().split(' ');
var t1 = parseFloat(line[0]);
var t2 = parseFloat(line[1]);
var t3 = parseFloat(line[2]);
var t4 = parseFloat(line[3]);

var ti = (t1 + t2 + t3 + t4) - 3;

console.log(ti);