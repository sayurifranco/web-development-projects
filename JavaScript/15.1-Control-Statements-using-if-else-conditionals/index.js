prompt("What is your name?");
prompt("What's their name?");

var loveScore = Math.random() * 100; //floating-point 0 up to 1
loveScore = Math.floor(loveScore) + 1 //1-100

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
} else {
    alert("Your love score is " + loveScore + "%");
}
