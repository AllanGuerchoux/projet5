import React, { useState } from 'react';

const LogementCollapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id='collapes' className="collapse">
            <button onClick={toggleCollapse} className="collapse-button">
                {title} {isOpen ? '▲' : '▼'}
            </button>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

export default LogementCollapse;