// src/App.jsx
import React from "react";
import Header from './components/Header';

export default function App() {
  return (
    <div className="app" role="application" aria-label="Informe de Lecciones Aprendidas">
      <div>
        <Header />
        <main role="main">
        </main>
      </div>
    </div>
  );
}