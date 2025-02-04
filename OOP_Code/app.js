// String.prototype.yell = function() {
//     return `OMG!!! ${this.toUpperCase()}!!!! NAAAAHHH!!!`;
// };

// Array.prototype.pop = function() {
//     return 'Sorry, I want that element, I will never pop it off';
// };

// function hex(r,g,b) {
//     return '#' + ((1 << 24) + (r << 18) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b) {
//     return `rgb ${r}, ${g}, ${b}`
// }

// hex(255, 100, 25)
// rgb(255, 100, 25)

// "#fc6419"
// "rgb(255,100,25)"  

//Now we're going to learn about "Factory Function"
//which would make an object that automatically has a hex method and an RGB method
//It'll store the RGB values or properties on the object

// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb ${r}, ${g}, ${b}`; 
//     };
//     color.hex = function() {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 18) + (g << 8) + b).toString(16).slice(1)
//         )
//     }
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex(); //firstColor.hex();
// firstColor.rgb(); //"rgb(35,255,150)"

// const black = makeColor(0,0,0);
// black.rgb(); //"rgb(0,0,0)"
// black.hex(); //"#0000s00"


//This is a constructor function
// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };

//If you call it on its own like a regular function... 
// Color(35, 60, 190)
//it returns undefined. Seems useless!

//*****************
//THE NEW OPERATOR
//*****************

// 1. Create a blank, plain Javascript Object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`; 
// };

// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 18) + (g << 8) + b).toString(16).slice(1);  
// };

// Color.prototype.rgba = function(a=1.0){
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(40, 255, 60);
// color1.hex();
// const color2 = new Color(0, 0, 0);
// color2.hex();

//Classes in JS
class Color {
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB(){
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`; 
    }
    rgba(a=1.0){
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex(){
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 18) + (g << 8) + b).toString(16).slice(1);
    }
}
const red = new Color(255,67,89, 'tomato');
const white = new Color(255,255,255, 'white');

