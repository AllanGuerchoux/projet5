import React from 'react';

const InfoLogement = ({tags}) => {
    return (
        <div id='infoTags' className='infoTags'>
            <div id='tags' className='tags'>
                {tags.map((tags, index) =>
                <span key={index} className='tagsFiltre' >{tags}</span>)}
            </div>
            
        </div>
    );
};

export default InfoLogement;