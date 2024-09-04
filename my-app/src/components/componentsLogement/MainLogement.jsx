import React from 'react';
import Header from '../Header';
import NoteEtoile from './NoteEtoile'
import Data from '../../dossier-logement/logement.json'
const MainLogement = ({logementId}) => {
    const logement = Data.find(item => item.id === logementId)
    return (
        <div>
            <Header />
            <NoteEtoile 
            hostName={logement.host.name} 
            hostPicture={logement.host.picture}
            rating={logement.rating}
            />
        </div>
    );
};

export default MainLogement;