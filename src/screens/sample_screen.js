import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SampleScreen = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [error, setError] = useState(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  return (
    <div>
      <button onClick={handleStartListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      {error && <p>This browser doesn't supported voice feature ..</p>}
      <p>{transcript}</p>
    </div>
  );
};
export default SampleScreen;
