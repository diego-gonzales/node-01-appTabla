const argv = require('yargs')
                    .option({
                        'b': {
                            alias: 'base',
                            demandOption: true,
                            describe: 'Base para crear tabla de multiplicar',
                            type: 'number'
                        },
                        'm': {
                            alias: 'mostrar',
                            default: false,
                            describe: 'Mostrar lista (tabla de multiplicar) en consola',
                            type: 'boolean'
                        },
                        'l': {
                            alias: 'limite',
                            default: 12,
                            describe: 'Número hasta el cual se hará la multiplicación',
                            type: 'number'
                        }
                    })
                    .check( (argv, options) => {
                        if (isNaN(argv.base)) {
                            throw 'La base debe ser un número'
                        };

                        return true; // Cuando no ha ningun error
                    })
                    .argv;


module.exports = argv;