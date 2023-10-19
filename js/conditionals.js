let userLoggedInToday = true;

if (userLoggedInToday) {
  console.log("Thanks for logging in today!");
}


let userLoggedInToday2 = false;

if (userLoggedInToday2) {
  // this code will not run!
  console.log("Thanks for logging in today!");
}


let userLoggedInToday3 = false;

if (userLoggedInToday3) {
  // this code will not run!
  console.log("Thanks for logging in today!");
} else {
  // this code will run
  console.log("Don't forget to log in today!");
}

// and (do both sides evaluate to true?)
true && true; // returns true
true && false; // returns false
false && true; // returns false

// or (does either side evaluate to true?)
true || true; // returns true
true || false; // returns true
false || false; // returns false

// not (return the inverse)
!true; // returns false
!false; // returns true



7 === "7"; // false
7 == "7"; // true




// assignment (one equal sign)
let currentForecast = "sunny";

// equality comparison (three equal signs)
if (currentForecast === "rain") {
  let recommendation = "Bring your umbrella! ☔";
}

// Mistake alert!
// Only one equals sign, 
// means that this assigns 'rain' to currentForecast

// instead of the triple equals, 
// which would check if currentForecast is set to 'rain'
if (currentForecast = "rain") {
  let recommendation = "Bring your umbrella! ☔";
}




// Greater than - `>`
7 > 4; // true
2 > 10; // false
100 > 100; // false

// Less than - `<`
7 < 4; // false
2 < 10; // true
100 < 100; // false

// Greater than or equal to - `>=`
7 >= 4; // true
2 >= 10; // false
100 >= 100; // true

// Less than or equal to - `<=`
7 <= 4; // false
2 <= 10; // true
100 <= 100; // true

// Not equal - `!==` (opposite of ===)
7 !== 4; // true
2 !== 10; // true
100 !== 100; // false




let loginCount = 3;
if (loginCount > 10) {
  console.log("That's a lot of logins today, champ! Maybe give it a rest.");
} 
else if (loginCount > 0) {
  console.log("Thanks for logging in!");
} 
else {
  console.log("Don't forget to log in today");
}



let userLoggedIn = true;
let userPurchasedItem = false;

// test if both values are true
userLoggedIn && userPurchasedItem; // => false

// test if either value is true
userLoggedIn || userPurchasedItem; // => true

// invert the value of a variable
!userLoggedIn; // => false
!userPurchasedItem; // => true



// and (do both sides evaluate to true?)
true && true; // returns true
true && false; // returns false
false && true; // returns false

// or (does either side evaluate to true?)
true || true; // returns true
true || false; // returns true
false || false; // returns false

// not (return the inverse)
!true; // returns false
!false; // returns true




let weather = "sunny";

if (weather) {
  console.log("There is weather outside");
}



!!true // true
!!false // false
!!10 // true
!!0 // false
!!(-8) // true
!!"hello" // true
!!"" // false
!!" " // true
!!undefined // false
!!NaN // false
!!null // false
















