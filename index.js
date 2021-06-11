//Exercise -Stopwatch


//should have duration (initially starts at zero), start(start method can only be called
//once until stop has been called) and stop (method that stops the timer.)  
//can call sw.duration will show how long it took between start and stop.
//sw.reset will reset it back to initial state.


function Stopwatch() {
   
    let startTime, endTime, running, duration =0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');

        running  = true;
        startTime = new Date();
    };
 
    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch has already started.');

        running = false;

        endtime = new Date();
 
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        };

    this.reset = this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        };

    
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

const sw = new Stopwatch();

