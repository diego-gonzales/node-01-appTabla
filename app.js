const argv = require('./config/yargs');
const { crearTablaMultiplicar } = require("./helpers/crear-archivo-tabla");

console.clear();

// console.log(process.argv); // Sin yargs, con lo propio de Node

// console.log(argv); // Con yargs
// console.log('obteniendo la base con yargs: ', argv.base);

// Con ayuda de la libreria Yargs ya no necesitaria hacer todo esto
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , numBase = 5] = arg3.split('=');
// console.log(numBase)

// Desde yargs
const { base, mostrar, limite } = argv;

crearTablaMultiplicar(base, mostrar, limite)
    .then( resp => console.log(resp) )
    .catch( err => console.log(err) );