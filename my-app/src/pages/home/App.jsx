import React from 'react';
import Header from '../../components/Header';
import Section from '../../components/Section';
import Logement from '../../components/Logement';
import Footer from '../../components/Footer';
import '../style/index.css'
const App = () => {
    return (
        <div>
            <Header />
            <Section />
            <Logement />
            <Footer />
        </div>
    );
};

export default App;