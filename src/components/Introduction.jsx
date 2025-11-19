import React from 'react';
import Section from './Section';

// Introduction.jsx
function Introduction() {
    return (
        <Section id="introduccion" title="Introducción">
            <div className="intro-content">
                <p className="intro-paragraph">
                    Un <strong>informe de lecciones aprendidas</strong> es un documento esencial en la gestión de proyectos de software que registra las experiencias, conocimientos y aprendizajes obtenidos durante el ciclo de desarrollo.
                </p>
                <p className="intro-paragraph">
                    <strong>Objetivo del documento:</strong> Registrar y documentar las experiencias obtenidas durante el proceso de verificación del software, permitiendo la mejora continua y la transferencia de conocimiento.
                </p>
                <div className="standards-box">
                    <h3 className="standards-title">Estándares y metodologías aplicadas:</h3>
                    <ul className="standards-list">
                        <li><strong>ISO 9001:</strong> Gestión de calidad</li>
                        <li><strong>CMMI:</strong> Integración de modelos de madurez de capacidades</li>
                        <li><strong>ISTQB:</strong> Estándares de pruebas de software</li>
                        <li><strong>Metodologías ágiles:</strong> Scrum y buenas prácticas de desarrollo iterativo</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}

export default Introduction;