const generateHTML = require("./generateHTML.js");
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

githubInfo();

async function githubInfo() {
    try {
        const { username, color } = await inquirer.prompt([
            {
                type: "input",
                message: "What is your Github username?",
                name: "username"
            },
            {
                type: "list",
                message: "Choose a color:",
                name: "color",
                choices: [
                    "red",
                    "blue",
                    "yellow",
                    "green",
                    "orange",
                    "violet",
                    "grey"
                ]
            }]);
        const { data } = await axios.get(`https://api.github.com/users/${username}`);
        // console.log(data);
        console.log(data.public_repos);
    } catch (err) {
        console.log(err);
    }
}


// inquirer.prompt([
//     {
//         type: "input",
//         message: "What is your Github username?",
//         name: "username"
//     },
//     {
//         type: "list",
//         message: "Choose a color:",
//         name: "color",
//         choices: [
//             "red",
//             "blue",
//             "yellow",
//             "green",
//             "orange",
//             "violet",
//             "grey"
//         ]
//     }])
//     .then(({ username, color }) => {
//         // console.log(username);
//         // console.log(color);
//         const queryUrl = `https://api.github.com/users/${username}`;
//         // console.log(queryUrl);

//         axios.get(queryUrl).then(response => {
//             // console.log(response.data);

//             const responseJSON = JSON.stringify(response.data, null, 2);
//             console.log(responseJSON);
//             fs.writeFile("profile.json", responseJSON, (err) => {
//                 if (err) {
//                     throw err;
//                 }
//                 console.log("Success!");
//             });
//         });
//     })


// font awesome
// <i class="fab fa-github"></i>
// <i class="fas fa-map-marked-alt"></i>
// <i class="fas fa-globe"></i> 
