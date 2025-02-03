const tmi = require('tmi.js');

console.log(` :: Iniciando bot... ${process.env.BOT_NAME}`);
const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.BOT_NAME,
        password: process.env.ACESS_TOKEN
    },
    channels: [ process.env.CHANNEL_NAME ]
});

client.connect()
    .then(() => console.log(`:: Bot conectado ao canal: ${process.env.CHANNEL_NAME }`))
    .catch((err) => console.error('Erro ao conectar:', err));

module.exports = client;