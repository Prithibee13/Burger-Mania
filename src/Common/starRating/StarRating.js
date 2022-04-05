import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import { faStar } from '@fortawesome/free-solid-svg-icons'; */
import { faStar } from '@fortawesome/free-regular-svg-icons'
import React from 'react';


const StarRating = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
    );
};

export default StarRating;