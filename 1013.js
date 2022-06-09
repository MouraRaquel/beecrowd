var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var a = lines.shift().split(' ');

var A = parseInt(a[0]);
var B = parseInt(a[1]);
var C = parseInt(a[2]);

if (A > B && A > C) {
	console.log(A + ' eh o maior');
} else if (B > C) {
	console.log(B + ' eh o maior');
} else {
	console.log(C + ' eh o maior');
}