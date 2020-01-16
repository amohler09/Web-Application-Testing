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
      strikes={strike}
      balls={ball}
      hit={hit} />
      <Dashboard />
    </div>
  );
  }
  export default App;

