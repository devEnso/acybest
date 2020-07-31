import React from 'react';

//header
import Header from './components/Header/Header';
import Banner from './components/Header/Banner';

//body
import Portfolio from './components/Body/Portfolio';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Portfolio />
    </div>
  );
}

export default App;
