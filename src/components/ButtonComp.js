import {useState} from "react";
function ButtonComp({products}) {
    const [text, setText]= useState("Click");
  return (
    <button onClick={()=>{if(text==="Click") setText(""); else setText("Click") }}>{text}</button> 
  );
}

export default ButtonComp;