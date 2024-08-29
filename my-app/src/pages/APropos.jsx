import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AProposCard from '../components/AProposCard';
import DropdownMenu from '../components/MenuDropDown';
import './style/index.css'
const APropos = () => {
    console.log("APropos")
    return (
        <div>
            <Header/>
            <AProposCard/>
            <DropdownMenu/>
            <Footer/>
        </div>
    );
};

export default APropos;