import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NoteEtoile from '../components/componentsLogement/NoteEtoile';
import LogementCaroussel from '../components/componentsLogement/LogementCaroussel';
import Data from '../dossier-logement/logement.json';
import TitreEtLocalisation from '../components/componentsLogement/TitreEtLocalisation';
import DescriptionEquipementLogement from '../components/componentsLogement/DescriptionEquipementLogement';
import InfoLogement from '../components/componentsLogement/InfoLogement';
import HostInfo from '../components/componentsLogement/HostInfo';



const FicheLogement = () => {
    const { id } = useParams(); // Extraction de l'ID depuis l'URL
    const logement = Data.find(item => item.id === id); // Recherche du logement correspondant

    // Gestion du cas où aucun logement n'est trouvé
    if (!logement) {
        return <Navigate to="/Page404" />; // le changement de page effectué 
    }

    return ( // à chaque {logement.x} on cherche dans Data (logement.json) l'info utile dans le tableau, remplacez x par ce que l'on cherche
        <div id='pageCenter'>
        <main id='mainFicheLogement'>
            <Header />
            <LogementCaroussel
            pictures={logement.pictures}/>         
            <section id='infoLocalisationHostLogement'>
            <div id='infoGauche'>
            <TitreEtLocalisation 
            title={logement.title}
            location={logement.location}
            />
            <InfoLogement 
            tags={logement.tags}/>
            </div>
            <div id='infoDroite'>
            <div id='etoilesHost'>
             
            <NoteEtoile 
                hostName={logement.host.name} 
                hostPicture={logement.host.picture}
                rating={logement.rating}
            />
            <HostInfo 
            hostName={logement.host.name} 
            hostPicture={logement.host.picture}
            />
            </div>
            </div>  
            </section>
            <DescriptionEquipementLogement 
            description={logement.description} 
            equipments={logement.equipments}
            />
            
        </main>
        <Footer />
        </div>
    );
};

export default FicheLogement;