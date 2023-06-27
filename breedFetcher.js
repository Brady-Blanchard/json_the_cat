// require the request module
const request = require('request');

// defines the fetchBreedDescription function that takes a breed name and a callback function
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const breed = data[0];
      if (!breed) {
        callback(`the requested breed, ${breedName} was not found.`, null);
      } else {
        callback(null, breed.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };