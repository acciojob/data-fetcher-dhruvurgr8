
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData] = useState(null);
  const[error,setError] = useState(null);
  useEffect(()=>{
    try{
      (async function(){
        const response = await fetch("https://dummyjson.com/products");
        const dataObtained = await response.json();
        setData(dataObtained);
      })();
    }
    catch(error){
      setError(error);
    }
    
  },[])
  var formattedJson = JSON.stringify(data, null, 2);
  return (
    <div>
        {/* Do not remove the main div */}
        {error?<p>error</p>:<pre>{formattedJson}</pre>}
        
    </div>
  )
}

export default App
