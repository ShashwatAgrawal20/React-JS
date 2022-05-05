import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  // Link, 
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light') // Whether the dark mode is enable or not
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) =>{
              setAlert({
                msg: message, 
                type: type
              })
              setTimeout(()=>{
                setAlert(null);
              }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled', "success")
      // You won't do it normally in this type of website you can do this is facebook or gmail like website where it shows how many messages are unred or recieved
      // document.title = 'Textutils - DarkMode'
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', "success")
      // document.title = 'Textutils - LightMode'
      

    }
  }


  return (
    <>
      {/* Navbar  */}

      <Router>

      <Navbar mode={mode} toggleMode={toggleMode}/>
        
      <Alert alert={alert}/>


      <div className="container my-3">

					<Routes>
          			<Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
					{/*</Routes>*/}
         			 <Route exact path="/about" element={<About mode={mode}/>} />
					{/*<Routes>*/}
					</Routes>
        {/* <About/> */}

      </div>

      </Router>


      
    </>
  );
}

export default App;
