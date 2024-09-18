import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page404 = () => {
    return (
        <div id='pageCenter'>  
            <main id='main404'>
                <Header />
                <p className='codeErreur'>404</p>
                <p className='codeErreurDescription'>oups! la page que<br></br>vous demandez n'existe pas.</p>
                <a href='Index.jsx'>Retourner sur la page d'acceuil</a>
            </main>
            <Footer />
        </div>
    );
};

export default Page404;