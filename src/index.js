// //ES Tooling:

// //Modules:

// //we don't build real world applications with all the code in one file
// //each file is called a Module

// //it allows you to 
//     //1. can maintain scalability by having multiple files
//     //2. can reuse code in different places
//     //3. can abstract the code using Abstraction methods and hide
//     //code we don't want to be changed or moved, and only expose the essentials

// const _radius = new WeakMap();
// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

//     draw() {
//         console.log('Circle with a radius ' + _radius.get(this));
//     }
// }

// const c = new Circle(10);
// console.log(c);
// c.draw();

// //can read the radius private property to get the value of the radius, since c.radius
// //is not a property that can be accessed.

// console.log(_radius.get(c));

// //now to make use of the ES6 Tooling, we should remove everything from the Circle class
// //and remove it into a different file(module) then only expose the parts of the class to 
// //the outside that are essential.

// //types of modules:
//     //1. AMD - asynchronous module definition -primarly used in browser applications.
//     //2. CommonJS -can be used in Node.js
//     //3. UMD -universal module definition- can be used in Browser or Node.js
//     //4. as of ES6  we have ES6 Modules - JS natively supports a module format

// //only going to focus on CommonJS and ES6 Modules.


// ______________________________________________________________________________
//CommonJS Module Format

// const _radius = new WeakMap();
// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

//     draw() {
//         console.log('Circle with a radius ' + _radius.get(this));
//     }
// }

// const c = new Circle(10);
// console.log(c);
// c.draw();

//to run in node, in terminal type in :
//  node index.js
//output is exactly what you would see in browser.

//Modularity rule:
    //things that are highly related should go together.  this is called "Cohesion"
//for this example we will remove the Circle class and all things highly related, and 
//place them into the circle.js file.
//must export from circle.js and import from here to be able to access it.

//use require function to import the module you have exported in another js file.

// const Circle = require('./circle');

// const c = new Circle(10);
// console.log(c);
// c.draw();
//still works as it should in Node.js (node index.js in termninal)


// ______________________________________________________________________________
//ES6 Modules

//same as with node.js you want to take all of the class related info and move it to another
//module.
//we will use circleES6.js for the file name for this example.
// import {Circle} from './circleES6.js';

// const c = new Circle(10);
// console.log(c);
// c.draw();

//with this you get an error "Uncaught SyntaxError: Cannot use import statement outside 
//index.js:line a module"
//in order to get around this, DO NOT USE IN PRODUCTION, can learn how to really not
//get error another time, but for practice, we can go to index.html file and change
//the script tag to add in type="module" and this will remove the error.
//then we get a different error, because in index.js we are trying to load a module,
//so as temporary workaround for lecture add .js to end of import.

//then everything works for browser too.



// ______________________________________________________________________________
//ES6 Tooling - only important for browser applications. 

//Transpiler (translator and compiler)
//Bundler (combines all js files into a bundle, give all to something like Webpack, it
//will minify code by getting rid of comments and whitespaces, then it will uglify the code
//getting it ready for sending smallest package to the client.)

//need NPM in order to use Node 3rd party libraries.  


//Babel:

//for this lecture, create a new folder by typing into terminal:
// mkdir es6-tooling
//then:
// cd es6-tooling
//initialize a node project into this folder by running :
//npm init --yes
//next install babel packages:
// npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev
//the --save-dev part says we will only be using this during development, not to deploy




// ______________________________________________________________________________
//Webpack:
// we have index.js and circle.js we will work with for this part of lecture.
//in order to use Webpack we need to install:
//terminal:
//npm i -g webpack-cli@2.0.14

//now in our project folder, we run 
//webpack-cli init
//should take through list of questions, but it didn't so manually installed the files
//that were installed automatically with this package (likely M1 issue)


//now run npm init --yes

//and go into newly created package.json file and find the 'dependencies' object and 
//under scripts, add in "build": "webpack",

//now we want to bundle our application, so run in terminal:


//use the RosettaTerminal I set up to install everything on M1 macbook
//npm run build

//need to get help with M1 issues to complete this babel webpack implimentation.
  