// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'title',
          message: 'Please enter your project name!',
          validate: input => {
              if (input){
                  return true;
              } else {
                  console.log("Please enter a project title");
                  return false;
              }
          }
      }, 
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project!',
        validate: input => {
            if (input){
                return true;
            } else {
                console.log("Please enter a project description");
                return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the steps required to install your project!',
        validate: input => {
            if (input){
                return true;
            } else {
                console.log("Please enter your installtion instructions");
                return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter intructions on how to use this application!',
        validate: input => {
            if (input){
                return true;
            } else {
                console.log("Please enter usage intructions");
                return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about how to contribute to the repository? If none, press Enter',
    },  
    {
        type: 'input',
        name: 'test',
        message: 'What commands can be run to test the application?',
        validate: input => {
            if (input){
                return true;
            } else {
                console.log("Please enter a test command, ex:npm test");
                return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub Username!',
        validate: input => {
            if (input){
                return true;
            } else {
                console.log("Please enter a username");
                return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email!',
        validate: input => {
            if (input){
                return true;
            } else {
                console.log("Please enter a email");
                return false;
            }
        }
    },
      {
          type: 'list',
          name: 'license',
          message: 'What kind of license does your project have?',
          choices: ['BSD', 'MIT', 'GPL'],
          validate: input => {
              if (input){
                  return true;
              } else {
                  console.log("Please select a license");
                  return false;
              }
          }
          
      }
    ])
};

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been generated!");
        }
    })
};
questions()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err =>{
    console.log(err);
})



