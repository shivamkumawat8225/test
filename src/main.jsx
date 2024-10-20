import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import global_en from "./translations/en/global.json";
import global_hi from "./translations/hi/global.json";
import global_es from "./translations/es/global.json";
// import I18nextProvider from "react-i18next";
import { I18nextProvider } from "react-i18next";

import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "hi",
  // fallbackLng: "en",
  resources: {
    en: { global: global_en },
    es: { global: global_es },
    hi: { global: global_hi },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </I18nextProvider>
  </React.StrictMode>
);
