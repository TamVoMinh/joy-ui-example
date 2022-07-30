import * as React from 'react';
import { createRoot } from 'react-dom/client';
import configureStore from "./store/configStore";
import App from './App';

const store = configureStore();

const root = createRoot(document.getElementById('root')); 

root.render(<App store={store} />);
