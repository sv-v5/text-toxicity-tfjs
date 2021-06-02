import './App.css';
import logo from './logo.svg';
import React, { Fragment, useState } from "react";
import useTextToxicity from "text-toxicity-tfjs";


function Toxicity({ predictions }) {
  const style = { margin: 10 };

  if (!predictions) return <div style={style}>Loading predictions...</div>;

  return (
    <div style={style}>
      {predictions.map(({ label, match, probability }) => (
        <div style={{ margin: 5 }} key={label}>
          {`${label} - ${probability} ${match ? "☣️" : " "}`}
        </div>
      ))}
    </div>
  );
}


function App() {
  const [value, setValue] = useState("");
  const predictions = useTextToxicity(value);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Demo tfjs Classifier Running in the Browser
        </p>
        
      </header>
      <div className="Classifier">
        <div>
          <div>Write an example here</div>
          <textarea
            style={{ width: 500, height: 100 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {value && <Toxicity predictions={predictions} />}
      </div>  
    </div>
  );
}

export default App;
