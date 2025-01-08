const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRigthTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("Before!")
isRigthTriangle(3,4,5);

console.log("Done!")