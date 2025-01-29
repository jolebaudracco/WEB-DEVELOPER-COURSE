// class Color {
//     constructor(r, g, b, name){
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         this.calcHSL();
//     }
//     innerRGB(){
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb(){
//         return `rgb(${this.innerRGB()})`; 
//     }
//     rgba(a=1.0){
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }
//     hex(){
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 18) + (g << 8) + b).toString(16).slice(1)
//         );
//     }
//     hsl(){
//         const { h, s, l } = this;
//         return `hsl(${h},${s}%,${l}%)`;
//     }
//     fullySaturated(){
//         const {h,l} = this;
//         return `hsl(${h},100%,${l}%)`;
//     }
//     opposite(){
//         const { h, s, l } = this;
//         const newHue = (h + 180) % 360;
//         return `hsl(${newHue},${s}%,${l}%)`;
//     }
//     calcHSL() {
//         let { r, g, b } = this;
//         //Make r, g, and b fractions of 1
//         r /= 255;
//         g /= 255;
//         b /= 255;
    
//         //Find greatest and smallest channel values
//         let cmin = Math.min(r, g, b),
//             cmax = Math.max(r, g, b),
//             delta = cmax - cmin,
//             h = 0,
//             s = 0,
//             l = 0;
    
//         if(delta == 0) h =0;
//         else if(cmax == r)
//             //Red is max
//             h = ((g - b) / delta) % 6;
//         else if(cmax ==g)
//             //Green is max
//             h = (b - r) / delta + 2;
//         else 
//             //Blue is max
//             h = (r - g) / delta + 4;
    
//         h = Math.round(h * 60);
    
//         //Make negative hues positive behind 360°
//         if(h < 0) h += 360;
//         // Calculate Lightness
//         l = (cmax + cmin) / 2;
    
//         //calculate saturation
//         s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
//         // Multiply l and s by 100
//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);
//         this.h = h;
//         this.s = s;
//         this.l = l;
//     }    
// }

// const red = new Color(255,67,89, 'tomato');
// red.hsl();
// red.opposite();
// red.rgba(0.3);
// const white = new Color(255,255,255, 'white');


// NOW WE'RE GOING TO GO MORE SIMPLE WITH CLASSES
class Pet{
    constructor(name, age){
        console.log("In Pet Constructor")
        this.name = name;
        this.age = age;
    }
    eat (){
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    //what happen if I wanna add a constructor to the Cat CLASS
    constructor(name, age, livesLeft = 9){
        console.log("In Cat Constructor")
        //Super word is going to reference the class
        super(name, age) //this is going to call the constructor form Pet
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'Meowwwwww';
    }
}

class Dog extends Pet {
    bark(){
        return 'Guau';
    }
    //qué pasa si agrego otra function igual a la que tengo en la clase general
    eat(){
        return `${this.name} scarfs his food`;
    }
}


