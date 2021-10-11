import {useState} from "react";
function ButtonComp() {
    const [showText, setShowText]= useState(true);
  return (
    <>
    {showText && <h1>Hello</h1>}
    <button onClick={()=>{setShowText(!showText)}}>Click</button> 
    
    </>
  );
}

export default ButtonComp;