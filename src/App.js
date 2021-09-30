import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CodeReviewComponent from "./components/pages/codeReview";
import AccessModifiersComponent from "./components/pages/accessModifiers";
import SoftwareArchitectureComponent from "./components/pages/architecture";
import DesignPatternsComponent from "./components/pages/designPatterns";
import SolidComponent from "./components/pages/solid";
import InheritanceComponent from "./components/pages/inheritance";
import ClasesComponent from "./components/pages/clases";
import ApiWebComponent from "./components/pages/apiweb";
import ApiWebToolsComponent from "./components/pages/apiwebtools";
import PolymorphismComponent from "./components/pages/polymorphism";
import ErrorManagementComponent from "./components/pages/errormanagement";
import TestDrivenComponent from "./components/pages/testdriven";
import InterfacesComponent from "./components/pages/interfaces";

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
            <SoftwareArchitectureComponent />
          </Route>
          <Route path="/designpatterns">
            <DesignPatternsComponent />
          </Route>
          <Route path="/solid">
            <SolidComponent />
          </Route>
          <Route path="/clases">
            <ClasesComponent />
          </Route>
          <Route path="/inheritance">
            <InheritanceComponent />
          </Route>
          <Route path="/interfaces">
            <InterfacesComponent />
          </Route>
          <Route path="/polymorphism">
            <PolymorphismComponent />
          </Route>
          <Route path="/apiweb">
            <ApiWebComponent />
          </Route>
          <Route path="/apiwebtools">
            <ApiWebToolsComponent />
          </Route>
          <Route path="/errormanagement">
            <ErrorManagementComponent />
          </Route>
          <Route path="/testdriven">
            <TestDrivenComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
