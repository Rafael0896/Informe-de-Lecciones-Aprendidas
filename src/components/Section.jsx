import React from 'react';

const Section = ({ title, idTitle, children }) => (
    <section className="section" aria-labelledby={idTitle}>
        <div className="container">
            <h2 className="section-title" id={idTitle}>{title}</h2>
            <div className="section-content">{children}</div>
        </div>
    </section>
);

export default Section;
