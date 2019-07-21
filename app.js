const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv; // esto es para poner comandos directamente en la aplicacin por ejemplo node app -d Madrid España en lugar de command
//console.log(argv.direccion);
//lugar.getLugarLatLng(argv.direccion).then(console.log); // una funcion async siempre regresa una promesa

/*clima.getClima(32.490002, -115.010002)
    .then(console.log)
    .catch(console.log);*/
const getinfo = async(direccion) => {
        try {
            const coords = await lugar.getLugarLatLng(direccion);
            const temp = await clima.getClima(coords.lat, coords.lng);
            // return { temp }
            return `El clima en ${direccion} es de ${temp}`;
        } catch (e) {
            return `No se pudo determinar el clima de ${direccion}`
        }
    }
    /*getinfo(argv.direccion).then(datos => {
        console.log(`El clima de ${argv.direccion} es de ${datos.temp}`);
    }).catch(err => { console.log(err); });
    */
getinfo(argv.direccion).then(console.log).catch(console.log);