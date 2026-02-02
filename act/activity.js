/*
JavaScript Functions Boot Camp
Complete each TODO. Run often.
*/

// Simple test helper (so we can verify quickly)
function test(label, actual, expected) {
    const pass = actual === expected;
    console.log(`${pass ? "✅" : "❌"} ${label} | got: ${actual} | expected: ${expected}`);
}

// ------------------------------------------------------------
// PART A: Warm-up (no parameters)
// ------------------------------------------------------------

/*
TODO A1:
Create a function named sayHello that prints: Hello!
Then CALL it 2 times.
*/
function sayHello(){
    console.log("Hello!");
}
sayHello();
sayHello();


// TODO A1 here


// ------------------------------------------------------------
// PART B: Parameters + Arguments
// ------------------------------------------------------------

/*
TODO B1:
Write a function named shout that takes 1 parameter: word
It should RETURN the word in all caps.
Example: shout("hey") -> "HEY"
*/
function shout(word) {
    return word.toUpperCase()
}


/*
TODO B2:
Write a function named fullName that takes (first, last)
Return "first last" with a single space between.
Example: fullName("Ada", "Lovelace") -> "Ada Lovelace"
*/
function fullName(first, last) {
    return `${first} ${last}`;
}




/*
TODO B3:
Write a function named isEven that takes (n)
Return true if n is even, false otherwise.
Hint: use the % operator.
*/
function isEven(n) {
    return n % 2 === 0;

}

isEvenLambda = n => n % 2 === 0;
console.log(isEvenLambda(15))

// ------------------------------------------------------------
// PART C: Return values used later
// ------------------------------------------------------------

/*
TODO C1:
Write a function named add that takes (a, b)
Return the sum.
*/
function add(a, b) {
    return a + b;
}



/*
TODO C2:
Write a function named average that takes (a, b)
Return the average of the two numbers.
Example: average(10, 20) -> 15
*/
function average(a, b) {
    return (a + b) / 2 ;
}



// ------------------------------------------------------------
// PART D: Small logic inside functions
// ------------------------------------------------------------

/*
TODO D1:
Write a function named clamp that takes (value, min, max)
- If value < min, return min
- If value > max, return max
- Otherwise return value
*/
function clamp(value, min, max) {
    if (value > min) {
        return min;
    }else if (value > max) {
        return max;
    } else {
        return value;
    }
}



/*
TODO D2:
Write a function named repeatWord that takes (word, times)
Return a single string where word is repeated times times with "-" between.
Example: repeatWord("go", 3) -> "go-go-go"
Hint: loop
*/
function repeatWord(word, times) {
    return word.repeat(times);

}


// ------------------------------------------------------------
// PART E: Function expression
// ------------------------------------------------------------

/*
TODO E1:
Create a function expression stored in a const named subtract.
It should take (a, b) and RETURN a - b.
*/
const subtract = function(a, b) {
    return a - b;

};


// ------------------------------------------------------------
// PART F: Tiny “real world” mini-task
// ------------------------------------------------------------

/*

TODO F1:


TODO F2:
Write a function named scoreMessage that takes (name, score)
Return: "<name>'s score is <score>."
Example: scoreMessage("Nick", 120) -> "Nick's score is 120."
*/
function calculateScore(coins, gems) {
    return coins * 10 + gems * 50;
}

function scoreMessage(name, score) {
    return `${name}: ${score}`;

}
// Final output check (should be readable)
const finalScore = calculateScore(5, 1);
console.log(scoreMessage("Player1", finalScore));