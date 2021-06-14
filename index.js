//Exercise: 

//impliment a stack using ES6 classes.

//last in first out.

//push for adding object to stack, pop for taking item from top of stack

//cannot index into stack

//create a stack class,
    //give it a count property, start it with zero items in the stack count. for each push
    //add to count
    //there will be 3 prototype methods: 
        //1. peek() -can peak at the last object in the stack
        //if stack empty, should get an error thrown.
        //2. pop() -removes last object in array/stack - should have error thrown
        //if popping on an empty stack.
        //3. push() -adds object to end of array


//then impliment a new stack object: const stack = new Stack();

const _items = new WeakMap();
class Stack {
    constructor(count = 0) {
        _items.set(this, []);
    }


    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        if (_items.get(this).length === 0) 
            throw new Error('Stack is empty.');

        return _items.get(this).pop();
    }

    peek() {
        if (_items.get(this).length === 0) 
            throw new Error('Stack is empty.');

        return _items[_items.length -1];
    }


    get count() {
        return _items.get(this).length;
    }

}

const stack = new Stack();
stack.push(1);
stack.peek();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.count);
console.log(stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.count);
stack.pop();
console.log(stack.count);
stack.pop(); //gives error as it should
stack.peek();


