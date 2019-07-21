const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4b2ab691381d11d002bd3de182eea273&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
}