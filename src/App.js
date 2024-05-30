import ButtonGrid  from './drum/button_grid.js';
import Controls from './drum/controls.js';
import './App.css';
import { useState } from 'react';
import Screen from './drum/digital-screen.js';

const App = () =>{

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);
  const [text, setText] = useState('on');

  return(
  <>
  
  <div className="container" id="drum-machine">
    <div className="main-container">
      <div className="container1">
        <ButtonGrid power={power} volume={volume} setText={setText} />
      </div>
      <div className="container2">
        <Controls power={power} setPower={setPower} volume={volume} setVolume={setVolume} setText={setText}/>
        <Screen text={text} />
      </div>
    </div>
  </div>
  <footer className='footer'>
  <p>This drum machin was designed and coded by <a href='https://github.com/ArafatQz'><b>Arafat Gamzawe</b></a></p>
</footer>
</>
);
}
export default App;
