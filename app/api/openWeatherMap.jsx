var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3afd68fcb32b20c9b9b09d12c822db0a&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(response){
      if (response.data.cod && response.data.message){
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function(response){
      throw new Error(response.data.message);
    });
  }
}
