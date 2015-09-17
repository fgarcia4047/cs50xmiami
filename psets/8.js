/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/
var word = "swiming";
function verbing(word)

	{
		//console.log(word.length)
		if(word.length >= 3 && word.substring((word.length - 3),word.length) === "ing") // THIS PART NOT WORKING, NO IDEA WHY !?!?!?
		{

			console.log(word + "ly")
		}
		else
		{
		//console.log(word.substring(word.length -2 , word.length))
		//console.log(word.substring(4,7))
		console.log(word + "ing")


		}

	}
	
  // write your solution here...


verbing(word);