import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import ListPersons from './components/crud/ListPersons';
import CreatePerson from './components/crud/CreatePerson';
import ViewPerson from './components/crud/ViewPerson';

function App() {

  return (
    <div className='App'>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route exact path="/" element = {<ListPersons/>}></Route>
            <Route path="/pessoas" element ={<ListPersons/>}></Route>
            <Route path="/add-pessoa/:id" element={<CreatePerson/>}></Route>
            <Route path="/viewuser/:id" element={<ViewPerson/>}></Route>
          </Routes>
        </div>

        <FooterComponent />
      </Router>


    </div>
  );
}

export default App;
