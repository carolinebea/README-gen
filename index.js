// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown')
// const { default: inquirer } = require("inquirer");
const inquirer = require('inquirer');
const fs = require('fs');
// const { message } = require('statuses');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Name the project title.',
      name: 'title'
    },
    {type: 'input',
     message: 'How would you describe your app?',
     name: 'description'
    },
    {
      type: 'input',
      message: 'How do you install your app?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How do you use your app?',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'Any contributions?',
      name: 'contributions'
    },
    {
      type: 'input',
      message: 'Any tests?',
      name: 'tests'
    },
    {
      type: 'list',
      message: 'What license?',
      name: 'license',
      choices: ['MIT', 'Apache', 'Mozilla', 'ISC', 'none']
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'Github'
    }

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt (questions).then(data => {
  console.log(data)
  fs.writeFileSync('READMEtest.md', generateMarkdown(data))
})

}

// Function call to initialize app
init();
