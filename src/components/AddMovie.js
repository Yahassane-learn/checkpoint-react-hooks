import React from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button , Form } from 'react-bootstrap';

function AddMovie() {
     return(
        <>
        <Form.Control size="text" type="text" placeholder="Title of Movie" />
        <br />
        <Form.Control type="text" placeholder="Write the description" />
        <br />
        <Form.Control size="text" type="text" placeholder="Give the src of img for this movie" />
        <br />
        <Form.Control size="text" type="text" placeholder="give the URL of this movie" />
        <br />
        <Form.Control size="text" type="text" placeholder="Ratting this in interval 1 to 5" />
        <br />
        <Button variant="primary" type="submit">Submit</Button>
        <br /><br /><br />
      </>
     )
}
export default AddMovie ;