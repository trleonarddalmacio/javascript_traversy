class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Heelo there ${this.firstName} ${this.lastName}!`
    }

    calculateAge() {
         const diff = Date.now() - this.birthday.getTime();
         const ageDate = new Date(diff);
         return Math.abs(ageDate.getUTCFullYear - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);