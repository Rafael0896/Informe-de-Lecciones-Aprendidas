import React from 'react';
import Section from './Section';

function BitacoraSection() {
    const bitacoraData = [
        {
            fecha: '2023-11-01',
            actividad: 'Inicio del proyecto',
            descripcion: 'Planificación inicial y definición de alcance del proyecto de verificación',
            herramienta: 'Google Docs, Trello',
            resultado: 'Documento de planificación aprobado',
            observaciones: 'Se definieron objetivos claros y entregables'
        },
        {
            fecha: '2024-02-01',
            actividad: 'Análisis de fundamentos',
            descripcion: 'Estudio de estándares de calidad y metodologías de verificación',
            herramienta: 'Documentación ISO, CMMI, ISTQB',
            resultado: 'Marco teórico consolidado',
            observaciones: 'Investigación profunda de buenas prácticas'
        },
        {
            fecha: '2024-07-01',
            actividad: 'Diseño de instrumentos',
            descripcion: 'Creación de plantillas y herramientas de verificación',
            herramienta: 'Figma, Canva, Excel',
            resultado: 'Instrumentos de evaluación diseñados',
            observaciones: 'Diseño visual mejora la comprensión'
        },
        {
            fecha: '2025-02-01',
            actividad: 'Creación del proyecto React',
            descripcion: 'Inicialización del proyecto con arquitectura modular',
            herramienta: 'React, Vite, GitHub',
            resultado: 'Estructura base del proyecto',
            observaciones: 'Componentes reutilizables facilitan el desarrollo'
        },
        {
            fecha: '2025-07-01',
            actividad: 'Implementación del módulo',
            descripcion: 'Desarrollo de componentes y lógica de la aplicación',
            herramienta: 'React, CSS, JavaScript',
            resultado: 'Módulos funcionales implementados',
            observaciones: 'La modularidad permite escalabilidad'
        },
        {
            fecha: '2025-11-08',
            actividad: 'Revisión de usabilidad',
            descripción: 'Pruebas de experiencia de usuario y accesibilidad',
            herramienta: 'Lighthouse, pruebas manuales',
            resultado: 'Ajustes de UX implementados',
            observaciones: 'La retroalimentación temprana es crucial'
        },
        {
            fecha: '2025-11-09',
            actividad: 'Validación final y entrega',
            descripcion: 'Verificación completa y preparación de documentación',
            herramienta: 'Testing manual, documentación',
            resultado: 'Proyecto entregado y aprobado',
            observaciones: 'Control de calidad asegura éxito del proyecto'
        }
    ];

    return (
        <Section id="bitacora" title="Bitácora del Proyecto">
            <div className="table-container" role="region" aria-label="Tabla de bitácora del proyecto" tabIndex="0">
                <table className="bitacora-table">
                    <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Actividad/Proceso</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Herramienta TIC</th>
                        <th scope="col">Resultado</th>
                        <th scope="col">Observaciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bitacoraData.map((item, index) => (
                        <tr key={index}>
                            <td data-label="Fecha">{item.fecha}</td>
                            <td data-label="Actividad">{item.actividad}</td>
                            <td data-label="Descripción">{item.descripcion}</td>
                            <td data-label="Herramienta">{item.herramienta}</td>
                            <td data-label="Resultado">{item.resultado}</td>
                            <td data-label="Observaciones">{item.observaciones}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
}

export default BitacoraSection;