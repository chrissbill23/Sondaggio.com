import React from 'react';
import ReactDOM from 'react-dom';
import LoginCheck from "./logincheck";
import './js/main.js';
import './asset/style/index.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './asset/style/style.css';
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import reportWebVitals from './reportWebVitals';
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
      <Header />
      <div id="sdg_body" >
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/addsurvey" element={<LoginCheck />} />
              <Route
                  path="*"
                  element={
                      <main style={{ padding: "1rem" }}>
                          <p>404!</p>
                      </main>
                  }
              />
          </Routes>
      </div>
      <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
