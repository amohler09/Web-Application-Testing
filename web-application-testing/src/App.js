import React, {useState} from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard';



function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);

  
  return (
    <div className="App">
      <Display 
      strike={strike}
      ball={ball}
      hit={hit} />
      <Dashboard 
      setStrike={setStrike}
      setHit={setHit}
      setBall={setBall}/>
    </div>
  );
  }
  export default App;

