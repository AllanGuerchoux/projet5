import React, { useState } from "react";

const DescriptionEquipementLogement = ({ description, equipments }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementsOpen, setIsEquipementsOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipements = () => {
    setIsEquipementsOpen(!isEquipementsOpen);
  };

  return (
    <section id="collapseSection">
      {/* Collapse pour la description avec la flèche */}
      <button onClick={toggleDescription} className="collapseButton">
        Description <span className={`fleche ${isDescriptionOpen ? 'rotate' : ''}`}>❮</span>
      </button>
      <div className={`collapseText ${isDescriptionOpen ? 'open' : ''}`}>
        <div className="content">{description}</div>
      </div>

      {/* Collapse pour les équipements avec la flèche */}
      <button onClick={toggleEquipements} className="collapseButton">
        Équipements <span className={`fleche ${isEquipementsOpen ? 'rotate' : ''}`}>❮</span>
      </button>
      <ul className={`collapseText ${isEquipementsOpen ? 'open' : ''}`}>
        {equipments && equipments.length > 0 ? (
          equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))
        ) : (
          <li>Aucun équipement disponible</li>
        )}
      </ul>
    </section>
  );
};

export default DescriptionEquipementLogement;
