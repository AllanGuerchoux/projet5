import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/a_propos">A propos</Link>
        </nav>
    );
};

export default Nav;