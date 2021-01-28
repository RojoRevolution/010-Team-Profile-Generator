const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require('util')
const path = require("path");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Array holds all answers from Inquirer Prompts
const teamMembers = [];

// Array Hold all the Manager Questions used for Inquirer
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

// Array Hold all the Engineer Questions used for Inquirer
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

// Array Hold all the Intern Questions used for Inquirer
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
        name: 'internEmail',
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

// Next Question is the prompt used to add more employees or quit the application
const nextQuestions = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: "doNext",
        choices: ['Add an Engineer', 'Add an Intern', 'Finalize Team and End Program']

    },
]


// Function begins the process; asks the Manager prompts 
function init() {
    inquirer.prompt(managerQuestions).then((managerResponse) => {
        let manager = new Manager(
            managerResponse.managerName,
            managerResponse.managerId,
            managerResponse.managerEmail,
            managerResponse.managerOffice
        );
        //push results to array
        teamMembers.push(manager)
        // Runs addMore Prompts
        addMore();
    })
}
// Function runs the engineer prompts 
function addEngineer() {
    inquirer.prompt(engineerQuestions).then((engResponse) => {
        let engineer = new Engineer(
            engResponse.engineerName,
            engResponse.engineerId,
            engResponse.engineerEmail,
            engResponse.gitHub
        );
        // pushes results to array
        teamMembers.push(engineer)
        // Runs the AddMore Prompts
        addMore();

    })
}
// function runs the intern prompts
function addIntern() {
    inquirer.prompt(internQuestions).then((intResponse) => {
        let intern = new Intern(
            intResponse.internName,
            intResponse.internId,
            intResponse.internEmail,
            intResponse.internSchool,
        );
        // pushes results to array
        teamMembers.push(intern);
        // runs the Addmore Prompts
        addMore();
    })
}

// Function gives three choices: Add new engineer, add new intern, or end program
function addMore() {
    inquirer.prompt(nextQuestions).then((choice) => {
        if (choice.doNext === 'Add an Engineer') {
            addEngineer();
        } else if (choice.doNext === 'Add an Intern') {
            addIntern();
        } else {
            console.log('//////////////////')
            console.log('APPLICATION ENDING')
            console.log('//////////////////')
            renderAndOutput(teamMembers);
        }
    })
}

// function call to initialize program
init();

//an Async working with util.prosify on line 9
async function renderAndOutput(file) {
    const htmlPage = render(file);

    await writeFileAsync(outputPath, htmlPage);
}

