const request = require('request'); 
const breed = process.argv.slice(2);
let apiSearch = {
  url: `https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`,
  headers: {
    'x-api-key': '7e2cb31f-5f9d-4b4b-b872-dd2b2b7a2b9a'
  }
};

request(apiSearch,  (error, response, body) => {
  if(!error) {
  
    if(body) {
      const data = JSON.parse(body);
      console.log(data[0].description);
      
    }
  
  } else {
    console.error(error);
  }

});

