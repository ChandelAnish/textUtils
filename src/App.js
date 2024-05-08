import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/textarea';
import Timer from './components/Timer';
// import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  //this function is returning JSX
  //html         JSX
  //className --> classNameName
  //for --> htmlFor
  //tabindex --> tabIndex

  //JSX fragment --> <>     </>  if you want multiple tags then warp them inside JSX fragment

  //any thing inside {} are treated as js

  //babel compiles JSX 

  //every tag in JSX must have closing tag
  //html                  -->        JSX
  //<img src="" alt="">   -->        <img src="" alt="" />
  //<br>                  -->        <br />

  //replace all href="#" with href="/" since we will use react router

  //in React, paths starting with / are relative to the public folder, while paths without / are relative to the current file.


  // useEffect(() => {
  //   console.log(document.getElementById('word'));
  // }, []);

  const [mode,setmode]=useState('light')
  const [alert,setalert]=useState(null)

  const showAlert=(type,title,msg)=>{
    setalert({
      type:type,
      title:title,
      msg:` : ${msg}`
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
      {
        setmode('dark')
        document.body.style.backgroundColor='#060930';
        showAlert('success','success','dark mode enabled')
      }
      else
      {
        setmode('light')
        document.body.style.backgroundColor='white';
        showAlert('success','success','light mode enabled')
      }
  }

  return (
    <>
      <Navbar title='textUtils' about="about us" mode={mode} toggleMode={toggleMode}/> {/*passing properties*/}
      <div className="alertcontainer">
        <Alert alert={alert}/>
      </div>
      <TextArea showAlert={showAlert} mode={mode} toggleMode={toggleMode} heading="Enter any text for conversion" />
      <Timer showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>
      {/* <About/> */}
    </>
  );
}

export default App;//if you use default then you can import App with any name otherwise you will have to use App only (incase of : export App)


//.mjs  -->  MJS is an extension used for JavaScript files that adhere to the ECMAScript Modules (ESM) specification. 