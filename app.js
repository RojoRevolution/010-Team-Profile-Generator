const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerQuestions = [
    {
        type: 'input',
        message: 'Team Manager | Enter Name:',
        name: "managerName",
        validate: function (answer) {
            if (answer === "") {
                return console.log("A Manager's name is required")
            } else {
                return true;
            }

        }

    },
    {
        type: 'input',
        message: 'Team Manager | Enter Employee ID:',
        name: 'managerId',
        validate: function (answer) {
            if (answer === "") {
                return console.log("An employee ID is required")
            } else {
                return true;
            }

        }
    },
    {
        type: 'input',
        message: 'Team Manager | Enter Email Address:',
        name: 'managerEmail',
        validate: function (answer) {
            if (answer === "") {
                return console.log("An email address is required")
            } else {
                return true;
            }

        }
    },
    {
        type: 'input',
        message: 'Team Manager | Enter Office Number:',
        name: 'managerOffice',
        validate: function (answer) {
            if (answer === "") {
                return console.log("An office number is required")
            } else {
                return true;
            }

        }
    },
];
// Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer | Enter Name:',
        name: "engineerName",
        validate: function (answer) {
            if (answer === "") {
                return console.log("A Manager's name is required")
            } else {
                return true;
            }

        }

    },
    {
        type: 'input',
        message: 'Engineer | Enter Employee ID:',
        name: 'engineerId',
        validate: function (answer) {
            if (answer === "") {
                return console.log("An employee ID is required")
            } else {
                return true;
            }

        }
    },
    {
        type: 'input',
        message: 'Engineer | Enter Email Address:',
        name: 'engineerEmail',
        validate: function (answer) {
            if (answer === "") {
                return console.log("An email address is required")
            } else {
                return true;
            }

        }
    },
    {
        type: 'input',
        message: 'Engineer | Enter Github URL:',
        name: 'gitHub',
        validate: function (answer) {
            if (answer === "") {
                return console.log("A github URL is required")
            } else {
                return true;
            }

        }
    },
];
// Intern Questions
const internQuestions = [
    {
        type: 'input',
        message: 'Intern | Enter Name:',
        name: "internName",
        validate: function (answer) {
            if (answer === "") {
                return console.log("A Manager's name is required")
            } else {
                return true;
            }

        }

    },
    {
        type: 'input',
        message: 'Intern | Enter Employee ID:',
        name: 'internId',
        validate: function (answer) {
            if (answer === "") {
                return console.log("An employee ID is required")
            } else {
                return true;
            }

        }
    },
    {
        type: 'input',
        message: 'Intern | Enter Email Address:',
        name: 'interEmail',
        validate: function (answer) {
            if (answer === "") {
                return console.log("An email address is required")
            } else {
                return true;
            }

        }
    },
    {
        type: 'input',
        message: `Intern | Enter the Intern's School:`,
        name: 'internSchool',
        validate: function (answer) {
            if (answer === "") {
                return console.log("A github URL is required")
            } else {
                return true;
            }

        }
    },
];


// https://github.com/JeffQuit/OOP---Team-Profile-Generator/blob/master/app.js

//TO DO: 
// Function 1: Create a function that only asks about addig more team members - us if else statements
// Function 2: Create a function that then runs enginneer or intern questions based on answer to the above function -- at the end of these questions, we re-run the above functio that asks if they want to add more team members -- When No or Quit is chosen in function 1 - stop inquirer and run a function that renders the HTML


// function call to initialize program
// init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


