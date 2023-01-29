import React, { useState } from 'react';
import randomcolor from 'randomcolor';
import './quote.css'
import { useQuery } from 'react-query';
const Quote = () => {
    // const [data,setData]=useState('')
    var color = randomcolor()
    // const quoje=()=>{
    //     fetch('https://api.adviceslip.com/advice')
    //     .then(res=>res.json())
    //     .then(data=>setData(data.slip.advice))
    //    }

       const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://api.adviceslip.com/advice').then(res =>
       res.json()
     )
   )
   console.log(data?.slip?.advice,'query')
    return (
        <div>
            <h3 class="heading">Wait A minute for here in Mahlil blog</h3>
            <h5>Random quote generator</h5>
            <div class="quotediv">
            <h1 style={{color:color}}>"{data?.slip?.advice}"</h1>
            </div>
            <button class="button"  >Click for another</button>
        </div>
    );
};

export default Quote;