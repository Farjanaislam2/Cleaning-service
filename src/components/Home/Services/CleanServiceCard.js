import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import {PhotoView} from 'react-photo-view'

const CleanServiceCard = ({clService}) => {
  console.log(clService)
    const {_id, picture, title,balance,about} =clService
    return (
        
      <CardGroup className='w-25 m-auto d-grid grid-cols-3'>
      <Card className='mb-5' >
        <PhotoView src={picture}>
        <Card.Img variant="top" src={picture} />
        </PhotoView>
       
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>{balance}</Card.Title>
          <Card.Text>
           {about?.slice(0, 100)+ '...'}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to={`/cleanServiceDetail/${_id}`}>
      <Button className="btn w-100 fw-bold btn-info" variant="primary">Service Detail</Button>
        </Link>
        </Card.Footer>
      </Card>
    </CardGroup>
      
    );
};

export default CleanServiceCard;