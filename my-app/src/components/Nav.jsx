import React from 'react';
import {Link} from 'react-router-dom'
import '../pages/style/index.css'
const Nav = () => {
    return (
        <nav className='nav-header'>
            <a href='home'>ACCEUIL</a>
            <Link to ='/a_propos'> A PROPOS</Link>
        </nav>
    );
};

export default Nav;