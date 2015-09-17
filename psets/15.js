/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...

var a =5; 
var b= 10; 
function greaterNumber(a, b) 
{
	/*for(var i = 0; i < 2 ; i++  )
		if (i = 0)
		{*/
			if (a > b)
			{
			console.log ("The greater number of " + a + " and " + b + " is " + a)
			}
			else 
			console.log("The greater number of " + a + " and " + b + " is " +b)
		}/*


		if (i = 1)
		{
			var a = a + 12
			var b = b + 18 
			if (a > b)
			{	
				console.log ("The greater number of " + a + " and " + b + " is " + a)
			}
			else 
				console.log("The greater number of " + a + " and " + b + " is " +b)

		}
		else 
			console.log("nothing not working")

}*/
greaterNumber(a,b);

var c = 40
var d = 49
function greaterNumber1(c,d)
{
	if (c > d)
			{
			console.log ("The greater number of " + c + " and " + d + " is " + c)
			}
			else 
			console.log("The greater number of " + c + " and " + d + " is " +d)
}

greaterNumber1(c, d)

