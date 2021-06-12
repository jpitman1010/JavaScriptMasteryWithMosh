// // //creating your own prototypical inheritance

// // //creating your own prototypical inheritance

// // // function Shape() {
// // // }

// // // Shape.prototype.duplicate = function() {
// // //     console.log('duplicate');
// // // }

// // // function Circle(radius) {
// // //     this.radius = radius;
// // // }

// // // //the following creates an object that inherits from the
// // // //shape prototype
// // // Circle.prototype = Object.create(Shape.prototype)

// // // Circle.prototype.draw = function() {
// // //     console.log('draw');
// // // }

// // // const s = new Shape();
// // // const c = new Circle(1);


// // //Resetting the Constructor

// // function Shape() {
// // }

// // Shape.prototype.duplicate = function() {
// //     console.log('duplicate');
// // }

// // function Circle(radius) {
// //     this.radius = radius;
// // }

// // //the following creates an object that inherits from the
// // //shape prototype
// // Circle.prototype = Object.create(Shape.prototype);
// // Circle.prototype.constructor = Circle;
// // //resetting the constructor will allow you to now make a new
// // //circle under the constructor parameter like this:
// // const c3 = new Circle.prototype.constructor(1);
// // console.log(c3);
// // //now it shows the prototype (parent) of the Circle is Shape and
// // //the constructor is now the Circle object with radius 1.

// // //****** */ as best practice anytime you reset the prototype, make
// // //sure you ALSO reset the constructor!!!

// // Circle.prototype.draw = function() {
// //     console.log('draw');
// // }

// // const s = new Shape();
// // const c = new Circle(1);



// // //calling the SUPER constructor

// // function Shape(color) {
// //     this.color = color;
// // }

// // Shape.prototype.duplicate = function() {
// //     console.log('duplicate');
// // }



// // //when we console.log the Circle object, it doesn't automatically 
// // //show the color for the circle.  How do we do this?  We have to
// // //get the attribute from the prototypical inheritance by using Super:

// // //so we will pass color  as a parameter and calling the shape function
// // //to point to the new instance of the Shape object.  Use "call" to CALL the 
// // //SUPER constructor.
// // function Circle(radius, color) {
// //     this.radius = radius;
// //     Shape.call(this, color);
// // }

// // Circle.prototype = Object.create(Shape.prototype)

// // Circle.prototype.draw = function() {
// //     console.log('draw');
// // }

// // const c4 = new Circle(1); 
// // c4.color = "red";
// // console.log(c4); 
// // console.log(c4.color)

// // // __________________________________________________________
// // //Intermediate Function Inheritance: 


// // //because we reset the prototype and the constructor, it now has access
// // //to all of the shape, but instead of re-writing this code everytime you want to 
// // //make a new shape, you can write a new function  that will take in 2 parameters:
// // //child and Parent *(use Uppercase/Pascal notation because we expect that these
// // //are CONSTRUCTOR functions!! )
// // function extend(Child, Parent) {

// //     //change the child object to Child, and the prototype of the child to Parent
// //     Child.prototype = Object.create(Parent.prototype);
// //     Child.prototype.constructor = Child;
// //     //and now we have ENCAPSULATED this object for later use.

// // }


// // function Square(size) {
// //     this.size = size;

// // }

// // extend(Square, Shape);


// // const sq = new Square(10);
// // console.log(sq.duplicate);


// // // ________________________________________________________________________


// //Method Overriding:

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape(){

// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }
// //what if you want to use a method for most shapes, but for one shape it doesn't 
// //work, like with a Circle object, maybe it won't be the same method to use as
// //a rectangle
// //here we can use method overriding:
// //basically we would redefine this method: 
// // Shape.prototype.duplicate = function() {
// //     console.log('duplicate');
// // }
// //in the circle object


// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle() {

// }

// extend(Circle, Shape);
// //after extending, redefine the prototype (MUST DO AFTER RESETTING THE PROTOTYPE otherwise
// //the method will overwrite your resetting it because it will inherit the property after

// Circle.prototype.duplicate = function () {
//     Shape.prototype.duplicate.call(this);
//     //added Shape prototype duplicate method after to show both parent and child
//     //method

//     console.log('duplicate circle');
// }

// const c =  new Circle();
// c.duplicate();
// //now our duplicate method shows 'duplicate circle instead of just the parent's object
// //method output of "duplicate" unless you add in the Shape.prototype.duplicate.call(this);


// // _______________________________________________________________________________
// //POLYMORPHISM 
// //many forms

// function Square(){

// }

// extend(Square, Shape);

// Square.prototype.duplicate = function() {
//     console.log('duplicate square');
// }

// //why is it important that we can use this parent method to redefine many other child
// //objects?  What if you have an array of objects?

// const shapes = [
// new Circle(),
// new Square()
// ];

// //because now we can use a for of loop to iterate the array and call the duplicate method
// for (let shape of shapes) {
//     shape.duplicate();
// }

// //!! this is awesome!!  
// //reduces a bunch of if-else statements into a single line of code!!  LOVE IT!!!

// //if you use inheritance, keep it to one level, don't make a tree of inheritance because
// //it becomes vulnerable to breaking and can get very complicated


// ___________________________________________________________________________________
//Mixins - Composing 

// const canEat = {
//     eat: function() {
//         this.hunger--;
//         console.log('eating');
//     }
// };

// //we are defining one feature as an object.
// //now we can define another feature

// const canWalk = {
//     walk: function() {
//         console.log('walking');
//     }
// };

// //you can use Object.assign to pass a property of one object to another
// //by passing an empty object as the target, then pass one or more source objects, 
//     // const person = Object.assign({}, canEat, canWalk);
//     // console.log(person);
// //now the person object can eat and walk

// //now we can make a constructor function called person and pass Person.prototype
// //as the first variable and assign the constructor function these two methods:
// function Person() {

// }

// Object.assign(Person.prototype, canEat, canWalk);
// const person = new Person();
// console.log(person);


// //now let's say later you want to define a new object that can swim:

// const canSwim = {
//     swim: function() {
//         console.log('swim');
//     }
// };

// function GoldFish() {

// }
// Object.assign(GoldFish.prototype, canEat, canSwim);
// const goldFish = new GoldFish();
// console.log(goldFish);

//now we can define mix the prototypes and define a new method called mixin:
    //to do this we won't know how many parameters we will pass each future time
    //that we call this method, so we will use the REST operator as the second
    //parameter allowing for us to have multiple arguments passed through,
    //allowing for it to collect all of the arguments and turn them into an array
function mixin(target, ...sources) {
    //now we can use the spread operator to spread the array, which looks the same as
    //the REST operator, but is different
    Object.assign(target, ...sources);
}


const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

function Person() {

}

//now we can change this code for assign on the person object to the mixin method:
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);


const canSwim = {
    swim: function() {
        console.log('swim');
    }
};

function GoldFish() {

}
//and also change the assign code for goldfish to use mixin method
mixin(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();
console.log(goldFish);

//and code comes out exactly the same 