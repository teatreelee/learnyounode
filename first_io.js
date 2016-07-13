//DIRECTIONS
	 // Write a program that uses a single synchronous filesystem operation to
  // read a file and print the number of newlines (\n) it contains to the
  // console (stdout), similar to running cat file | wc -l.

 var fs = require('fs'); //loads filesystem operation module on Node

 //synchronous = blocking

var filename = process.argv[2];

file = fs.readFileSync(filename);//returns a buffer object containing contents ofthe file

 var str = file.toString().split('\n').length - 1;
 console.log(str);