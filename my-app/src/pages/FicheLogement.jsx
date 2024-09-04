import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NoteEtoile from '../components/componentsLogement/NoteEtoile';
import LogementCaroussel from '../components/componentsLogement/LogementCaroussel';
import Data from '../dossier-logement/logement.json';
import './style/styleLogement/Logement.css';

const FicheLogement = () => {
    const { id } = useParams(); // Extraction de l'ID depuis l'URL
    const logement = Data.find(item => item.id === id); // Recherche du logement correspondant

    // Gestion du cas où aucun logement n'est trouvé
    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div>
            <Header />
            <LogementCaroussel pictures={logement.pictures}/>
            <NoteEtoile 
                hostName={logement.host.name} 
                hostPicture={logement.host.picture}
                rating={logement.rating}
            />
            <Footer />
        </div>
    );
};

export default FicheLogement;