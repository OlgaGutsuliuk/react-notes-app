import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Alert } from "./components/Alert";
import { AlertState } from "./components/context/alert/AlertState";
import { FirebaseState } from "./components/context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <NavBar />
          <div className='container pt-4'>
            <Alert />
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
