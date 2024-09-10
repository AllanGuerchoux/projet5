import React from 'react';
import Collapse from './LogementCollapse';

const DescriptionEquipementLogement = ({ description, equipments }) => {
    return (
        <div id='infoLogementCollapse' className="info-logement-collapse">
            <Collapse title="Description">
                <p>{description}</p>
            </Collapse>
            <Collapse title="Équipements">
                <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
    );
};

export default DescriptionEquipementLogement;