const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require('html-pdf');

const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8'); // what is this?

inquirer
.prompt([{
    message: "Enter your Github username",
    name: "username"
},
{
    type: "list",
    message: "what is your favorite color?",
    name: "color",
    choices: ['green', 'blue', 'pink', 'red']
}])

.then(function({username}) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios 
      .get(queryUrl)
      .then(function(res) {
        let gitArray = res.data;
        
        pdf.create(html, options).toFile('')

      }) 

})

// fs.writeFile("repo.txt", gitArray.map(function(item) {
//     return item.name
//   }), err => {
//     if (err) throw err;
//     return console.log('saved');
//   }
//   )

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

//init();
