import React from 'react';
import Data from '../dossier-logement/logement.json'
import '../pages/style/index.css'
const Logement = () => {
    return (
        <div className='gallery' >
            {Data.map(item =>(
                <div className='cardLogement' key={item.id}>
                    <h2 className='cardTitre'>{item.title}</h2>
                    <img src={item.cover} />
                </div>
            ))}
        </div>
    );
};

export default Logement;