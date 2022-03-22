

// Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.

// Two Inputs: Base * Height divided by 2
var baseValue = 5;
var heightValue = 5;

function triangle(base, height) {
    return (base * height) / 2;
}

console.log(triangle(baseValue, heightValue));

// Three inputs: Side a, b, c
// Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.

var sideA = 5;
var sideB = 5;
var sideC = 5;

function triangle2(a, b, c) {
    return a * b * c;
}

console.log(triangle2(sideA, sideB, sideC));

