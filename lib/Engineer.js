// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
}

// const newEngineer = new Engineer('David', 456, 'email@email.com', 'https://github.com')

// console.log(newEngineer.name)
// console.log(newEngineer.id)
// console.log(newEngineer.email)
// console.log(newEngineer.gitHub)