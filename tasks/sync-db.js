//fs = file system, es para mandar el log hacia un archivo
const fs = require('fs');
//path permite el uso de un directorio, para encontrar el archivo al que voy a enviar el log
const path = require('path');
//definir ubicacion del .txt
const logPath = path.join(__dirname, 'sync_logs.txt') //logs = subdirectorio




let times = 0

module.exports = {
    syncDB: () => {
        //variable de hora, variable tipo Date, dentro de synDB para que se actualice 
        const fecha = new Date();
        const hora = fecha.toLocaleTimeString();
        times++
        const logMessage = `Tick cada 30 secs, Hora: ${hora}\n`;
        fs.appendFile(logPath, logMessage, (err) => {
            if (err) {
                console.error('Error escribiendo el log:', err);
            }
            return times
        });
       
    }

}