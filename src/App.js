import React from 'react';

//header
import Header from './components/Header/Header';
import Header2 from './components/Header/Header2';
import Banner from './components/Header/Banner';

//body
import Portfolio from './components/Body/Portfolio';
import Home from './components/Body/Home';


function App() {
  return (
    <div className="App">
      <Header2 />
      <Home />
      {/* <Banner />
      <Portfolio /> */}
    </div>
  );
}

export default App;
