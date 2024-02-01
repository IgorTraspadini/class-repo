const inq = require('inquirer');
const file = require('fs');

inq
  .prompt(
    [{
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'languages',
      choices: [
        'Portigues',
        'English',
        'Spanish',
        'German',
        'Italian',
        'Latin'
      ]
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'communication',
      choices: [
        'e-mail',
        'text',
        'phone',
        'face to face'
      ]
    }
    ])
  .then((response) => response.username && response.languages && response.communication 
  ? file.appendFile('data.json',JSON.stringify(response, null, 4), (err) => err ? console.error(err) : console.log('Commit logged!')) 
  : console.log("Empry fields")
  );