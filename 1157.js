var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var n = parseInt(lines.shift());
var x = n;

while (x != 0){
    var div = n/x;
    if (n%x == 0){
        console.log(parseInt(div));
    }
    x = x - 1;
}
