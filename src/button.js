import React from 'react';
import './App.css';


    const handleClick = () =>{
        var randNum = Math.random() * ((2-1) + 1);
        if (randNum < 1){
        alert("Drive to work");
        }else{
            alert("Bike to work");
        }
    }

function Button() {
  return (
    <div className="App">
        <button onClick = {handleClick}>What will you do today?</button>
    </div>
  );
}

export default Button;
