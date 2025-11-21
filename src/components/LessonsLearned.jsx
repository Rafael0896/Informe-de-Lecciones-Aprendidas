import React from 'react';
import Section from './Section';
import Card from './Card';

function LessonsLearned() {
    const lessons = [
        {
            icon: '📌',
            title: 'Documentación desde el inicio',
            description: 'Registrar procesos, decisiones y cambios desde el comienzo del proyecto evita pérdida de información y facilita la transferencia de conocimiento.'
        },
        {
            icon: '📏',
            title: 'Estandarización y trazabilidad',
            description: 'Aplicar estándares como ISO 9001 y CMMI mejora la consistencia, reduce errores y permite rastrear el origen de problemas rápidamente.'
        },
        {
            icon: '🎨',
            title: 'Herramientas de diseño visual',
            description: 'El uso de Figma y Canva mejora significativamente la claridad de la documentación y facilita la comprensión de conceptos complejos.'
        },
        {
            icon: '⚛️',
            title: 'Arquitectura modular con React',
            description: 'La organización en componentes reutilizables facilita el mantenimiento, escalabilidad y permite el trabajo colaborativo eficiente.'
        },
        {
            icon: '👥',
            title: 'Revisiones de usabilidad',
            description: 'Las pruebas con usuarios reales y revisiones de UX permiten detectar problemas de usabilidad antes de la entrega final.'
        },
        {
            icon: '🔐',
            title: 'Control de versiones',
            description: 'GitHub asegura el respaldo del código, permite colaboración segura y facilita la reversión de cambios cuando es necesario.'
        },
        {
            icon: '📅',
            title: 'Planificación adecuada',
            description: 'Una planificación detallada con cronograma realista evita retrabajos, reduce estrés y asegura entregas puntuales.'
        }
    ];

    return (
        <Section id="lecciones" title="Lecciones Aprendidas">
            <div className="lessons-grid">
                {lessons.map((lesson, index) => (
                    <Card
                        key={index}
                        title={lesson.title}
                        description={lesson.description}
                        className="lesson-card"
                    />
                ))}
            </div>
        </Section>
    );
}
export default LessonsLearned;