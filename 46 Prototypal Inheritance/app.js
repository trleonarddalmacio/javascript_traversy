// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer constructor
function Customer (firstName, lastName, phone, membership) {
    // * By default the Customer Constructor won't inherit the Prototype of the Person Constructor
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
// This will change the prototype of the Customer to Person
Customer.prototype = Object.create(Person.prototype);

// Create Customoer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// Make customer.prototype return Customer()
// Return the customer prototype back
Customer.prototype.constructor = Customer;

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our`;
}

console.log(customer1.greeting());