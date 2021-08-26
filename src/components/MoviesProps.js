import React from 'react';

import StarRating from './StarRating';

function MoviesProps(props) {
    return (
        <div className="Movie">
            <img
                src={props.src}
                alt={props.title}
            />
            <div>
                <h5>{props.title}</h5>
                <h6>{props.description}</h6>
                <a href={props.href} className="MovieURL"> <h6> movieURL </h6> </a>
                <StarRating />
            </div>
        </div>
    )
}

export default MoviesProps;