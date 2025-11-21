import React from 'react';
import Section from './Section';
import Card from './Card';

function GoodPractices() {
    const practices = [
        {
            title: 'ISO 9001',
            description: 'Sistema de gestión de calidad que establece criterios para asegurar que los productos y servicios cumplan con los requisitos del cliente y las regulaciones aplicables.'
        },
        {
            title: 'CMMI',
            description: 'Modelo de integración de madurez de capacidades que mejora los procesos organizacionales y la calidad de productos mediante niveles de madurez.'
        },
        {
            title: 'ISTQB',
            description: 'Estándares internacionales para pruebas de software que garantizan la competencia de los profesionales en testing y aseguramiento de calidad.'
        },
        {
            title: 'Pruebas continuas en Scrum',
            description: 'Integración de pruebas en cada sprint para detectar errores tempranamente y mantener la calidad del producto en desarrollo iterativo.'
        },
        {
            title: 'Documentación y control de cambios',
            description: 'Registro sistemático de modificaciones, decisiones y evolución del proyecto para asegurar trazabilidad y facilitar el mantenimiento.'
        },
        {
            title: 'Herramientas de apoyo',
            description: 'Uso estratégico de tecnologías como Google Docs, React, GitHub, Figma y Canva para optimizar el flujo de trabajo y colaboración.'
        }
    ];

    return (
        <Section id="buenas-practicas" title="Buenas Prácticas Seleccionadas">
            <div className="cards-grid">
                {practices.map((practice, index) => (
                    <Card
                        key={index}
                        title={practice.title}
                        description={practice.description}
                    />
                ))}
            </div>
        </Section>
    );
}
export default GoodPractices;