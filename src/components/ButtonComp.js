import {useState} from "react";
function ButtonComp() {
    const [text, setText]= useState("Click");
  return (
    <button onClick={()=>{ text==="Click" ? setText("") : setText("Click") }}>{text}</button> 
  );
}

export default ButtonComp;