
import React, { useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData] = useState(null);
  useEffect(()=>{
    (async function(){
      const response = await fetch("https://dummyjson.com/products");
      const dataObtained = await response.json();
      setData(dataObtained);
    })
  },[])
  var formattedJson = JSON.stringify(data, null, 2);
  return (
    <div>
        {/* Do not remove the main div */}
        <pre>{formattedJson}</pre>
    </div>
  )
}

export default App
