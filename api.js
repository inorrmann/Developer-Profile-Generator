const fs = require("fs");

const queryUrl = `https://api.github.com/users/${username}`;

// let headshot;
// let fullName;
// let location;
// let company;
// let website;
// let bio;
// let repos;
// let stars;
// let followers;
// let following;

// headshot = response.avatar_url;
// fullName = response.name;
// location = response.location;
// company = response.company;
// website = response.blog;
// bio = response.bio;
// repos = response.public_repos;
// stars = response.public_gists;
// followers = response.followers;
// following = response.following;

const apiCall = () => {
    axios.get(queryUrl).then(response => {
        const parsedResponse = JSON.parse(response);
    });
     
    const stringResponse = JSON.stringify(parsedResponse, null, 2);

    fs.writeFile("profile.json", stringResponse, (err) => {
        if (err) {
            throw err;
        }
    });
}

module.exports = {
    apiCall: apiCall
}
