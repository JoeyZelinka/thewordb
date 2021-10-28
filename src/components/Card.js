import React from 'react';
import { Button } from 'react-bootstrap'
// import './Card.css';

const Card = ({
  id,
  name,
  imageUrl,
  addCardToDeck,
  removeCardFromDeck
}) => {
  return (
    <div className="Card">      
      <img className="preview" src={ imageUrl } alt=""/>
      <div className="actions">
        <Button variant="primary"
            onClick={() => {
              addCardToDeck({
                id,
                name
              })
            }}>
              (+) Add to Deck
            </Button>
          <button
            onClick={() => {
              removeCardFromDeck({
                id
              })
            }}>
            (-) Remove from Deck
          </button>
      </div>
    </div>
  );
}

export default Card;