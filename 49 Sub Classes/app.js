class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static greeting() {
        return `Hello there ${this.firstName} ${this.lastName}!`
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }


    // I think static methods are methods that aren't binded to an instance, that is why when you call them you need to use Customer.getMembershipCost();
    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer ('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());
