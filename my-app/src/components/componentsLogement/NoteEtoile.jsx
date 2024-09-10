import React from 'react';



const NoteEtoile = ({rating, hostName, hostPicture}) => {
    const stars = Array(5).fill(false).map((_, index) => index < rating);
    return (
        <div id='noteEtoile' className='noteEtoile'>
            <div id='etoiles'className='etoiles'>
                {stars.map((filled, index) =>(
                <span key={index} className={filled ? 'filledStar' : 'emptyStar'}>★</span>))}
            </div>
            <div id='hostInfo' className='hostInfo'>
            <img src={hostPicture} alt="Hôte" id='hostPicture' className="host-picture" />
                <p>
                    {hostName.split(' ')[0]} <br /> {hostName.split(' ')[1]}
                </p>
            </div> 
        </div>
    );
};

export default NoteEtoile;