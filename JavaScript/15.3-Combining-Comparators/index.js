prompt("What is your name?");
prompt("What's their name?");

var loveScore = Math.random() * 100; //floating-point 0 up to 1
loveScore = Math.floor(loveScore) + 1 //1-100

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%." + " You love each other like Kanye loves Kanye.");
} 

if (loveScore > 30 && loveScore <= 70)
    alert("Your love score is " + loveScore + "%.");

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%." + " You go together like oil and water.");
}

var a = 1;
var b = "1";

typeof(a); //number
typeof(b); //string

if (a === b) {
    console.log("yes")
} else {
    console.log("no");
} // no - double match (type and number)

if (a == b) {
    console.log("yes")
} else {
    console.log("no");
} // yes


