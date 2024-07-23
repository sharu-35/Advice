import React, { useState } from 'react'
import "./Advice.css"
const Advice = () => {
    const [advice,setadvice]= useState("Please click button to get advice")
  const[count,setcount]=useState(0);
 async function getadvice(){
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();
    setadvice(data.slip.advice);
    setcount((c)=>c+1)
 }
  
  
  
    return (
    <div>
    <h3>{advice}</h3>
    <button onClick={getadvice}> Get Advice</button>
    <p>You have read <b>{count}</b> pieces of advice</p>
    </div>
  )
}

export default Advice
