import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Docs from './Components/docs/'
const App = () => (
  <Docs/>
  
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
