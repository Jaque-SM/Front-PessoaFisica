import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent';
import ListPersons from './components/ListPersons';
import CreatePerson from './components/CreatePerson';
import ViewPerson from './components/ViewPerson';

function App() {

  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element = {<ListPersons/>}></Route>
            <Route path="/pessoas" component={ListPersons}></Route>
            <Route path="/add-pessoa/:id" component={CreatePerson}></Route>
            <Route path="/add-pessoa/:id" component={ViewPerson}></Route>
          </Routes>
        </div>

        <FooterComponent />
      </Router>


    </div>
  );
}

export default App;
