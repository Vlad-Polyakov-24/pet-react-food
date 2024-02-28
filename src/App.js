import React from "react";
import Header from "./components/Layout/Header/Header";
import Intro from "./components/Layout/Intro/Intro";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Intro/>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
