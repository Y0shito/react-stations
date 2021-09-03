// DO NOT DELETE
import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message));
      });
  }, [])

  return (
    <BreedsSelect values={breeds} />);
}