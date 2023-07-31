import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatGPT from './Pages/Day-1/ChatGPT';
import Github from './Pages/Day-2/Github';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <React.StrictMode>
      <Routes>
        <Route path = "/" element={<App />}/>
        <Route path = "chatGPT" element={<ChatGPT />}/>
        <Route path = "github" element={<Github/>}/>
      </Routes>
     
    </React.StrictMode>
  </Router>
 
);
