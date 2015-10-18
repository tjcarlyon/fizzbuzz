// var count=1;
// while (count<=100)
// {
// 	console.log(count);
// 	count=count+1;
// }
$(document).ready(function() {
	for (i = 1; i <= 100; i++) { 
		if	(i % 3 === 0 && i % 5 === 0) {
			console.log("fizzbuzz");
			$('.results').append('<li>fizzbuzz</li>');
		}
		else if (i % 3 === 0 ) {
			console.log("fizz");
			$('.results').append('<li>fizz</li>');
		}
		// if the number is divisible by 5 write buzz
		else if (i % 5 === 0) {
			console.log("buzz");
			$('.results').append('<li>buzz</li>');
		}
	    // if not write out the number
	    else {
			console.log(i);
			$('.results').append('<li>' + i + '</li>');
		}
	}
});

// if its divisibleby both 3 and 5 write fizzbuzz
// 
// if	(i%3===0 && i%5===0)
// 	{
// console.log("fizzbuzz");
// }
// //if not write out number
// else {
// 	console.log(i);
// }



