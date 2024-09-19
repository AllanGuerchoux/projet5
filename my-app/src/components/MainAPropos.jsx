import React from 'react';
import Header from './Header';
import AProposCard from './AProposCard';
import DropdownMenu from './MenuDropDown';
import Data from './DropDownMenuInfo.json'
const MainAPropos = () => {

    return (
        <main id='mainApropos'>
            <Header/>
            <AProposCard />
            <DropdownMenu />
        </main>
    );
};

export default MainAPropos;