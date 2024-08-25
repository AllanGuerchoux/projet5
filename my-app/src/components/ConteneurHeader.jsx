import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
const ConteneurHeader = () => {
    return (
        <div className='conteneur-header-logo-nav'>
            <Logo color={'#FF6060'} />
            <Nav />
        </div>
    );
};

export default ConteneurHeader;