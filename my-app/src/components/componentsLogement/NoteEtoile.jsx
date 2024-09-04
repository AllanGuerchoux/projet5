import React from 'react';



const NoteEtoile = ({rating, hostName, hostPicture}) => {
    const stars = Array(5).fill(false).map((_, index) => index < rating);
    return (
        <div className='noteEtoile'>
            <div className='etoiles'>
                {stars.map((filled, index) =>(
                <span key={index} className={filled ? 'filledStar' : 'emptyStar'}>★</span>))}
            </div>
            <div className='hostInfo'>
            <img src={hostPicture} alt="Hôte" className="host-picture" />
                <p>
                    {hostName.split(' ')[0]} <br /> {hostName.split(' ')[1]}
                </p>
            </div> 
        </div>
    );
};

export default NoteEtoile;