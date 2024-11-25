const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db')


console.log('Iniciando CRON TICKER');
// Le pasamos directamente la funcion al argumento del cron
cron.schedule('*/30 * * * * *', syncDB);

// Con la sintaxis de `flecha`
cron.schedule('*/30 * * * * *', () => {
    console.log(`Proceso 2 ${new Date().toISOString()}`)
});

// Con la sintaxis de `function`
cron.schedule('*/30 * * * * *', function () {
    console.log(`Proceso 3 ${new Date().toISOString()}`)
});

console.log('Iniciando CRON TICKER MODO DEV');
