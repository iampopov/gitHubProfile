const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require('html-pdf');
const fs = require('fs');
const questions = [{
    message: "Enter your Github username",
    name: "username"
},
{
    type: "list",
    message: "what is your favorite color?",
    name: "color",
    choices: ['green', 'blue', 'pink', 'red']
}];
// const writeFileAsync = util.promisify(fs.writeFile);

let name;
let work;
let location;
let gitHubLink;
let blogLink;
let repos;
let followers;
let gitHubStars;
let following;
let color;

//const html = fs.readFileSync('index.html', 'utf8'); // what is this?

function promptUser () {
    return inquirer
    .prompt(questions)
    .then(function({username}) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        axios.get(queryUrl).then(response => {
            console.log(response);
        })
    })
}

function writeToFile(fileName, data) {

}

async function init() {
    try {

    const data = await promptUser();
    // console.log(data.color);

    // const html = generateHTML(data);

    // await writeFileAsync("index.html", html);
    
    // console.log("Success!")

    } catch (err) {
        console.log(err)
    };
}

init();
// fs.writeFile("repo.txt", gitArray.map(function(item) {
//     return item.name
//   }), err => {
//     if (err) throw err;
//     return console.log('saved');
//   }
//   )


// function writeToFile(fileName, data) {
 
// }

// function init() {inquirer
//     .prompt([questions]).then(function({username}) {
//         const queryUrl = `https://api.github.com/users/${username}`;
//         axios 
//           .get(queryUrl)
//           .then(function(res) {
//             let gitArray = res.data;
            
//             pdf.create(html, options).toFile('')
    
//           }) 
    
//     })}


