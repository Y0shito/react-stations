// DO NOT DELETE
import React, { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState();

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(data.message);
        console.log(data.message);
      });
  }, [])

  return (<p>test</p>);
}