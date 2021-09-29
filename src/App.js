import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import CodeReviewComponent from './components/codeReview'
import AccessModifiersComponent from './components/accessModifiers'
function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/codereview">
            <CodeReviewComponent />
          </Route>
          <Route path="/modifiers">
            <AccessModifiersComponent />
          </Route>
          <Route path="/architecture">
            <AccessModifiersComponent />
          </Route>
          <Route path="/designpatterns">
            <AccessModifiersComponent />
          </Route>
          <Route path="/solid">
            <AccessModifiersComponent />
          </Route>
          <Route path="/clases">
            <AccessModifiersComponent />
          </Route>
          <Route path="/inherence">
            <AccessModifiersComponent />
          </Route>
          <Route path="/interfaces">
            <AccessModifiersComponent />
          </Route>
          <Route path="/polymorphism">
            <AccessModifiersComponent />
          </Route>
          <Route path="/apiweb">
            <AccessModifiersComponent />
          </Route>
          <Route path="/apiwebtools">
            <AccessModifiersComponent />
          </Route>
          <Route path="/errormanagement">
            <AccessModifiersComponent />
          </Route>
          <Route path="/testdriven">
            <AccessModifiersComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
