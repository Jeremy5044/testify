function fizz (num) {
 if (num % 15 ===0) {
 	return "fizzBuzz";
 }else if (num % 5 ===0){
 	return "buzz";
 }else if(num % 3===0){
 	return "fizz";
 }
 return num;
  
};

function fizzBuzz (start, end) {
	for(var i=start;i<end;i++){
		console.log(fizz(i))
	}
};

export { fizz };
