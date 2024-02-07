function toStringExtension() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            const result = super.toString();
            return result.slice(0, result.length - 1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            const result = super.toString();
            return result.slice(0, result.length - 1) + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

// let classes = toStringExtension();
// let Person = classes.Person;
// let Teacher = classes.Teacher;
// let Student = classes.Student;

// let t = new Teacher("Ivan",'ivan@ivan.com',"Graphics");

// console.log(t.toString());