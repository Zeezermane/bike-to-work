//import logo from './bike.gif';
import React, { useEffect, useState } from "react";

import Button from './button';
import Date from './Date';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          How are you going to get to work day?
        </h1>
        <p>
          Click on the button and see how you should get there!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
        <Button/>
        <Date/>
        
      </header>
    </div>
  );
}

export default App;
