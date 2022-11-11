import React, { useState } from 'react';
import randomcolor from 'randomcolor';
import './quote.css'
const Quote = () => {
    const [data,setData]=useState('')
    var color = randomcolor()
    const quoje=()=>{
        fetch('https://api.adviceslip.com/advice')
        .then(res=>res.json())
        .then(data=>setData(data.slip.advice))
       }
    return (
        <div>
            <h3 class="heading">Wait A minute for here in Mahlil blog</h3>
            <h5>Random quote generator</h5>
            <div class="quotediv">
            <h1 style={{color:color}}>"{data}"</h1>
            </div>
            <button class="button" onClick={()=>{quoje()}} >Click for another</button>
        </div>
    );
};

export default Quote;