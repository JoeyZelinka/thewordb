import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import Card from './Card';

const SearchResults = ({
  results,
  addCardToDeck,
  removeCardFromDeck
}) => {
  const [newResults, setNewResults] = useState([])
useEffect ( () => {

  const filteredResults = results.filter(result => result.imageUrl)
  setNewResults(filteredResults)
 
  
},[results])
console.log(newResults)
  return (
    <div id="results">
        <h3>Matching Cards ({results.length}):</h3>
        <div className="CardList">
          {
            newResults.map((result) => (
              <Card key={result.id}
              addCardToDeck={ addCardToDeck }
              removeCardFromDeck={ removeCardFromDeck }
              {...result} />
            ))
          }
        </div>
    </div>
  );
}

export default SearchResults;