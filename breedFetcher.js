const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";


const fetchBreedDescription = (breedName, callback) => {
  request(url + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (!error) {
      if (data.length === 0) {
        callback(null, `${breedName} not found`);
      } else {
        callback(null, data[0].description.trim());
      }
    } else {
      callback(error);
    }
  });
};


module.exports = { fetchBreedDescription };