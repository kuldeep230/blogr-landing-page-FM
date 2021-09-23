import React from "react";
//CSS
import "./App.css";
//Components
import Head from "./components/Head/Head";
import Main from "./components/Main/Main";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Head />
        <Main />
      </div>
    );
  }
}

export default App;
