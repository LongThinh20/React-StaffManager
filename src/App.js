import React from "react";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/configureStore";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
