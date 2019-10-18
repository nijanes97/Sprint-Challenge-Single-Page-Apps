import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import WelcomePage from "./components/WelcomePage";



export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characterlist" component={CharacterList} />
    </main>
  );
}
