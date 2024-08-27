import { useRef, useEffect } from "react";
import "./App.css";

import Hls from "hls.js";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("http://master.letio.com/io/?gs=8574&dest=decibeles1");
      hls.attachMedia(audioRef.current);
    } else if (audioRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      audioRef.current.src =
        "http://master.letio.com/io/?gs=8574&dest=decibeles1";
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} controls />
    </>
  );
}

export default App;
