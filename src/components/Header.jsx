import React from 'react';

function Header() {
    return (
        <header className="header" role="banner">
            <div className="header-content">
                <div className="logo">
                    <span className="logo-text">SENA</span>
                </div>
                <div className="header-text">
                    <h1 className="main-title">Informe de Lecciones Aprendidas – Verificación del Software</h1>
                    <p className="subtitle">Proceso de calidad, verificación y documentación del software</p>
                </div>
            </div>
        </header>
    );
}

export default Header;