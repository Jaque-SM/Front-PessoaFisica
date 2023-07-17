import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListPersons from './components/ListPersons';
import CreatePerson from './components/CreatePerson';
import ViewPerson from './components/ViewPerson';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component = {withRouter(ListPersons)}></Route>
            <Route path="/pessoas" component={withRouter(ListPersons)}></Route>
            <Route path="/add-pessoa/:id" component={withRouter(CreatePerson)}></Route>
            <Route path="/add-pessoa/:id" component={withRouter(ViewPerson)}></Route>
          </Switch>
        </div>

        <FooterComponent />
      </Router>


    </div>
  );
}

export default App;
