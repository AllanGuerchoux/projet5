import React from 'react';



const NoteEtoile = ({rating}) => {
    const stars = Array(5).fill(false).map((_, index) => index < rating);

    return (
        <div id='noteEtoile' className='note-etoile-container'>
            <div id='etoiles' className='etoiles'>
                {stars.map((filled, index) =>(
                <span key={index} className={filled ? 'filledStar' : 'emptyStar'}>★</span>))}
            </div>
        </div>
    );
};

export default NoteEtoile;