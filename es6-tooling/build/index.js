"use strict";

var x = 1;

//use babel to convert to code everyone can understand. 
//go to package.json and delete 'tests' under the Scripts object and change it to:
//    "babel": "babel --presets env index.js -o build/index.js"


//next add a 'build' folder to the es6-tooling so we don't get an error

//next run it by going to terminal and typing:

// npm run babel

//now output of this code is placed into the build folder in index.js (just like we 
//pointed it to do in the package.json file);

//code is converted to ES5, so var is in place of const because we don't have let or const
//in ES5.  

//we can use Webpack to bundle all files together for this change to the package.json file
//because if you have hundreds or thousands of files, you woudn't list them out manually
//so that they can be run using npm babel, Webpack will help us with that.


