// DO NOT DELETE
import * as React from 'react'
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message));
      });
  }, [])

  const listImages = images.map((image) =>
    <img key={image} src={image} />
  )

  return (
    <>
      <div className="list">
        <BreedsSelect
          breeds={breeds}
          value={selectedBreed}
          change={(e) => setSelectedBreed(e.target.value)}
        />

        <button className="btn btn-primary" onClick={() =>
          fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
            .then(res => res.json())
            .then(data => {
              setImages(data.message);
            })}>
          画像を表示
        </button>
      </div>
      <div className="images">
        {listImages}
      </div>
    </>
  )
}