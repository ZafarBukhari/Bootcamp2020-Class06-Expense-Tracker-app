import React from 'react';
import { HeaderComponent } from './components/headerComponent';
import { BalanceComponent } from './components/balanceComponent';
import { IncExpComponent } from './components/incExpComponent';
import { TransListComponent } from './components/transListComponent';
import { AddTransComponent } from './components/addTransComponent';
import { GlobalProvider } from './context/globalContext';
import { FooterComponent } from './components/footerComponent';
import './App.css';

function App() {
  return (
    
    <GlobalProvider>
      <div className="container">        
      <HeaderComponent />
        <BalanceComponent />
        <IncExpComponent />
        <TransListComponent />
        <AddTransComponent />
        <FooterComponent />
      </div>
    </GlobalProvider>
  );
}

export default App;
