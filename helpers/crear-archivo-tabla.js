// Importaciones
const fs = require('fs');
const colors = require('colors');


// Funciones

// con solo poner 'async' acá entonces ya se hace una promesa
const crearTablaMultiplicar = async ( base = 5, mostrar, limite ) => {

    try {
        let salida = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        };

        if (mostrar) {
            console.log('============'.rainbow)
            console.log(`Tabla del ${base}`.trap)
            console.log('============'.rainbow)
            console.log(salida);
        };

        fs.writeFileSync(`output/tabla-${base}.txt`, salida)
        // Este se ejecuta asincronicamente
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     // se dispará el error por ejemplo cuando no se tenga permisos a la carpeta
        //     if (err) throw err;

        //     console.log(`Archivo 'tabla-${base}.txt' se creó correctamente`);
        // })

        return `Archivo tabla-${base}.txt se creó existosamente`.italic.bold.yellow;

    } catch (error) {
        throw error;
    };
};


module.exports = {
    crearTablaMultiplicar
};