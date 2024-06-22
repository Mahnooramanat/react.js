import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Menu() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Broadway pizza</div>
         * So Delicious
        </div>
        <Badge bg="primary" pill>
          250
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Fried Chicken</div>
         * Tasty
        </div>
        <Badge bg="primary" pill>
         300
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Drinks</div>
         * French fries
        </div>
        <Badge bg="primary" pill>
         100
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Chicken roll</div>
         * catchup
        </div>
        <Badge bg="primary" pill>
         150
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Nuggets</div>
         * drinks
        </div>
        <Badge bg="primary" pill>
         90
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Menu;
