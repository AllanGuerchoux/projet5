import React, { useState } from 'react';
import Data from './DropDownMenuInfo.json';

function DropdownMenu() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleMenu = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div id='aProposCollapse'>
      {Data.map(item => (
        <div key={item.id}>
          <button 
            onClick={() => toggleMenu(item.id)} 
            className="dropdown-button"
          >
            <span>{item.title}</span> 
            <span 
              className={`fleche ${openItemId === item.id ? 'rotate' : ''}`}
            >
              {"❮"}
            </span>
          </button>
          <div className={`collapseText ${openItemId === item.id ? 'open' : ''}`}>
            <div className="content">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DropdownMenu;