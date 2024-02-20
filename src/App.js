import './App.css';
import { useRef,useState } from 'react';
import { ReactDOM } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Head from './components/Header/Head';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Head/>
      </div>
    </BrowserRouter>
  );
}

export default App;
