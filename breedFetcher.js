// require the request module
const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatagpi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      console.log(`the requested breed, ${breedName} was not found.`);
    } else {
      console.log(breed.description);
    }
  }
});