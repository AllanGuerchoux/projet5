import React, { useState } from 'react';

const CoposantCollapse = ({titre, enfant}) => {
    const [isOpen, setIsOpen] =useState(false);
    const ToggleCollapse =() =>{
        setIsOpen(!isOpen);
    }
    return (
        <div className='collapse'>
            <div className='collapseNom' onClick={ToggleCollapse}>
                <span>{titre}</span>
                <span className='fleche'>{"❮"}</span>
            </div>
            {isOpen && (
                <div className='contenuCollapse'>
                    {enfant}
                </div>
            )}
        </div>
    );
};

export default CoposantCollapse;