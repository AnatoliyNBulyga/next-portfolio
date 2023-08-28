import React from 'react';

const CTA= () => {
    return (
        <div className="cta">
            <a
                // href="/img/John-Cv.pdf"
                // download
                className="btn"
            >
                Download CV
            </a>
            <a
                href="#contact"
                className="btn btn--outline"
            >
                Get in Touch
            </a>
        </div>
    );
};

export default CTA;