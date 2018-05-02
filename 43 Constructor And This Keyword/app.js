
// Person constructor
function Person(name, dob) {
    // The this keyword refer to the current instance of the object
    // in this case it pertains to the person, to the function scope
    this.name = name;
    this.birthday = new Date(dob);
    // Method is a function that is inside an object
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970); 
    }

}

// console.log(this); // refers to the window object
// thus you can alseo use this.alert or this.console.log

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());