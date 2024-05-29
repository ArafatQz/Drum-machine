import React, { useCallback, useEffect } from "react";
import "./drum_style.css";

const drumPads = [
  {
    key: "Q",
    id: "Heater-1",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n'-Hat",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

const ButtonGrid = ({ setText, power, volume }) => {
  const playSound = useCallback((key, id) => {
    const audioElement = document.getElementById(key);
    
    if (audioElement && power) {
      audioElement.currentTime = 0;
      audioElement.volume = volume / 100; 
      audioElement.play().catch(error => {
        console.error("Audio playback failed: ", error);});
      
      if (setText) {
        setText(id);
      }
    }
  }, [power, volume, setText])

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pad = drumPads.find((p) => p.key === e.key.toUpperCase());
      if (pad) {
        if(power) {playSound(pad.key, pad.id);}
        
        
        const button = document.getElementById(pad.id);
        if (button) {
          button.classList.add("active");
          button.addEventListener("transitionend", () => {
            button.classList.remove("active");
          }, { once: true });
        }
      }
    };
  
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [playSound, power]);

  return (
    <div className="container2">
      <div id="drum-machine">
        <div className="pad-container">
          <div className="tri">
            {drumPads.slice(0, 3).map((pad) => (
              <div key={pad.key} className="bttn">
                <button
                  id={pad.id}
                  className="buttton drum-pad"
                  onClick={() => playSound(pad.key, pad.id)}
                >
                  {pad.key}
                  <audio className="clip" id={`${pad.key}`} src={pad.src} />
                </button>
              </div>
            ))}
          </div>
          <div className="tri">
            {drumPads.slice(3, 6).map((pad) => (
              <div key={pad.key} className="bttn">
                <button
                  id={pad.id}
                  className="buttton drum-pad"
                  onClick={() => playSound(pad.key, pad.id)}
                >
                  {pad.key}
                  <audio className="clip" id={`${pad.key}`} src={pad.src} />
                </button>
              </div>
            ))}
          </div>
          <div className="tri">
            {drumPads.slice(6, 9).map((pad) => (
              <div key={pad.key} className="bttn">
                <button
                  id={pad.id}
                  className="buttton drum-pad"
                  onClick={() => playSound(pad.key, pad.id)}
                >
                  {pad.key}
                  <audio className="clip" id={`${pad.key}`} src={pad.src} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGrid;
