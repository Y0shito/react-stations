// DO NOT DELETE
import * as React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleChange = (e) => setSelectedBreed(e.target.value)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message));
      });
  }, [])

  return (
    <BreedsSelect
      breeds={breeds}
      value={selectedBreed}
      change={handleChange}
    />)
}