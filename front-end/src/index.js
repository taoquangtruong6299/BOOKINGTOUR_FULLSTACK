import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { render } from "react-dom";
import Home from './routes/index'
import Search from './routes/search'
import Details from './routes/details';


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


const rootElement = document.getElementById("page");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={"eBOOKING | Home"} />

      <Route path="/details" element={"eBOOKING | Details"} />
      <Route path="/search" element={"eBOOKING | Search"} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('title')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
