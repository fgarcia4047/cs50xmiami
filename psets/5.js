/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

	var amount;
	function drEvil(amount) {
  // write your solution here...
 	amount = prompt("How much money do you Demand Dr. Evil?")
  if (amount < 1000000000)
  {
  	console.log( "Dr.Evil " +amount+": $"+ amount+ " dollars");
  }
  else 
  {
  	console.log("Dr. Evil " +amount+": $" +amount+ " dollars (pinky)");
  }

};

drEvil(amount);
