import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import Webcam from "react-webcam"
function App() {
  const webref = useRef(null)
  return (
    <div className="App">
      React Webcam
      <Webcam ref={webref}/>
    </div>
  );
}

export default App;
