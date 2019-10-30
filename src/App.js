import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
// Importing Route
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    {/* Adding Routes, using exact path for home */}
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
