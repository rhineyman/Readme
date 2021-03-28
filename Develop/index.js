// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },

    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'What is the project description?',
        name: 'description'
    },

    {
        type: 'input',
        message: 'How is the application installed?',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'How is the application used?',
        name: 'usage'
    },

    {
        type: 'list',
        message: 'Which license should the project use?',
        name: 'license',
        choices: ['GPL', 'BSD', 'MIT', 'Apache', 'N/A']
    },

    {
        type: 'input',
        message: 'What were your testing procedures?',
        name: 'testing'
    },

    {
        type: 'input',
        message: 'Please list any contributors (github username)',
        name: 'contributors'
    },

    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email'
    }
];

// TODO: Create a function to write README file

function generator(answers) {
    return `# ${answers.title}
${answers.license}

## Table of Contents
- [Description](#description) 
- [Usage](#usage)
- [Tests](#tests)
- [Installation](#installation) 
- [contributors](#contributors)
- [contact](#contact)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Tests
${answers.testing}

## Contributors
${answers.contributors}

## Contact
Email me at ${answers.email}.

Visit my GitHub at https://github.com/${answers.username}
    
`
}

function createTable() {

}



// TODO: Create a function to initialize app
function init() {    
    inquirer.prompt(questions)
    .then(function(answers){
        let generateMarkup = generator(answers)
        fs.writeFile("README.md", generateMarkup, () => {console.log("wrote to file")}); 
    })
}

// Function call to initialize app
init();
