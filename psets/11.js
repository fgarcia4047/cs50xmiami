/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
var bday = 1987;
var current = 2015;

function calculateAge(bday, current)
{
	var result0 = current - bday
	console.log ("You are either " + result0 + " or " + (result0 -1))
}

calculateAge(bday, current)

var bday1 = 1900;
var current1 = 2015;

function calculateAge1(bday, current)
{
	var result01 = current1 - bday1
	console.log ("You are either " + result01 + " or " + (result01 -1))
}

calculateAge(bday1, current1)

var bday2 = 1981;
var current2 = 2015;

function calculateAge2(bday, current)
{
	var result02 = current2 - bday2
	console.log ("You are either " + result02 + " or " + (result02 -1))
}

calculateAge2(bday, current)