import React from 'react';

//header
import Header from './components/Header/Header';
import Banner from './components/Header/Banner';

//body
import PortfolioBar from './components/Body/PortfolioBar';
import Portfolio from './components/Body/Portfolio';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <PortfolioBar />
      <Portfolio />
    </div>
  );
}

export default App;
