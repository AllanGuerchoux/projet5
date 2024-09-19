import React from 'react';
import {Link} from 'react-router-dom'
import Data from '../dossier-logement/logement.json'
import '../pages/style/styleindex/index.css'
const Logement = () => {
    return (
        <section id='gallery'>
            {Data.map(item => (
                <div className='cardLogement' key={item.id}>
                    <Link to={`/Logement/${item.id}`} className='cardLink'>
                        <h2 className='cardTitre'>{item.title}</h2>
                        <img src={item.cover} alt={item.title} />
                    </Link>
                </div>
            ))}
        </section>
    );
};

export default Logement;