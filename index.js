//ES6 (ES2015) Classes:
    //modern way of using syntatic sugar over constructor functions, not like classes in Java or C++
    //A way to inherit properties from prototypes


    //instead of doing this: 
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
//  }


//we will now:

// class Circle {
//     //constructor is a special method for classes that allows you to initialize objects 
//     constructor(radius) {
//         this.radius = radius;
//     }

//     //if you want to define a method, we will define in the body of the class
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle(1);
// console.log(c);

//this places the method into the prototype unless you define the method within the constructor of the
//class, similar to before, now we will define the method move in the constructor to see an example:

// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//         this.move = function() {
//             console.log('move');
//         }
//     }

//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle(1);
// console.log(c);
// console.log(typeof Circle); //returns 'function' because in ES6 these classes are essentially 
//constructor functions

// __________________________________________________________________________________________________
//Hoisting:

//Functions can be declaired by:
    //Function Declaration 
        //function sayHello() {}
    //Function Expression
        //const sayGoodbye = function() {};

//Function declarations are hoisted, or raised to the top of all code on page, automatically done by JS.

//When it comes to JS Classes, you can use Class Declaration or Class Expression, classes do NOT hoist, no
//matter which one you use.  rare to use class expression, so stick to that becaus it is simpler and cleaner.



// __________________________________________________________________________________________________
//Static Methods:

//instance method is one that is inside of the class object or object, 
//static methods are avaialble on the class themselves, not the object.  
//static methods can look just like instance methods in classes:

// class Circle {
//         constructor(radius) {
//             this.radius = radius;
    
//             this.move = function() {
//                 console.log('move');
//             }
//         }
//         //instance method
//         draw() {
//             console.log('draw');
//         }

//         //static Method
//         static parse(str) {
//             console.log('this is a static method');
//    
//         }
//     }
    
//     const c = new Circle(1);
//     console.log(c);
//     console.log(typeof Circle);
//     // console.log(c.parse()) //this gives error because it is not an instance method that is accessable, it is
//     //only accessable on the Class.
//     console.log(Circle.parse()); //the class will show static methods


// class Circle {
//     constructor(radius) {
//         this.radius = radius;

//         this.move = function() {
//             console.log('move');
//         }
//     }
//     //instance method
//     draw() {
//         console.log('draw');
//     }

//     //static Method
//     static parse(str) {
//         console.log('this is a static method');
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const c = Circle.parse('{ "radius" : 1 }');
// console.log(c);
//now the static method will make the function that is not tied to a particluar object.


// __________________________________________________________________________________________________
//The 'this' Keyword


// const Circle = function() {

//     //instance method
//     this.draw = function() {
//         console.log(this);
//     }

// }

// const c = new Circle();
// //c.draw(); is a method call
// c.draw();

// const draw = c.draw;
// console.log(draw);
//notice that now when we call draw, it changes from the local object to the window object
//This is Function Call
//when we create a new object in JS, a new object is created by c = new Circle(); and the 'this' gets
//applied to that new object.  Forgetting to use 'new' before initializing new object will result 
//in the 'this' pointint to the window(or in Node.js global) object.
// draw();
//because we are calling the method as a stand alone object, it automatically points to the window/global 
//object.

//if we enable the 'use strict'; line at the top of the file, it will make it to where instead of the 
//method call being pointed globally/to window, it will point to undefined.
//this is to prevent us from accidentally modifying the global object because that is bad practice.



// 'use strict';
// const Circle = function() {
//     //instance method
//     this.draw = function() {
//         console.log(this);
//     }
// }

// const c = new Circle();
// //c.draw(); is a method call
// c.draw();

// const draw = c.draw;

// draw();




// class Circle {
//     draw() {
//         console.log(this);
//     }
// }

// const c = new Circle();
// const draw = c.draw;
// //by default our classes are enabled in Strict mode, you would have to manually change this for 
// //classes, so no need to 'use strict'; for classes.
// draw();

// __________________________________________________________________________________________________

//Private Member Using Symbols:


// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//    constructor(radius) {
//     //    this.radius = radius;
//     //    //or can use brackets:
//     //    this['radius'] = radius;
//        //can use symbol to make unique keys
//        this[_radius] = radius;
//    }

//    [_draw]() { 
//    }
// }

// //implimentation of Abstraction uses private members and hiding features from outside of the object(s)
// //isolate the impact of the changes to the object

// //this.radius is public by default, you can access by:
// const c = new Circle(1);
// console.log(c);

// //ES6 symbols to access private properties and methods

// //ES6 has another primitive called Symbol
//     //Symbol() creates unique identifiers, every time it is called, the unique value can be used as a property name
//     //or object.  
// console.log(Object.getOwnPropertySymbols(c)); // this returns an array of the symbols created, each different

// //to access private properties:  



// __________________________________________________________________________________________________
//Privaete Members Using WeakMaps

// const _radius = new WeakMap();
// //essentially a dictionary where keys are object and values can be anything
// const _move = new WeakMap();
// class Circle {
//    constructor(radius) {
//     _radius.set(this, radius);
//     _move.set(this, function() {
//         console.log('move', this)
//     });
//    }

//    draw() {
//        console.log(_radius.get(this));
//        //using the get method on this WeakMap()
//        //allows us to access the WeakMap object, so now c.draw will 
//        //show up as a property of c
//        //in order to use the _move method, we can do this:
//        _move.get(this)();
//        console.log('draw');
//        //_move comes out as undefined because the body of the class is automatically 
//        //executed in strict mode, and this by default is set to undefined as opposed
//        //to the global object.  This problem goes away if you use an arrow function. See below.
//     }

// }

// const c = new Circle(1);
// //
// // c.radius is not a property of c;
// c.draw(); //output is 1, because draw() has the get method set for accessing the WeakMap()
// //property


// const _radius = new WeakMap();
// //essentially a dictionary where keys are object and values can be anything
// const _move = new WeakMap();
// //good practice to use a separate WeakMap() for all private properties.
// class Circle {
//    constructor(radius) {
//     _radius.set(this, radius);
//     _move.set(this, () => {
//         console.log('move', this)
//     });
//    }

//    draw() {
//        _move.get(this)();
//        console.log('draw');
//         //now this is inheriting from the constructor function because it is using
//         //an arrow function to set it.
//         //all public and private properties can now be accessed in the move method.

//     }

// }

// const c = new Circle(1);
// //
// // c.radius is not a property of c;
// c.draw(); //output is 1, because draw() has the get method set for accessing the WeakMap()
// //property




// __________________________________________________________________________________________________
//Getters and Setters:


// const _radius = new WeakMap();

// class Circle {
//    constructor(radius) {
//     _radius.set(this, radius);
//     }

//     get radius() {
//         //looks like a method but can access it like a property
//         return _radius.get(this);
//     }

//     set radius(value) {
//         if (value <= 0) throw new Error('invalud radius');
//         _radius.set(this, value);
//     }
// }

// const c = new Circle(1);
// console.log(c.radius); //now we can access radius like any other property
// // console.log(c.radius = -1); //get error, as defined above in setter
// // console.log(c.radius); //value doens't actually change when error is thrown.
// console.log(c.radius = 2); //
// console.log(c.radius); //now radius shows up as what we set it to, 2.



// __________________________________________________________________________________________________
// Inheritance:


// class Shape {
//     constructor(color) {
//         this.color = color;
//         console.log('color');
//     }
//     //cannot add the constructor function into the derrived class after adding the 
//     //constructor to the parent class, you must use super in derrived class to pass
//     //the color argument.

//     move() {
//         console.log('move');
//     }
// }

// //to get a class to inherit from another class, all you have to do is add 'extends OtherClassName'
// //to the class object you are making:
// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);
//         console.log('color');
//         this.radius = radius;
//     }
//     draw() {
//         console.log('draw');
//     }
// }

// //no need to reset prototypes or constructors, etc... way easier and cleaner.

// const c = new Circle('red', 12);
// console.log(c);
// c.draw();
// c.move();


//we inherited  color from parent class and created the radius on the circle object itself.



// __________________________________________________________________________________________________
// Method Overriding:

class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('circle move');
    }
}

const c = new Circle();
console.log(c);
c.move();
//because of prototypical inheritance, JS first looks in the child element, and if not
//found there it will carry out that method, if not it will go to the prototype to find
//the method and use that if it doesn't exist in the prototype class.

//what if you want to use the parent move method instead of the local method for circle object?

//you would just use the super.methodName() for when defining the move method in the child class, 
//which allows you to access one or both (local and parent method);















