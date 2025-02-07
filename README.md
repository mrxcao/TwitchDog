# TwitchDog

This project reads the **Twitch live chat** in real-time, converts the chat text into **audio**, and plays it automatically for the content creator using **OpenAI's Text-to-Speech (TTS)** API.

## Features

- **Real-time Twitch Chat Reading**: The bot connects to Twitch chat to read messages.
- **Text-to-Audio Conversion**: Uses OpenAI's TTS API to generate audio from the text.
- **Audio Playback**: The generated audio is automatically played for the content creator, allowing them to listen to the chat without needing to read it.

## Technologies

- **Node.js**: Backend to process and integrate with Twitch.
- **Twitch IRC/Chat API**: To capture messages from the Twitch chat.
- **OpenAI API**: For text-to-speech conversion.
- **ffmpeg**: For audio manipulation and duration calculation (if necessary).
- **dotenv**: To securely manage environment variables.

## Prerequisites

1. **Node.js** (LTS version recommended).
2. **Twitch Account** (with access token for the chat).
3. **OpenAI API Key** (to use the TTS functionality).
4. **ffmpeg** installed (if needed for audio manipulation).

## How to Use

### 1. Initial Setup

Clone the repository to your local environment:

```bash
git clone https://github.com/mrxcao/TwitchDog.git
cd twitch-tts
```
### 2. Install Dependencies

Run the following command to install the dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` and `configure.json` files at the root of the project and configure the necessary variables, see `.env.exemple` and `configure.json.exemple` for reference:


- **TWITCH_OAUTH_TOKEN**: Generate an OAuth token for your bot (you can use [Twitch Token Generator](https://twitchtokengenerator.com)).
- **TWITCH_CLIENT_ID**: Create an application at the [Twitch Developer Console](https://dev.twitch.tv/console/apps).
- **OPENAI_API_KEY**: Generate your API key from [OpenAI](https://platform.openai.com/).

### 4. Run the Project

To run the server, execute:

```bash
npm start
```

The bot will connect to Twitch chat, listen for messages, and generate audio for each new message.

### 5. Audio Requirements

Ensure your system has a configured audio player, and **ffmpeg** is installed for audio file manipulation if necessary.

## Customization

### Changing the TTS Voice

To change the voice used for TTS, edit the configuration in the code where the voice model is specified. Available voices include:

- **OpenAI**: `nova`, `shimmer`, `echo`, `onyx`, etc.

Modify the `voice` field in `config,json` file.

### Adjusting Speech Speed and Pitch

You can adjust the **rate** (speed) and **pitch** (tone) in the API call to modify  `config,json` file.


## Example Usage

With the server running, write anything in the Twich chat that the server will read, generate the .mp3 file in the audio folder and execute the file

## Contributions

Feel free to contribute to this project! If you want to add new features or fix any bugs, open an **issue** or a **pull request**.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
