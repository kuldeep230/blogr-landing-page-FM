import React from "react";
//CSS
import "./App.css";
//Components
import Head from "./components/Head/Head";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Head />
      </div>
    );
  }
}

export default App;
