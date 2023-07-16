//import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListPersons from './components/ListPersons';

function App() {

  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className="container">
      <Routes>
      <Route exact path = "/" element = {<ListPersons/>}></Route>
      <Route exact path = "/pessoas" element = {<ListPersons/>}></Route>





      </Routes>        
        </div>

        <FooterComponent />
      </Router>


    </div>
  );
}

export default App;
