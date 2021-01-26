// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}


const employeeOne = new Employee('Alice', 456789, 'email@email.com');


Employee.prototype.getName = function () {
    console.log(this.name)
}
Employee.prototype.getID = function () {
    console.log(this.id)
}
Employee.prototype.getEmail = function () {
    console.log(this.email)
}

// console.log(employeeOne);
console.log(employeeOne.name);
employeeOne.getName();

module.exports = Employee;