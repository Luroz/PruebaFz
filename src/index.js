import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from './js/styles/styles'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CounterView } from './js/views/CounterView';
import ContentView from './js/views/ContentView';
import Layout from './js/views/Layout';
import DetailsView from './js/views/DetailsView'
import { counters } from './js/reducers/index';

import "./index.sass"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';



const store = createStore(counters);

const Main = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ContentView />} />
        <Route path="/contenidos" element={<ContentView />} />
        <Route path="/contenidos/:id" element={<DetailsView />} />
        <Route path="/contadores" element={<CounterView />} />

      </Route>


    </Routes>


  </>
);

const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </>
);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
