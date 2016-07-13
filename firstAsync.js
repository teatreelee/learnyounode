var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function(err, data){
	if (err){
		throw err;
	} else {
		var ans = data.toString().split('\n').length - 1;
		console.log(ans);
	}
})

//Official

     // var fs = require('fs')
     // var file = process.argv[2]

     // fs.readFile(file, function (err, contents) {
     //   // fs.readFile(file, 'utf8', callback) can also be used
     //   var lines = contents.toString().split('\n').length - 1
     //   console.log(lines)
     // })
