import './App.css';
import { useState } from 'react';
function App() {
  const [counters, setCounters] = useState([0]);
  
  return (
    <div className="App">
      <header>
        <h1>React Counter</h1>
      </header>
      <div className='body-container'>
        {counters.length < 3 && <button className='button' onClick={()=> {
         const newTab = [...counters];
         newTab.push(0);
         setCounters(newTab);
        }}>Add counter</button>}
       
        

        <div className='counters-div'>
        {counters.map((counter, index)=>{
          return <div className='count'>
            {counter > 0 ?<button onClick={()=>{
          const newTab = [...counters];
          newTab[index]= newTab[index] -1;
          setCounters(newTab);
        }}>-</button> : <div className='empty-count'></div> }
            

        <p>{counter}</p>
        {counter < 10 ?<button onClick={()=>{
          const newTab = [...counters];
          newTab[index] = newTab[index] +1;
          setCounters(newTab);
        }}>+</button> : <div className='empty-count'></div> }
        </div>
        })}</div>
     
      </div>


    </div>
  );
}

export default App;
