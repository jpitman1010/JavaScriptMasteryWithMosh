//Exercise

//using Stopwatch created in last exercise and
//1. move the instance members that are methods to the prototype of the stopwatch
//notice you can only access the public instance members of the stopwatch
//not the private ones (so startTime, running, etc... won't be accessible from
//the prototype of stopwatch)
//2. so in order to access these properties, you will have to define it as a 
//public read-only property on the Stopwatch and then access it using this.


// ******_________________________________________________________*********
//this exercise is breaking the abstraction principles of prototypes, it was 
//an exercise showing how optimizing too many prototypes can break your code! 

//basically with this implementation it shows that you can create a new Stopwatch object
//then set the duration for it and it will completely overwrite any duration already 
//within the start and stop methods.
function Stopwatch() {
   
    let startTime, endTime, running, duration = 0;

    Object.defineProperies(this, 'duration'), {
        get: function() { return duration; },
        set: function(value) { duration = value }

    }
    Object.defineProperies(this, 'startTIme'), {
        get: function() { return startTime; }
    }
    Object.defineProperies(this, 'endTime'), {
        get: function() { return endTime; }
    }
    Object.defineProperies(this, 'running'), {
        get: function() { return running; }
    }
}

const sw = new Stopwatch();



Stopwatch.prototype.start = function() {
    if (this.running)
        throw new Error('Stopwatch has already started.');
    this.running  = true;
    this.startTime = new Date();
};


Stopwatch.prototype.stop = function() {
 
    if (!this.running)
        throw new Error('Stopwatch has not started.');

    this.running = false;

    this.endtime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
    };

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
    };