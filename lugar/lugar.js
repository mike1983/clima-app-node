const axios = require('axios');
const getLugarLatLng = async(direccion2) => {
    const encodedUrl = encodeURI(direccion2); /* esta funcion es para codificar la direccion por los espacios en blanco que pueda tener por ejemplo en node app -d "new york" trae un espacio en blanco*/
    //console.log(encodedUrl);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '08b5188bacmsh64327fa1f325cc3p141db8jsn72a2d08fcc0c' }
    });
    /*instance.get().
    then(resp => {
            console.log(resp.data.Results[0]);
        })
        .catch(err => {
            console.log('Error', err);
        });*/
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name; //los nombres , lat y  lon es como vienen en la respuesta json del servicio rest
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng //aqui no le asigno directamente a las propiedades por que en el emacscript 6 se asignansolas si hay variables con el mismo nombre
    }
}
module.exports = {
    getLugarLatLng
}