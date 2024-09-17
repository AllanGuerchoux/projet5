import React from 'react';

const HostInfo = ({hostName, hostPicture}) => {
    return (
        <div id='hostInfo' className='host-info'>
        <img src={hostPicture} alt="Hôte" id='hostPicture' className="host-picture" />
        <p className="host-name">
            {hostName.split(' ')[0]} <br /> {hostName.split(' ')[1]}
        </p>
    </div> 
    );
};

export default HostInfo;