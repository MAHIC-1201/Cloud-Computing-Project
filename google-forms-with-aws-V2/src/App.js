import React from 'react';
import './App.css'
import Header from './components/Header';
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formheader from './components/Formheader';
import CenteredTabs from './components/Tabs';
import Question_form from "./components/Question_form";
function App() {
  return (
    
    <div className="app">
      <Router>
       
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Template />
            <Mainbody />
          </>} />
          <Route path="/form/:id" element={
            <>
            <Formheader/>
            <CenteredTabs/>
            <Question_form/>
            </>
          }>

          </Route>
          
          
        </Routes>
        
      </Router> 

    </div>
  );
}

export default App;
