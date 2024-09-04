import React from 'react';
import Header from './Header';
import AProposCard from './AProposCard';
import DropdownMenu from './MenuDropDown';
const MainAPropos = () => {
    return (
        <main>
            <Header/>
            <AProposCard />
            <DropdownMenu />
        </main>
    );
};

export default MainAPropos;