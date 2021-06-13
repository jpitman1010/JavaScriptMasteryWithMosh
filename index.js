//Exercise Prototypical Inheritance:

//design 2 objects, HtmlElement and HtmlSelectElement
// set a variable const e = new HtmlElement(); and you should see the following:
//there is one method, click() under the HtmlElement
//the HtmlElement's prototype has one method, focus()
//just console.log statement for each method
//when you type e.click you should get message in console "clicked"
// "" e.focus() should get "focused"

//once you ahve this element working, create HtmlSelectElement
//define another const s = new HtmlSelectElement(), and even if we do not pass any
//arguments you will still get the items array which is initialized from an empty array,
//and also have 2 methods, addItem and removeItem
//you should then be able to use s.addItem('1'); s.addItem('2'); and then s.removeItem('2');
//and when you inspect the object s, it should show under the items you now have only 
//one item in the array, '1'

//HtmlSelectElement inherits from the HtmlElement (prototype)
//DO NOT use the extend function we created in lecture earlier,
//INSTEAD manually set the prototype for HtmlSelectElement and 
//set it to an instance of the HtmlElement (not the prototype, because
//you will only get the click method because the focus method is set to the prototype 
//of the HtmlElement, not the instance)

function mixin(target, ...sources) {
    Object.assign(target, ...sources);
    
}

function HtmlElement() {
    this.click = function() {
        console.log('clicked');
        }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}


function HtmlSelectElement(items = []){
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        this.items.pop(item);
        //can also do:
        //this.items.splic(this.items.indexOf(item),1);
    }
}


const h = new HtmlElement();
mixin( HtmlElement.prototype, focus );

console.log(h);

h.focus();
h.click();


 
// HtmlSelectElement.prototype =Object.create(HtmlElement.prototype);
// //this won't work for this implimentation, it causes the baseHtml element that has an
// //object of only 1 element, focus.  The prototype of the baseHtml (parent) we only get
// //access to the focus.
HtmlSelectElement.prototype = new HtmlElement();
//must do it this way because we need the click object.  Now need to set constructor
//to create the new HtmlSelector element (best to not do it with new HtmlSelectElement):
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement()


console.log(s);

s.addItem('1');
s.addItem('2');


console.log(s);

s.removeItem('2');

console.log(s);