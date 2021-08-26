import React from 'react' ;
import MoviesProps from "./MoviesProps";

function Props(props) {
    return (
        <div>
            {props.movies.map((movie) => (
                <MoviesProps
                    key={movie.id}
                    title={movie.title}
                    src={movie.src}
                    description={movie.description}
                    movieURL={movie.movieURL}
                />
            ))}
        </div>
    ); 
} 
export default Props;