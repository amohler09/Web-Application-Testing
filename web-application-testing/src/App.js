import React, {useState} from 'react';
import Display from './components/Display'
import HomeScore from './components/HomeScore';
//import AwayScore from './components/AwayScore'
import {addFoul} from './utils/addFoul'
import {Foul} from './utils/addFoul'
import styled from 'styled-components'

const AppDiv = styled.div`
  display: flex;
  width: 90;
  justify-content: center;
`;



function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0)

  const onClick = () => {
    setFoul(Foul);
    setStrike(addFoul);
  }
  
  return (
    <AppDiv>
       <HomeScore 
      setStrike={setStrike}
      setHit={setHit}
      setBall={setBall}
      setFoul={setFoul}
      onClick={onClick}/>
      <Display 
      strike={strike}
      ball={ball}
      hit={hit}
      foul={foul} />
      {/* <AwayScore
      setStrike={setStrike}
      setHit={setHit}
      setBall={setBall}
      /> */}

    </AppDiv>
  );
  }
  export default App;

