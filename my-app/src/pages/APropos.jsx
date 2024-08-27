import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AProposCard from '../components/AProposCard';
import './style/aPropos.css'
const APropos = () => {
    return (
        <div>
            <Header/>
            <AProposCard/>
            <Footer/>
        </div>
    );
};

export default APropos;