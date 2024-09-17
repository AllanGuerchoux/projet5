import React from 'react';
import img from '../picture/imageSectionH1Background.jpeg'
const Section = () => {
    return (
        <section id='sectionTitre'>
            <div className='zoneTitre'>
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={img} alt="background du titre" />
            </div>
        </section>
    );
};

export default Section;