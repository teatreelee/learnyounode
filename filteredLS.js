var fs = require('fs');
var path = require('path');
var filename = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(filename, function(err, list){
	if (err){
		throw err;
	} else {
		for (var i = 0; i < list.length;i++){
			 if (path.extname(list[i]) === ext){
				console.log(list[i]);
			 }
		}
	}
})

//Official solution

   // var fs = require('fs')
   //   var path = require('path')

   //   var folder = process.argv[2]
   //   var ext = '.' + process.argv[3]

   //   fs.readdir(folder, function (err, files) {
   //     if (err) return console.error(err)
   //     files.forEach(function(file) {
   //         if (path.extname(file) === ext) {
   //             console.log(file)
   //         }
   //     })
   //   })
