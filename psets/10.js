/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function Fortune(numChildren, partnerName, geoLocal, jobTitle)
{
var numChildren = 2;

var partnerName = "Taylor Swift";

var geoLocal = "Miami";

var jobTitle = "Hacker";

console.log("You will be a "+ jobTitle+ " in " + geoLocal + ", and married\
 to " + partnerName + " with " + numChildren+ " kids.");
};

Fortune();

function Fortune1(numChildren, partnerName, geoLocal, jobTitle)
{
var numChildren = 3;

var partnerName = "Amanda Swift";

var geoLocal = "Boston";

var jobTitle = "Jordan";

console.log("You will be a "+ jobTitle+ " in " + geoLocal + ", and married\
 to " + partnerName + " with " + numChildren+ " kids.");
};

Fortune1();



