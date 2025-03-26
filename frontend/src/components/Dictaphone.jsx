import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

const Dictaphone = () => {
  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // Change language if needed
    speech.rate = 1; // Speed (0.5 - 2)
    speech.pitch = 1; // Pitch (0 - 2)
    window.speechSynthesis.speak(speech);
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const sendText = async (text) => {
    const data = {
      transcript: text,
    };
    console.log("data", data);

    try {
      axios
        .post(
          "http://localhost:3000/api/speech-service",
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("debug from the front end", res.data.transcript);
          speakText(res.data.transcript);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <button onClick={() => sendText(transcript)}>Send to Backend</button>
    </div>
  );
};
export default Dictaphone;
