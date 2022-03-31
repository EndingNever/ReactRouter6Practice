import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Number2 from './Number2'
import Component3 from './Component3'


ReactDOM.render(
  <Router >
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/number2' element={<Number2 />}>
          <Route path='/number2/number3' element={<Component3 />} />
        </Route>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
