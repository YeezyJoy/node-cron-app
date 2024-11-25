const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db')

cron.schedule('*/30 * * * * *', syncDB);
console.log('Iniciando CRON TICKER');