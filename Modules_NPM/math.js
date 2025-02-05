module.exports.add = (x,y) => x + y;

module.exports.PI = 3.14159;

module.exports.square = x => x * x;

exports.square = this.square;
exports.PI = this.PI;


//ONE WAY OF DOING THIS
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

//ANOTHER WAY OF DOING IT
// module.exports = math;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;