

// procedural example:
let baseSalary = 30_000;
let overtime = 10;
let rate =20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
//functions have to have more parameters, more room for mistakes
//the best functions are those with no parameters
 //object literals
//uses curly braces with key value pairs inside
 const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw - object literal function circle');
    }
 };

 //properties are the key's, methods are the functions within the 
 //object
 //if object has 1 or more methods, it has behavior.  Best not to 
 //use object literal syntax when object has a method.

 circle.draw();


 //Factories:

    //allows you to not have to copy the code/duplicate it in order
    //to make a second circle.
    //uses return statement


function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw Factory Function circle');
        }
     };
}

const circle2 = createCircle(1);

console.log(circle2);

//Constructor Functions
    //another way to create an object
    //Pascals notation
    //when function is called, it creates an empty object
        //then points the object to the function
    //uses this.operator 
    

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw Constructor Function Circle');
    }
}

const anotherCircle = new Circle(1);

console.log(anotherCircle);


//constructor property
    //every object in JavaScript uses these, it is what 
        //creates the objects
    //typing circle.constructor into console on web inspector, shows the
    //constructor function 
    // new String(); - cleaner to use the following though: '',"", ``
    //new Boolean(); -cleaner to code with the following: true, false
    //new Number(); - cleaner to code with the following: 1,2,3,4...


//Functions are Objects.

//Types : 1. Value Types (Primitives): number, string, boolean, symbol, undefined, null
//2 Reference types (objects): objects, functions, arrays


//adding / removing properties to/from object

circle.location = { x: 1 };
console.log(circle);

//or

const propertyName = 'location';

circle[propertyName] = { x: 2 };

console.log(circle);
console.log(circle.location);


//dynamically delete property

delete circle.location;
//can also use delete circle[propertyName]

//Enumerating all Properties:
for (let key in circle) {
    console.log(key);
    //to get value use bracket notation:
    console.log(circle[key]);
    //if you want to get only property and not methods:
    if (typeof circle[key] !== 'function')
        console.log('getting the keys using a for in loop', key, circle[key]);
}

//can also get object keys by doing the following:
const keys = Object.keys(circle);
console.log('keys of object without using a loop', keys);

//check for existance of a property in an object
if ('radius' in circle)
    console.log('circle has a radius');



//Abstraction: 
    //hiding the details and complexity from client side and show
    //only the essentials
    //radius and draw method are the only things needing 
    //to be essential.  hide everything else through abstraction:
    //

function Circle2(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };
    //by using let and not this.property, it allows these
    //to be local variables and functions only able to 
    //be used inside this function, and only accessible 
    //inside the function, they are within the closure of the 
    //inner function this.draw //scope is temporary, but closure
    //stays for good, the variables will continue to stay in memory,
    //whereas scope only keeps the values while the function is being
    //called. 
    //they are considered private members of the Circle2 object;

    let computeOptimumLocation = function() {
        //some method
        console.log('this is the optimal location function')
    };

    this.draw = function() {
        computeOptimumLocation();
    }
}

const anotherCircle2 = new Circle2(1);

console.log(anotherCircle2);



//getters and setters: 

function Circle3(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw')
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location');
            //saying if value.x is falsy or value.y is falsy throw an error
            defaultLocation = value;
        }
    });
}
x
const anotherCircle3 = new Circle3(10);

console.log(anotherCircle3);

console.log('Circle3 default location using getter', anotherCircle3.defaultLocation);

anotherCircle3.defaultLocation = 1;

console.log('using setter to throw error if x or y is falsy: ', anotherCircle3);