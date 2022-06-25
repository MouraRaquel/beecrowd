var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var x = lines.shift().split(' ');

function sortfunction(a, b){
    return (a - b)
}

let nums = [...x];
x.sort(sortfunction);

for (let i = 0; i < 3; ++i) {
  console.log(x[i]);
}
console.log();
for (let i = 0; i < 3; ++i) {
  console.log(nums[i]);
}