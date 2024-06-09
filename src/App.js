import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Alert from './Components/Alert'
import Form from './Components/Form';
import About from './Components/About';
import { Route,Routes} from 'react-router-dom';
function App() {



  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const togglemode= () =>{
    if (mode==='light') {
      setmode('dark')
      document.body.style.backgroundColor="#000000e0"
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled", "success");
    }

  }

  return (
    <>
    
    <Navbar name="TextConverter" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    

    <Routes>
        <Route path="/" element={<Form  mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    
    </>
  );
}

export default App;

