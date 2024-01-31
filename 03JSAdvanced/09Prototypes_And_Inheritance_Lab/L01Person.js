function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "fullName", {
        set: function (value) {
            const [firstName, lastName] = value.split(' ');
            if (typeof firstName === 'string' && typeof lastName === 'string') {
                this.firstName = firstName;
                this.lastName = lastName;
            }
        },
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    });
}

// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName);
// person.firstName = "George";
// console.log(person.fullName);
// person.lastName = "Peterson";
// console.log(person.fullName);
// person.fullName = "Nikola Tesla";
// console.log(person.firstName);
// console.log(person.lastName);

// let person = new Person("Albert", "Simpson");
// console.log(person.fullName);
// person.firstName = "Simon";
// console.log(person.fullName);
// person.fullName = "Peter";
// console.log(person.firstName);
// console.log(person.lastName);