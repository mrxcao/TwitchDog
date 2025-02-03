
require('dotenv').config();

const client = require('./services/twitchClient');
const textToSpeech = require('./services/tts');

client.on('message', (channel, tags, message, self) => {
    if (self) return; 
    console.log(`${tags.username}: ${message}`);
    textToSpeech(message); 
});

