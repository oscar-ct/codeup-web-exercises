// console.log("Hello from external JavaScript")
//
// alert("Welcome to my website!");
//
// var answer = prompt("What's your favorite color?");
//
//
// alert("Great! " + answer + " my favorite color too!")

// var littleMermaid = Number(prompt("How many days did you rent Little Mermaid for?"));
//
// var brotherBear = Number(prompt("How many days did you rent Brother Bear for?"));
//
// var Hercules = Number(prompt("How many days did you rent Hercules for?"));
//
// var total = littleMermaid + brotherBear + Hercules;
//
// alert("Your total cost for the rentals is " + (total * 3));

// var googleHours = Number(prompt("How many hours did you work for Google?"))
//
// var googlePay = 400
//
// var amazonHours = Number(prompt(" How many hours did you work for Amazon?"));
//
// var amazonPay = 380
//
// var facebookHours = Number(prompt(" How many hours did you work for Facebook?"));
//
// var facebookPay = 350
//
// var totalPay = (googleHours * googlePay) + (amazonHours * amazonPay) + (facebookHours * facebookPay);
//
// alert("You will be paid " + totalPay + " this week")

// var classFull = prompt("Is this class full?")
//
//
// var classConflict = prompt("Does this class conflict with your schedule?");
//
// alert("Congrats, you have been enrolled!");

var classNotFull = confirm("Is the class full");
var noScheduleConflict = confirm("Do you have a schedule conflict?")
var canEnroll = (classNotFull && noScheduleConflict);
alert("It is "+ canEnroll + " that you can enroll in this class" );






