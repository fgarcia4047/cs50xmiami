/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/
var s = "bubble" ; 

function fixStart(s) {
  // write your solution here...
  var switch1 = s[0]; 
  console.log(switch1 + "<-- search term")
  for (i = 1; i < s.length; i++)
  {
  	if (s[i] == switch1) // Switch 1 variable is being understood. The 
  	{
  		s[i] = s[i].replace(s[i], "*"); 
  		console.log(s[i])
  		//console.log(s)
  	}
  	//console.log(s[i])
  }

  console.log(s)
}

fixStart(s)	