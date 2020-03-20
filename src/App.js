import React from 'react';
import { Provider } from "react-redux";
import 'antd/dist/antd.css';

import { store } from "./store";
import { RouteRoulette } from "./routing";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouteRoulette />
      </Provider>
    </div>
  );
}

export default App;
