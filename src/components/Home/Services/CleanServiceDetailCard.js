import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const CleanServiceDetailCard = ({serviceDetail}) => {
    const {_id,picture,title,balance,about} =serviceDetail
    return (
        <CardGroup className='w-50 m-auto'>
        <Card >
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            
            <Card.Title>{title}</Card.Title>
            <Card.Title>{balance}</Card.Title>
            <Card.Text>
             {about}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button className='btn w-100 fw-bold btn-info' variant="primary">Order Now</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
};

export default CleanServiceDetailCard;


