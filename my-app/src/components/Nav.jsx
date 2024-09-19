import React from 'react';
import {Link} from 'react-router-dom'
import '../pages/style/styleindex/index.css'
const Nav = () => {
    return (
        <nav className='nav-header'>
            <Link to ='/home'>ACCEUIL</Link>
            <Link to ='/a_propos'> A PROPOS</Link>
        </nav>
    );
};

export default Nav;