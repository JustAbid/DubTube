// Content script for DubTube
console.log("Content script loaded.");

// Function to capture audio from the YouTube video
function captureAudio() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    const mediaRecorder = new MediaRecorder(videoPlayer.captureStream());
    const chunks = [];

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      const audioURL = URL.createObjectURL(blob);

      // Call speech recognition function
      await performSpeechRecognition(audioURL);
    };

    // Start recording when the video starts playing
    videoPlayer.addEventListener('play', () => {
      mediaRecorder.start();
    });

    // Stop recording when the video pauses
    videoPlayer.addEventListener('pause', () => {
      mediaRecorder.stop();
    });
  }
}

// Function to perform speech recognition
async function performSpeechRecognition(audioURL) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ audioURL: audioURL })
  };

  try {
    const response = await fetch('YOUR_SPEECH_RECOGNITION_API_ENDPOINT', options);
    if (response.ok) {
      const transcription = await response.json();
      console.log('Transcription:', transcription);
      
      // Call translation function
      await performTranslation(transcription);
    } else {
      throw new Error('Speech recognition failed');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to perform translation
async function performTranslation(text) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text })
  };

  try {
    const response = await fetch('YOUR_TRANSLATION_API_ENDPOINT', options);
    if (response.ok) {
      const translatedText = await response.json();
      console.log('Translated text:', translatedText);
      
      // Call text-to-speech function
      await performTextToSpeech(translatedText);
    } else {
      throw new Error('Translation failed');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to perform text-to-speech
async function performTextToSpeech(text) {
  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': 'YOUR_ELEVENLABS_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text })
  };

  try {
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/boH4Faod8PX62f2Ncfhf?optimize_streaming_latency=1', options);
    if (response.ok) {
      const audio = await response.json();
      console.log('Synthesized audio:', audio);
      
      // Play the synthesized audio
      const audioPlayer = new Audio(audio.audio_url);
      audioPlayer.play();
    } else {
      throw new Error('Text-to-speech conversion failed');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function to capture audio when the page loads
window.addEventListener('load', () => {
  captureAudio();
});
