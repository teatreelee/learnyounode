// Write a program that accepts one or more numbers as command-line arguments
//   and prints the sum of those numbers to the console (stdout).


//Access command-line arguments via the global process object(process.argv). 
//The process object has an argv property which is an array containing the

//node program.js 1 2 3 => [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
	//NOTE 1: The first element of the process.argv array
	//is always 'node', and the second element is always the path to your
  	//program.js file.

  	//NOTE 2: All elements are alwaasy strings


var sum = 0;
for (var i = 2; i < process.argv.length; i++){
	sum += +process.argv[i];
}
console.log(sum);