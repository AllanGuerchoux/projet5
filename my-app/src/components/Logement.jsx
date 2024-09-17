import React from 'react';
import Data from '../dossier-logement/logement.json'
import '../pages/style/styleindex/index.css'
const Logement = () => {
    return (
        <section id='gallery'  >
            {Data.map(item =>(
                <div className='cardLogement' key={item.id}>
                    <h2 className='cardTitre'>{item.title}</h2>
                    <img src={item.cover} alt=''/>
                </div>
            ))}
        </section>
    );
};

export default Logement;