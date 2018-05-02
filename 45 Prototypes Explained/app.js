// Each Object in JavaScript have Prototypes
// and a prototype is an object itself
// all objects inherit their properties and methods from their prototype

// Object.prototype
// if you created a person object it would come from Person.prototype
// there is a prototype chain, where you can go from the Person.Prototype
// up to the Object.Prototype

function Person(firstName, lastName, dob) {
    // The this keyword refer to the current instance of the object
    // in this case it pertains to the person, to the function scope

    //This value is always changing thus in need to remain on the object
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);


    // Method is a function that is inside an object

    // This function, calculateAge won't change, thus in need to be on the prototype
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970); 
    // }
}

// Calculate Age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); 
}
// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}
// Gets Married
Person.prototype.getsMarried = function (newLastName){
    this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary); // protoypes here can't be accesed like in a for in loop
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

// Check if it has a certain property
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); //not part of the property because it is stored on the proto type