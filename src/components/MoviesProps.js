import React , {useState} from 'react' ;
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Button from 'react-bootstrap/Button'; 
import StarRating from './StarRating';

function MoviesProps(props) {
    return(
        <div className="Movie">
            <img 
                src={props.src}
                alt ={props.title}
            />
            <div>
                <h5>{props.title}</h5>
                <h6>{props.description}</h6>
                <a href ={props.href} className="MovieURL"> <h6> movieURL </h6> </a> 
                <StarRating />
                <AddWatchList />

            </div>
        </div>

    )
}

function AddWatchList() {
    const [show, setShow] = useState()
    return(
        <div>
            {
            show?<MoviesProps /> : null
            }
            <Button onClick={() =>setShow() }  variant="success">Add to WhatchList</Button>  
        </div>
    );
}
      
export default MoviesProps ; 