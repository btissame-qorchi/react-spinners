
import './App.css';
import {BounceLoader, BarLoaBarLoader, BeatLoader, BarLoader} from 'react-spinners'
import { SpinnerRoundFilled,SpinnerCircular, SpinnerDotted,SpinnerInfinity,SpinnerDiamond,SpinnerRoundOutlined,SpinnerRound } from 'spinners-react';
function App() {
  return (
    <div className="App">
      <BeatLoader color='blue' size={18}/>
      <BounceLoader color='green' size={50}/>
      <BarLoader color='gray' />
      <SpinnerCircular/>
      <SpinnerDotted/>
      <SpinnerInfinity/>
      <SpinnerDiamond/>
      <SpinnerRoundOutlined/>
      <SpinnerRound/>
      <SpinnerRoundFilled/>
    </div>
  );
}

export default App;
