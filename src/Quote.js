import React, { useState } from 'react';

import './quote.css'
import { useQuery } from 'react-query';
const Quote = () => {
    // const [data,setData]=useState('')
    
    // const quoje=()=>{
    //     fetch('https://api.adviceslip.com/advice')
    //     .then(res=>res.json())
    //     .then(data=>setData(data.slip.advice))
    //    }

       const { isLoading, error, data , refetch } = useQuery('repoData', () =>
     fetch('https://api.adviceslip.com/advice').then(res =>
       res.json()
     )
   )

   if(isLoading){
    return <h2> Loading please wait a some moment ,As success needs patience</h2>
   }
   if(error){
    return <h2>To err is human , so am I .Soon we will fix it </h2>
   }
    return (
        <div>
            <h5 class="heading">Feeling distracted ?Read some positive quotes by Successfull People</h5>
            
            <div class="quotediv">
            <h2 >"{data?.slip?.advice}"</h2>
            </div>
            <button class="button" onClick={refetch} >Click for another</button>
        </div>
    );
};

export default Quote;