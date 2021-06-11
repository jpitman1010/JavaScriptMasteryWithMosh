//property descriptors

let person = { name: 'Julie' };
console.log(person);

for (let key in person) 
    console.log(key);

//or

console.log(Object.keys(person));

//in JavaScript our properties have attributes attached to them
//, and sometimes that
//prevents us from iterating over the properties of an object.

//example:

let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(descriptor);
//configurable: true means we can overwrite the method.
//enumerable: false means that we cannot iterate over it.
//writable: true means we can overwrite this method and 
//change the implimentation/value.

//when you creaete your own objects you can create your own 
//methods for these objects.

//define your object properties like this:
Object.defineProperty(person, 'name', {
    writable: false,
    //if you set enumerable to false here, you would not get
    //any keys (now it will just return ["name"]) but enumerable
    //false would result in [] in console.
    enumerable: false,
    //by default all properties are true (writable, configurable, enumerable)
    //configurable to false means you can't delete the property's attribute:
    configurable: false
});
//by setting writable on the key name to false, it won't allow
//anyone to overwrite it:

person.name = 'John';
console.log(person);
//still return's 'Julie' as the name within the object.
console.log(Object.keys(person));
console.log();

//try to delete with configurable set to false on property type
delete person.name;
console.log(person);
//tadaa nothing happens, it isn't deleted.  
//Still get Julie as person.
//I AM NOT DELETABLE muahaha!!!

// __________________________________________________________
//Constructor prototype:

//

// Object.getPrototypeOf(myObj);

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype;

const circle = new Circle(1);

//basically it is the object that will be used as the parent for
//all objects created by this constructor function object.


//Prototypes vs. Instance members

// function Square(area) {
//     //Instance Members
//     this.area = area;

//     this.move = function() {
//         console.log('move square')
//     }
// }
//don't use this in code, but you can see that these to properties reference the same 
//square base object, by typinginto web console:  Square.prototype === s1.__proto__
//output will be true
//using Square.prototype you can add things to make it dynamic, so you can add properties
//

//Prototype Members
// Square.prototype.draw = function() {
//     console.log('draw');
// }

const s1 = new Square(1);
const s2 = new Square(2);

console.log(s1); 
console.log(s2);

//notice that now both Square objects s1/s2 have under their prototype 
//the draw method

// s1.draw();

//since every objeect has a toString() method, 
const s3 = new Square(3);

//so you can change the properties of
//this by doing the following:
// Square.prototype.toString = function() {
//     return 'Square with an area ' + this.area;
// }

//now instead of getting the object returned as a string, it 
// comes back wtih Square with area is ...
//it looks at Square object and when it cannot find toString() method, 
//it then goes to the Square's prototype (parent).

//you can access the instance members through the prototype members by doing
//something like the following (just for example, it doesn't make sense in this
//particular case...):
//take what we wrote above and alter it like this:
// Square.prototype.draw = function() {
//     this.move();
//     console.log('draw');
// }

// s1.draw(); //notice output now includes the draw method  (prototype member)
//as well as the 
//move method from the instance member
//can also do reverse by doing the following:  
function Square(area) {
    //Instance Members
    this.area = area;

    this.move = function() {
        //accessing the prototype members within the Instance Member method
        this.draw();
        console.log('move square')
    }
}
//Prototype Members
Square.prototype.draw = function() {
    console.log('draw');
}

s1.move(); 
//object references allow for the (move() method (and draw)) added or changed
// methods and properties to be a part of the object
//creted even before the prototype or inheritance member is added or changed.



//Iterating Instance and Prototype Members:

function Triangle(area) {

    //Instance Members

    this.area = area;

    this.move = function() {
        console.log('move');
    }
}

const t1 = new Triangle(1);
const t2 = new Triangle(2);

Triangle.prototype.draw = function() {
    console.log('draw');
}

//using Object.keys to look at the keys of an Object, ONLY
//will show the INSTANCE memebers!!  
let instanceKeysT1 = Object.keys(t1);
console.log(instanceKeysT1); //only get area and move keys returned, not draw

//but if you use a for in loop it returns INSTANCE and PROTOTYPES:

for (let key in t1) {
    console.log(key);
}

//some references will call INSTANCE properties "hasOwnProperty" like this:
console.log(t1.hasOwnProperty('area'));  //returns boolean true
console.log(t1.hasOwnProperty('draw'));  //returns boolean false because 
//it is a prototype property



//**** */ it is best pracitce not to modify the prototype methods for multiple reasons,
//future library you use might have same name diff. function, JavaScript may include it
//but have function work differently breaking your code.  Basically, don't do it
//just because you can (don't remove existing, don't add to, don't modify!!):

//****** */ DON'T MODIFY OBJECTS YOU DON'T OWN!!!!
