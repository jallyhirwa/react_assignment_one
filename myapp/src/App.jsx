
import React, { createContext , useState, useEffect, useContext } from 'react';
const CounterContext =createContext();
import './app.css'
const App = () => { 
  const [globalCounter, setGlobalCounter] = useState(0);
  const [effect , seteffect] = useState()
  const [localCount, setLocalCount] = useState(0);
  const incrementGlobalCounter = () => {
    setGlobalCounter(globalCounter + 1);
  };
  const decrementGlobalCounter = () =>{
  setGlobalCounter(globalCounter - 1);
  };
  
  useEffect(()=>{
    console.log('Global counter updated:', globalCounter);
  }, [globalCounter]);
  return(
    <CounterContext.Provider value={{ globalCounter, incrementGlobalCounter }}> 
      <div>
        <center>   
        <h1>
        name:TUYISABE dative <br/><br />
        class:l5sod <br /><br /><br />
        <p>hooks are special functions that allow you to "hook into" React features such as state, lifecycle methods, and context in functional components</p>
        useEffect
        </h1>
        </center>
        <div>
          <center>
          <h2>Local Counter: {localCount}</h2>
          <button onClick={() => { 
            setLocalCount(localCount + 1); 
            incrementGlobalCounter(); 
          }}>
            Increment local Counter
          </button>
          </center>
        </div>
        <div>
          <center>
          <h3>Global Counter: {globalCounter}</h3>
          <button onClick={()=>{
            setGlobalCounter(globalCounter -1);
            decrementGlobalCounter();

           }}>
            decrement global Counter
           </button>
           </center>

          
        </div>
      </div> 
    </CounterContext.Provider>
  
  );
};

export default App;



