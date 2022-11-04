import './App.css';
import { useState } from 'react';
function App() {
  const [counters, setCounters] = useState([0,0,0]);
  
  return (
    <div className="App">
      <div>
        <button>Add counter</button>
        {counters.map((counter, index)=>{
          return <div><button onClick={()=>{
          const newTab = [...counters];
          newTab[index]= newTab[index] -1;
          setCounters(newTab);
        }}>-</button>
        <p>{counter}</p>
        <button onClick={()=>{
          const newTab = [...counters];
          newTab[index] = newTab[index] +1;
          setCounters(newTab);
        }}>+</button></div>
        })}
     
      </div>


    </div>
  );
}

export default App;
