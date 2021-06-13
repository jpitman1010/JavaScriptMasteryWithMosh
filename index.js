// _________________________________________________________________________________

//Exercise: Polymorphism 

    //use previous exercise and build off of it to use s and impliment a render method.

    //s.render() should return 
    // " <select>
    //  <option>1</option>
    //  <option>2</option>
    //  <option>3</option>
    //</select> "
    //
    //then create an html image element that can be inherited from HtmlElement that
    //that when (it can be clicked...)clicked it can be focused and then use a 
    //it renders it's own image.
    //src property of image element should be undefined, then you can set image src to
    //some pic image https, etc... and then when you check by doing img.render() it should
    //then have "<img src="https://..." />" as output (render a string, return it don't
    //console.log it.)

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
    }

    this.removeItem = function(item) {
        this.items.pop(item);
        //can also do:
        //this.items.splic(this.items.indexOf(item),1);
    }
    this.render = function() {
        //the way I wrote this loop:    
        // let options = `<select>` 
        // for  (let ind = 0; ind < array.length; ind++) 
        //     options += `<option> ${array[ind]} </option>`
        // options += `</select>`
        // if (array === [] ? undefined : options);
        return (
        //Mosh's loop:
        `
        <select>
            ${this.items
            .map(item => `<option>${item}</option>`)
            .join('')}
        </select>`);
    }
}


HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
function HtmlImageElement(src) {
    this.src = src;

    this.render =  function() {
        return `<img src=${this.src} />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('https://picsum.photos/200')
];


for (let element of elements)
    console.log(element.render());