import logo from './logo.svg';
import { useRef ,useState} from 'react';
import './App.css';
import Webcam from "react-webcam"
import QrReader from 'modern-react-qr-reader'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Modal from 'react-modal';
import SoundTick from "./assets/mixkit-click-melodic-tone-1129.wav"
function App() {
  const [data, setData] = useState("Not Found");
  const [scanResultQR, setScanResultQR] =  useState('');
  const [scanResultBarcode, setScanResultBarcode] =  useState('');
  const [result,setResult] = useState("")
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const [modalBarcodeIsOpen,setModalBarcodeIsOpen] = useState(false)
  const webref = useRef(null);
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setResult(result);
      setModalIsOpen(false)
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"80%",
      height:"60%"
    },
  };
  return (
    <div style={{}}>
    <h1 style={{marginLeft:"25%"}}>Hello world</h1>
    <div style={{marginLeft:"100px"}}>
      <button onClick={()=>{setModalIsOpen(true)}}>QR code</button>
      <button onClick={()=>{setModalBarcodeIsOpen(true)}} style={{marginLeft:"30px"}}>Barcode</button>
    </div>

    <div>
      <p>Product {}</p>
    </div>
    <div>
    <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <div>
          <div>
          <button style={{marginLeft:"80%",marginRigt:"0px"}} onClick={()=>{setModalIsOpen(false)}}>Close</button>
          </div>
          <div style={{display:"block",marginTop:"30px"}}>
                <QrReader
                  delay={300}
                  onError={handleErrorFile}
                  onScan={handleScanWebCam}
                  constraints={ {facingMode: 'environment'} }
                  style={{ width: "100%",height:"100%" }}
               />
               <p>{scanResultQR}</p>
          </div>
        </div>
      </Modal>
    </div>

    <div>
    <Modal
        isOpen={modalBarcodeIsOpen}
        style={customStyles}
      >
        <div>
          <div>
          <button style={{marginLeft:"80%",marginRigt:"0px"}} onClick={()=>{setModalBarcodeIsOpen(false)}}>Close</button>
          </div>
          <div style={{display:"block",marginTop:"30px",height:"80%",width:"80%",border:"1 px solid black"}}>
              <BarcodeScannerComponent
                width={300}
                height={200}
                onUpdate={(err, result) => {
                  if (result){ 
                    setResult(result.text);
                    setModalBarcodeIsOpen(false)
                  }
                  else setData("Not Found");
                }}
              />
              <p>{data}</p>
          </div>
        </div>
      </Modal>
    </div>
    <h2>Result : {result}</h2>
  </div>
  );
}

export default App;
