var fs = require('fs');
var file = process.argv.slice(2).toString();


var content = fs.readFile(file,'utf8',function(err,contents){
  if(err === true){
     console.log("error");
  }else{
     var newLines = contents.split("\n").length;
     console.log(newLines-1);
  };
});

