console.log("Hello World!");

generateNumber(15);

function generateNumber(max) {
    // Addition = +
    // Subtraction = -
    // Multiplication = *
    // Division = /
    // Remainder = %
    let randomNumber = Math.floor(Math.random() * max) + 1;

    // if ... else if ... else
    // GT >, GTE >=, LT <, LTE <=, EQ ==, NEQ !=, AND &&, OR ||
    if (randomNumber <= 15) {
        console.log(`The number is in B.`);
    } else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log(`The number is in I.`);
    } else {
        console.log(`The number is invalid`);
    }

    return console.log(randomNumber);
}