import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CounterView } from './js/views/CounterView';
import { counters } from './js/reducers/index';



const store = createStore(counters);

const Main = () => (
  <>
    <Routes>
      <Route path="/" element={<CounterView />}>
      </Route>

    </Routes>


  </>
);

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </>
);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
