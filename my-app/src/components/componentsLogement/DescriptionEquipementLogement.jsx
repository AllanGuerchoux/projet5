import React, { useState } from 'react';


const DescriptionEquipementLogement = ({ description, equipments }) => {
    // Hook d'état pour gérer l'ouverture des collapses
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

    // Fonction pour gérer l'ouverture/fermeture de la description
    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    // Fonction pour gérer l'ouverture/fermeture des équipements
    const toggleEquipments = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen);
    };

    return (
        <div id="descriptionEquipementLogement">
            {/* Collapse pour la description */}
            <div className="collapseSection">
                <div className="collapseHeader" onClick={toggleDescription}>
                    <span>Description</span>
                    <span className={` flecheOuverture arrow ${isDescriptionOpen ? 'rotate' : ''}`}>❮</span>
                </div>
                {isDescriptionOpen && (
                    <div className="collapseContent">
                        <p>{description}</p>
                    </div>
                )}
            </div>

            {/* Collapse pour les équipements */}
            <div className="collapseSection">
                <div className="collapseHeader" onClick={toggleEquipments}>
                    <span>Équipements</span>
                    <span className={` flecheOuverture arrow ${isEquipmentsOpen ? 'rotate' : ''}`}>❮</span>
                </div>
                {isEquipmentsOpen && (
                    <div className="collapsContent">
                        <ul>
                            {equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DescriptionEquipementLogement;
