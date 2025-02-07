const axios = require('axios');
const fs = require('fs');
const config = require('../config.json')

const API_KEY = process.env.OPENAI_API_KEY;



async function synthesizeSpeech(text) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/audio/speech',
            {
                model: config.voice.model,
                voice: config.voice.name, 
                pitch: config.voice.pitch,
                rate: config.voice.rate,               
                // voices: nova shimmer echo onyx fable alloy ash sage coral         
                input: text
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                responseType: 'arraybuffer'
            }
        );

        const filePath = './audio/output.mp3';
        fs.writeFileSync(filePath, response.data);
        // console.log('🔊 Áudio gerado com sucesso!');
        return filePath;
    } catch (error) {
        console.error("❌ Erro ao gerar áudio:", error.response ? error.response.data.toString() : error.message);
        return null;
    }
}

module.exports = synthesizeSpeech;
