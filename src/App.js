import logo from './logo.svg';
import { useRef ,useState} from 'react';
import './App.css';
import Webcam from "react-webcam"
import QrReader from 'modern-react-qr-reader'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
function App() {
  const [data, setData] = useState("Not Found");
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const webref = useRef(null);
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
  }
  return (
    <div>
    {/* <QrReader
      delay={300}
      onError={handleErrorFile}
      onScan={handleScanWebCam}
      constraints={ {facingMode: 'environment'} }
      style={{ width: '70%' }}
    />
    <p>{scanResultWebCam}</p> */}
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
  </div>
  );
}

export default App;
