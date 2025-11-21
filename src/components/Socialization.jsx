import React from 'react';
import Section from './Section';
import Card from './Card';

function Socialization() {
    return (
        <Section id="socializacion" title="Socialización de Lecciones Aprendidas">
            <div className="socialization-content">
                <Card title="Comunicación con el equipo" className="socialization-card">
                    <ul className="socialization-list">
                        <li>Se realizaron sesiones de retrospectiva al finalizar cada sprint</li>
                        <li>Documentación compartida en repositorio centralizado (GitHub)</li>
                        <li>Presentaciones periódicas al instructor y compañeros de ficha</li>
                        <li>Uso de herramientas colaborativas para facilitar el intercambio de conocimiento</li>
                    </ul>
                </Card>

                <Card title="Acciones para futuros proyectos" className="socialization-card">
                    <ul className="socialization-list">
                        <li>Implementar checklist de verificación desde el inicio del proyecto</li>
                        <li>Establecer revisiones de código semanales entre pares</li>
                        <li>Crear plantillas reutilizables de documentación basadas en estándares</li>
                        <li>Dedicar tiempo específico para pruebas de usabilidad en cada iteración</li>
                        <li>Mantener bitácora digital actualizada en tiempo real</li>
                    </ul>
                </Card>

                <Card title="Recomendaciones para otros desarrolladores" className="socialization-card">
                    <ul className="socialization-list">
                        <li><strong>Invierte en planificación:</strong> El tiempo dedicado a planificar se recupera multiplicado durante el desarrollo</li>
                        <li><strong>Adopta estándares reconocidos:</strong> ISO, CMMI e ISTQB proporcionan marcos probados que mejoran la calidad</li>
                        <li><strong>Prioriza la arquitectura:</strong> Una buena estructura de componentes facilita el mantenimiento a largo plazo</li>
                        <li><strong>Documenta mientras desarrollas:</strong> No dejes la documentación para el final del proyecto</li>
                        <li><strong>Solicita retroalimentación temprana:</strong> Las revisiones tempranas previenen errores costosos</li>
                        <li><strong>Usa control de versiones:</strong> Git/GitHub no es opcional, es fundamental para cualquier proyecto serio</li>
                    </ul>
                </Card>
            </div>
        </Section>
    );
}

export default Socialization;