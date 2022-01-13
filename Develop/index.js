// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'title',
          message: 'Please enter your project name!'
      }  
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
