import React from 'react';

// Card.jsx - Componente de tarjeta reutilizable
function Card({ title, description, icon, children, className = '' }) {
    return (
        <article className={`card ${className}`}>
            {icon && <div className="card-icon" aria-hidden="true">{icon}</div>}
            {title && <h3 className="card-title">{title}</h3>}
            {description && <p className="card-description">{description}</p>}
            {children}
        </article>
    );
}
export default Card;