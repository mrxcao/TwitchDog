const { exec } = require('child_process');
const player = require('play-sound')({});

function textToSpeech(text) {
    const command = `${process.env.PIPER_EXE_PATH} --model ${process.env.PIPER_ONNX_PATH} --output-file ./audio/output.wav`;
    
    exec(command, (error) => {
        if (!error) {
            player.play('./audio/output.wav', (err) => {
                if (err) console.error('Erro ao reproduzir áudio:', err);
            });
        } else {
            console.error('Erro ao gerar áudio:', error);
        }
    });
    
}

module.exports = textToSpeech;