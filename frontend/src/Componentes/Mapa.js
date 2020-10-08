import React from "react";
import "../Style/Mapa.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MapView from "../Componentes/MapView";
import Home from "../Componentes/Home";

function Mapa() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <MapView />;
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Mapa;