const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const initQuestions = [
    `Team Manager | Enter Name:`,
    `Team Manager | Enter Employee ID:`,
    `Team Manager | Enter Email Address:`,
    `Team Manager | Enter Office Number:`,
    `Would you like to add another employee?`,
];

const engineerQuestions = [
    `New Engineer | Enter Name:`,
    `New Engineer | Enter Employee ID:`,
    `New Engineer | Enter Email Address:`,
    `New Engineer | Enter GitHub URL:`,
    `What would you like to do next?`,
]

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: initQuestions[0],
                name: "manager-name",
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
                message: initQuestions[1],
                name: 'manager-id',
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
                message: initQuestions[2],
                name: 'manager-email',
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
                message: initQuestions[3],
                name: 'manager-office',
                validate: function (answer) {
                    if (answer === "") {
                        return console.log("An office number is required")
                    } else {
                        return true;
                    }

                }
            },
            {
                type: 'list',
                message: initQuestions[4],
                name: 'addMore',
                choices: ['Add an Engineer', 'Add an Intern', 'Save and Quit Application']
            },
            {
                type: 'input',
                message: engineerQuestions[0],
                name: "engineer-name",
                // WHEN - this question only runs when the choice to addMore = Add an Engineer
                when: function (answers) {
                    return answers.addMore === 'Add an Engineer'
                },
                validate: function (answer) {
                    if (answer === "") {
                        return console.log("A Manager's name is required")
                    } else {
                        return true;
                    }

                }

            },
        ]).then((response) => {
            // Save information
        })
}

// function call to initialize program
init();
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


