import React from 'react';
import '../style/export.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Cards from '../component/Cards'
import ExtendedCard from '../component/ExtendedCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Route path="/" exact component={Cards}/>
      <Route path="/monday" component={ExtendedCard}/>
    </BrowserRouter>
  );
}

export default App;
