//import { useRef, useEffect } from "react";
import "./App.css";

// import Hls from "hls.js";

function App() {
  // const audioRef = useRef(null);

  // useEffect(() => {
  //   if (Hls.isSupported()) {
  //     const hls = new Hls();
  //     hls.loadSource("http://master.letio.com/io/?gs=8574&dest=decibeles1");
  //     hls.attachMedia(audioRef.current);
  //   } else if (audioRef.current.canPlayType("application/vnd.apple.mpegurl")) {
  //     audioRef.current.src =
  //       "http://master.letio.com/io/?gs=8574&dest=decibeles1";
  //   }
  // }, []);

  const signal = "https://26683.live.streamtheworld.com/TR_BUCARAMANGAAAC.aac"

  return (
    <>
      <audio preload controls autoPlay>
        <source src={signal} type="audio/aac" />
      </audio> 
    </>
  );
}

export default App;
