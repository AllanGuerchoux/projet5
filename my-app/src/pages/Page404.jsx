import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page404 = () => {
    return (
        <div>
            <Header />
            <main id='main404'>
                <span className='codeErreur'>404</span>
                <span className='codeErreurDescription'>oups! la page que vous demandez n'existe pas.</span>
                <a href='Index.jsx'>Retourner sur la page d'acceuil</a>

            </main>
            <Footer />
        </div>
    );
};

export default Page404;