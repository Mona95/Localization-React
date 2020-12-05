import React from "react";
import ReactDOM from "react-dom";
//Styles
import "./index.css";
//Components
import App from "./containers/App/App";
//redux provider & store
import { Provider } from "react-redux";
import store from "./store";
//Localization
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
