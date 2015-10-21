≈var fs = require('fs');
var file = process.argv.slice(2).toString();

var contents = fs.readFileSync(file);
var newLines = contents.toString().split("\n").length;

console.log(newLines-1);
