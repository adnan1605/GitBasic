import React from "react";

function Timeconvertor(){
    let curTime=new Date().getHours();
    console.log(curTime);
    
    let greeting="";
    if(curTime>6 && curTime<12){
        greeting="Good Morning";
    }
    else if(curTime>12 && curTime<4){
        greeting="Good AfterNoon";
        CSSStyleDeclaration.color="red";
    }
    else{
        greeting="good Night";
        CSSStyleDeclaration.color="red";
    }
    return(
        <>
        <h1>className='text-primary display-7' {greeting} </h1>
        
        </>
    );
}
export default Timeconvertor;