import React from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard';


class App extends React.Component {

  state = {
    strikes: '0',
    balls: '0',
    fouls: '0',
    hits: '0'
  }

  render() {
  return (
    <div className="App">
      <Display />
      <Dashboard />
    </div>
  );
}}

export default App;
