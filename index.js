

// procedural example:
let baseSalary = 30_000;
let overtime = 10;
let rate =20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}
//functions have to have more parameters, more room for mistakes
//the best functions are those with no parameters

//encapsulation
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.rate * this.overtime)
    }
};

console.log(employee.getWage());


