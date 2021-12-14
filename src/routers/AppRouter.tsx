import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FirstExampleWithComponentScreen from "../components/examples/FirstExampleWithComponentScreen";
import SecondExampleWithComponentScreen from "../components/examples/SecondExampleWithComponentScreen";

const AppRouter = () => {
    return (
      <Router>
          <div className={"flex flex-row h-screen overflow-y-hidden"}>
              <Switch>
                  <Route exact path={"/"}>
                      <FirstExampleWithComponentScreen />
                  </Route>
                  <Route exact path={"/second"}>
                      <SecondExampleWithComponentScreen />
                  </Route>

              </Switch>
          </div>
      </Router>
    );
};

export default AppRouter
