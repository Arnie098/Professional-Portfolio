import { useEffect, useState } from "react";
import React from "react";





export default function Practice(){


   const [words] = useState("Hello world")
   const [reversedWords,setReversedWords] = useState();


   function reversed(words){
    let reverse = " ";
   for(let i = words.length -1; i >= 0; i--){
      
      reverse += words[i];
      

   }

   setReversedWords(reverse);


   }

   useEffect(() => {
   
    reversed(words);

   },[])


    return(<>
    
    
     
      <h1>Original: {words}</h1>
      <h2>Reversed: {reversedWords}</h2>
    
    
    
    </>);
}