import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from "./store/configStore";

const store = configureStore();

describe("Run app", () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})