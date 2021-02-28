import React from 'react';
import './Player.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCity, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, email, img, salary, team, city} = props.players
    return (
        <div className="player-container">
    <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
        <p><FontAwesomeIcon icon={faEnvelope} />Email : {email}</p>
        <p><FontAwesomeIcon icon={faCity} />City : {city}</p>
        <p>Team : {team}</p>
        <p>Salary : ${salary}</p>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" size="md" active onClick={() =>props.handleSelectedClub(props.players)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Player;