
require('dotenv').config();

const client = require('./services/twitchClient');
const synthesizeSpeech = require('./services/tts');
const player = require('play-sound')();


client.on('message', async (channel, tags, message, self) => {
    if (self) return; 
    console.log(`${tags.username}: ${message}`);
    const audioFile = await synthesizeSpeech(`${tags.username} disse: ${message}`);
    if (audioFile) {
        player.play(audioFile, (err) => {
            if (err) console.error('❌ Erro ao tocar áudio:', err);
        });
    }
    
});
