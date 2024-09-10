import React from 'react';

const TitreEtLocalisation = ({title, location}) => {
    return (
        <div className='titreEtLocalisation'>
            <h1>{title}</h1>
            <p>{location}</p>
        </div>
    );
};

export default TitreEtLocalisation;