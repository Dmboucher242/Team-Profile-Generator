// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const idArray = [];
const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const dyani = new Employee ("Dyani", "222", "gmail")
console.log(dyani.getName());

function appMenu() {
    function createManager() {
        const questions = [
            {
                type: "input",
                name: "username",
                message: "What is your Github username?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your ID?"
            },
            {
                
            }
        ]
        // promp questions from inquirer
        // take answers from questions and create new instance of class
        // push instance to empty array 
        // run createTeam
    }
    function createTeam() {
        //inquirer prompt/ choose team
        
    }
    function addEngineer() {
        
    }
    function addIntern() {
        
    }
    function buildTeam() {
        
    }
    createManager()
}
appMenu();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

