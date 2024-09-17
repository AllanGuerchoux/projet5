import React from 'react';

const InfoLogement = ({tags}) => {
    return (
        <div id='infoTags'>
            <div id='tags'>
                {tags.map((tags, index) =>
                <span key={index} className='tagsFiltre' >{tags}</span>)}
            </div>
            
        </div>
    );
};

export default InfoLogement;