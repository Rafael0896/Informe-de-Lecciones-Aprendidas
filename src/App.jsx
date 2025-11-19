// src/App.jsx
import React from "react";
import Header from './components/Header';
import Introduction from './components/Introduction';
import BitacoraSection from "./components/BitacoraSection.jsx";

export default function App() {
  return (
    <div className="app" role="application" aria-label="Informe de Lecciones Aprendidas">
      <div>
        <Header />
        <main role="main">
            <Introduction />
            <BitacoraSection />
        </main>
      </div>
    </div>
  );
}