import React, { useState } from 'react';
 
 
const App = () => {
    let currDate=new Date();
    const currHour=currDate.getHours();
    let greeting="";
    const cssStyle={};
    if(currHour>=1 && currHour<12){
    greeting="Good Morning";
    cssStyle.color="green";
    }
    else if(currHour>=12 && currHour<19){
    greeting="Good Afternoon";
    cssStyle.color="Orange";
    }
    else{
    greeting="Good Night";
    cssStyle.color="Blue";
    }

    let time = new Date().toLocaleTimeString();
    
    const [count, setCount] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCount(time);
    };
    setInterval(UpdateTime,1000)
    return(
        <>
            <h1 class='heading'>Digital Clock</h1>
            <h1> 
            <span style={cssStyle}>{greeting} </span>
            {count}</h1>
           
        </> 
    );
};    
export default App;

